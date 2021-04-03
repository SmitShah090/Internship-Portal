const router = require("express").Router();
const User = require("../models/user.js");
const {
  userRegister,
  userLogin,
  userLogout,
  userLoggedin,
  userProfileUpdate,
  userProfile,
} = require("../controllers/user.js");

// register

router.get("/smit", (req, res) => {
  res.cookie("Test", "Cookie")
  res.send("Hi Smit")
})

router.post("/", userRegister);

// log in

router.post("/login", userLogin);

// logout

router.get("/logout", userLogout);

//loggedin

router.get("/loggedIn", userLoggedin);

// Create and update a User Profile

router.patch("/update-profile/:id", userProfileUpdate);

// Get a User Profile

router.get("/get-profile/:id", userProfile);

module.exports = router;
