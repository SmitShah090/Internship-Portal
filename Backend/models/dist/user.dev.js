"use strict";

var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var UserSchema = new Schema({
  username: {
    type: String,
    unique: true
  },
  email: {
    type: String
  },
  passwordHash: {
    type: String
  },
  profile: {
    name: {
      type: String,
      require: false
    },
    title: {
      type: String,
      require: false
    },
    description: {
      type: String,
      require: false
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
        require: false
      },
      phoneno: {
        type: Number,
        require: false
      },
      experiance: {
        type: String,
        require: false
      },
      ctc: {
        type: Number,
        require: false
      },
      location: {
        type: String,
        require: false
      },
      email: {
        type: String,
        require: false
      }
    },
    education: [{
      university: {
        type: String,
        require: false
      },
      edescription: {
        type: String,
        require: false
      }
    }],
    projects: {
      projectname: {
        type: String,
        require: false
      },
      pdescription: {
        type: String,
        require: false
      }
    },
    certification: {
      certiname: {
        type: String,
        require: false
      },
      cdescription: {
        type: String,
        require: false
      }
    }
  },
  tokens: [{
    token: {
      type: String,
      required: true
    }
  }]
}, {
  timestamps: true
});
var User = mongoose.model("user", UserSchema);
module.exports = User;