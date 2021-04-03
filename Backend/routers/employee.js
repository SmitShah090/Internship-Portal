const { employeeRegister, employeeLogin,employeeLogout, postJob, employeeProfileUpdate, getJobs, getCompanyInfo } = require('../controllers/employee')

const router = require('express').Router()

// Register
router.post("/", employeeRegister)

// Login
router.post("/login", employeeLogin)

//Logout
router.get("/logout", employeeLogout)

// Create Job Post
router.post("/postjob", postJob)

// Update Employee Profile
router.put("/update-profile/:id", employeeProfileUpdate)

// Get All job
router.get("/getjobs", getJobs)

// Get Company Information
router.get("/getinfo/:id", getCompanyInfo)

module.exports = router