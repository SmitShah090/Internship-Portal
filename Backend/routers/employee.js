const { employeeRegister, employeeLogin,employeeLogout, postJob, employeeUploadImage, employeeProfileUpdate, getJobs, getCompanyInfo } = require('../controllers/employee')

const router = require('express').Router()
const path = require("path")
const multer = require("multer")

// Register
router.post("/", employeeRegister)

// Login
router.post("/login", employeeLogin)

//Logout
router.get("/logout", employeeLogout)

// Create Job Post
router.post("/postjob", postJob)

// Update Employee Profile

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

router.post("/upload", upload.single('image'), employeeUploadImage)

router.put("/update-profile/:id", employeeProfileUpdate)

// Get All job
router.get("/getjobs", getJobs)

// Get Company Information
router.get("/getinfo/:id", getCompanyInfo)

module.exports = router