const User = require('../models/user')
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth.js");
const multer = require("multer");


// Register of User
 const userRegister = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // validation

    if (!username || !email || !password)
      return res
        .status(400)
        .json({ errorMessage: "Please enter all required fields." });

    if (password.length < 6)
      return res.status(400).json({
        errorMessage: "Please enter a password of at least 6 characters.",
      });

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({
        errorMessage: "An account with this email already exists.",
      });

    // hash the password

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    // save a new user account to the db

    const newUser = new User({
      username,
      email,
      passwordHash,
    });

    const savedUser = await newUser.save();

    // sign the token

    const token = jwt.sign(
      {
        _id: savedUser._id.toString(),
      },
      process.env.JWT_SECRET
    );
    console.log(token);

    savedUser.tokens = savedUser.tokens.concat({ token });
    await savedUser.save();
    // send the token in a HTTP-only cookie

    res
      .cookie("token", token, {
        /* expires: new Date(Date.now() + 60000), */
        httpOnly: true,
        secure: true,
        sameSite: "none",
      })
      .send("Cookies sent");

    /* res.json({ token, savedUser }); */
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
};

// Login Of User
 const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;


    const existingUser = await User.findOne({ email });
    if (!existingUser)
      return res.status(401).json({ errorMessage: "Wrong email or password." });

    const passwordCorrect = await bcrypt.compare(
      password,
      existingUser.passwordHash
    );
    if (!passwordCorrect)
      return res.status(401).json({ errorMessage: "Wrong email or password." });

    // sign the token

    let token = jwt.sign(
      {
        user: existingUser._id,
      },
      process.env.JWT_SECRET
    );
    // send the token in a HTTP-only cookie

    res
      .cookie("token", token, {
        maxAge: 900000,
        httpOnly: true,
        // secure: true,
      })
      .json(existingUser);
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
};

// LogOut for User
 const userLogout = async (req, res) => {

  res.status(200).clearCookie('token').send('cookie cleared.')

  /* res
    .cookie("token", "" , {
      httpOnly: true,
      expires: new Date(Date.now() + 10000),
      secure: true,
      sameSite: "none",
    })
    .send() */;
    
   /*  res.clearCookie('token')
    await req.user.save()
    res.status(200).send("user logout")
    console.log('logout'); */


};

// User LoggedIn
 const userLoggedin = async (req, res) => {
  console.log(`Hello ${req.cookies.token}`);
  try {
    let token = req.cookies.token;
    console.log(token);
    if (!token) return res.json(false);

    jwt.verify(token, process.env.JWT_SECRET);

    res.send(true);
  } catch (err) {
    res.json(false);
  }
};

// Update the UserProfile

const userImageUpload = async(req, res) => {
  res.send(`${req.file.path}`)
}

const userProfileUpdate = async(req, res) => {

  const {profile} = req.body
  try {
    const updatedprofile = await User.findByIdAndUpdate(req.params.id, {
      $set: {
        ...User,
        profile,
      },
    });

    const savedProfile = await updatedprofile.save().then((result) => {
      res.status(200).json({
        succes: 'succes',
        updated_profile: result,
      });
    });

    res.json(savedProfile);
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
}

// Get the UserProfile
 const userProfile = async(req, res) => {
   try {
    const user = await User.findById(req.params.id)
    if(!user){
      res.status(404).send("No User with this ID")
    }
    res.json(user)
   } catch (error) {
    console.error(error);
    res.status(500).json({ error });
   }
    
}

module.exports = {userRegister, userLogin, userLogout, userLoggedin, userProfileUpdate, userImageUpload, userProfile}
