const router = require("express").Router();
const {
  userRegister,
  userLogin,
  userLogout,
  userLoggedin,
  userProfileUpdate,
  userProfile,
  userImageUpload,
  uploadImage,
} = require("../controllers/user.js");
const auth = require("../middleware/auth.js");
const path = require("path")
const multer = require("multer")

// register

router.post("/", userRegister);

// log in

router.post("/login", userLogin);

// logout

router.get("/logout", userLogout);

//loggedin

router.get("/loggedIn", userLoggedin);

// Create and update a User Profile

// const __dirname = path.resolve()
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'Frontend/public/uploads')
  },
  filename(req, file, cb) {
    cb(
      null, 
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    )
  }
})

const checkFileType = (file, cb) => {
  const fileTypes = /jpg|jpeg|png/
  const extname  =fileTypes.test(path.extname(file.originalname).toLowerCase())
  const mimetype = fileTypes.test(file.mimetype)

  if(extname && mimetype) {
    cb(null, true)
  } else {
    cb("Images only!")
  }
}

const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb)
  }
})

router.post("/upload", upload.single('image'), userImageUpload)

router.patch("/update-profile/:id",  userProfileUpdate);

// Get a User Profile

router.get("/get-profile/:id", userProfile);

module.exports = router;
``