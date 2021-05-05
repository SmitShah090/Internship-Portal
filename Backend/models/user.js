const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var uuid = require('node-uuid');

const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
    },
    email: {
      type: String,
    },
    passwordHash: {
      type: String,
    },
    profile: {
      name: {
        type: String,
        require: false,
      },
      title: {
        type: String,
        require: false,
      },
      description: {
        type: String,
        require: false,
      },
      photo: {
        type: String
      },
      skills: [{
        type: String
      }],
      basicInfo: {
        age: {
          type: Number,
          require: false,
        },
        phoneno: {
          type: Number,
          require: false,
        },
        experiance: {
          type: String,
          require: false,
        },
        ctc: {
          type: Number,
          require: false,
        },
        location: {
          type: String,
          require: false,
        },
        email: {
          type: String,
          require: false,
        },
      },
      education: [{
        _id: { 
          type: String, 
          default: uuid.v1()
        },
        university: {
          type: String,
          require: false,
        },
        edescription: {
          type: String,
          require: false,
        },
      }],
      projects: [{
        _id: { 
          type: String, 
          default: uuid.v1()
        },
        projectname: {
          type: String,
          require: false,
        },
        pdescription: {
          type: String,
          require: false,
        },
      }],
      certification: [{
        _id: { 
          type: String, 
          default: uuid.v1()
        },
        certiname: {
          type: String,
          require: false,
        },
        cdescription: {
          type: String,
          require: false,
        },
      }],
    },
    tokens: [{
      token: {
          type: String,
          required: true
      }
  }]
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("user", UserSchema);

module.exports = User;
