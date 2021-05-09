const mongoose = require("mongoose")
const Schema = mongoose.Schema

const EmployeeSchema = new Schema({
    username: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    passwordHash: {
        type: String
    },
    companyInfo: {
        photo: {
            type: String
        },
        companyName: {
            type: String
        },
        companyLocation: {
            type: String
        },
        companyURL: {
            type: String
        },
        companyDescription: {
            type: String
        }
    }
    
})

const Employee = mongoose.model('employee', EmployeeSchema)

module.exports = Employee