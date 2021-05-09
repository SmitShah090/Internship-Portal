const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobSchema = new Schema(
  {
    photo: {
      type: String
    },
    jobTitle: {
      type: String,
    },
    jobType: {
      type: String,
    },
    companyName: {
      type: String,
    },
    companyUrl: {
      type: String,
    },
    workType: {
      type: String,
    },
    payScale: {
      type: String,
    },
    jobDescription: {
      type: String,
    },
    skills: [{
      type: String
    }]
  },
  {
    timestamps: true,
  }
);

const Job = mongoose.model("job", jobSchema);

module.exports = Job;
