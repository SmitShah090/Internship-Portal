const router = require("express").Router();
const {
  userRegister,
  userLogin,
  userLogout,
  userLoggedin,
  userProfileUpdate,
  userProfile,
  uploadImage,
} = require("../controllers/user.js");
const auth = require("../middleware/auth.js");

// register

router.post("/", userRegister);

// log in

router.post("/login", userLogin);

// logout

router.get("/logout", userLogout);

//loggedin

router.get("/loggedIn", userLoggedin);

// Create and update a User Profile

router.patch("/update-profile/:id",  userProfileUpdate);

// Get a User Profile

router.get("/get-profile/:id", userProfile);

module.exports = router;
