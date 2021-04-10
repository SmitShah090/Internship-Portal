const Employee = require("../models/Employee");
const bcrypt = require("bcryptjs");
const Job = require("../models/job");

// Register Employee
const employeeRegister = async (req, res) => {
  try {
    const { email, username, password } = req.body;

    // Validation
    if (!username || !email || !password)
      return res
        .status(400)
        .json({ errorMessage: "Please enter all required fields." });

    if (password.length < 6)
      return res.status(400).json({
        errorMessage: "Please enter a password of at least 6 characters.",
      });

    const existingEmployee = await Employee.findOne({email})
    if (existingEmployee)
      return res.status(400).json({
        errorMessage: "An account with this email already exists.",
      });

    // hash the password
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    // save a new user account to the db
    const newEmployee = new Employee({
        email,
        passwordHash,
        username
    })
    const savedEmployee =  newEmployee.save()

    res.json({savedEmployee})
  } catch(err) {
    console.error(err);
    res.status(500).send();
  }
};

// Login Employee
const employeeLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // validate
    if (!email || !password)
      return res
        .status(400)
        .json({ errorMessage: "Please enter all required fields." });

    const existingEmployee = await Employee.findOne({ email });
    if (!existingEmployee)
      return res.status(401).json({ errorMessage: "Wrong email or password." });

    const passwordCorrect = await bcrypt.compare(
      password,
      existingEmployee.passwordHash
    );
    if (!passwordCorrect)
      return res.status(401).json({ errorMessage: "Wrong email or password." });
      res.json({existingEmployee})
  } catch(err) {
    console.error(err);
    res.status(500).send();
  }
};

// Logout Employee
const employeeLogout = async (req, res) => {
  try {
    res.send("Logout");
  } catch(err) {
    console.error(err);
    res.status(500).send();
  }
};

// Create a Job
const postJob = async(req, res) => {
  const {jobInfo} = req.body
  try {
    const newJob = await new Job({
      ...jobInfo
    })
    const savedjob = await newJob.save()
    

    res.json(savedjob);
  } catch (error) {
    console.error(error);
    res.status(500).send();
  }
}

// Update Employee Profile
const employeeProfileUpdate = async(req, res) => {

  const {companyInfo} = req.body

  try {
    const updatedProfileInfo = await Employee.findByIdAndUpdate(req.params.id, {
      $set: {
        ...Employee,
        companyInfo
      }
    })

    const savedUpdatedProfileInfo = await updatedProfileInfo.save().then((result) => {
      res.send(200).json({
        updated_Profile_Info: result
      })
    })

    res.json({savedUpdatedProfileInfo})
  } catch (error) {
    
  }
}

// Get all Job
const getJobs = async(req, res) => {
  try {
    await Job.find({}, async(err, jobs) => {
      if (err) console.log(err);
      res.json(jobs)
    })
  } catch (error) {
    console.error(error);
    res.status(500).send();
  }
}

// Get Employee Information
const getCompanyInfo = async(req, res) => {
  try {
    const employee = await Employee.findById(req.params.id)
    if(!employee){
      res.status(404).json("No Company register with this ID")
    }
    console.log(employee)
    res.json(employee)

  } catch (error) {
    console.error(error);
   
    res.status(500).json({ error });
  }
}

module.exports = { employeeRegister, employeeLogin, employeeLogout, postJob, getJobs, employeeProfileUpdate, getCompanyInfo };
