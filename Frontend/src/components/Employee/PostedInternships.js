import React, { useEffect, useState } from "react";
import useStyles from "../../styles/Employee/PostedInternship";
import {
  Avatar,
  Button,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import InternshipCard from "../User/Internships/InternshipCard";
import Axios from "axios";

const PostedInternships = () => {
  const [jobs, setJobs] = useState([]);
  

  const [companyName, setCompanyName] = useState("");
  const [companyLocation, setCompanyLocation] = useState("");
  const [companyDescription, setCompanyDescription] = useState("");
  const [companyURL, setCompanyURL] = useState("");

  const [loading, setLoading] = useState(false);

  const storedEmployee = JSON.parse(localStorage.getItem("employeeInfo"));

  const employee_ID = storedEmployee.existingEmployee._id;

  useEffect(async () => {
    setLoading(true);

    try {
      const companyInfo = await Axios.get(
        `http://localhost:5000/employee/getinfo/${employee_ID}`
      );
      console.log(companyInfo);

      setCompanyName(companyInfo.data.profileInfo.companyName);
      setCompanyLocation(companyInfo.data.profileInfo.companyLocation);
      setCompanyURL(companyInfo.data.profileInfo.companyURL);
      setCompanyDescription(companyInfo.data.profileInfo.companyDescription);

      const data = await Axios.get("http://localhost:5000/employee/getjobs");
      console.log(data);
      setJobs(data.data);
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  }, [setJobs]);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={2}
        alignItems="center"
        justify="center"
        className={classes.header}
      >
        {loading && <CircularProgress />}
        <Grid item lg={2}>
          <Grid container spacing={3}>
            <Grid item>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </Grid>
            <Grid item>
              <Typography variant="h6">{companyName}</Typography>
              <Typography variant="subtitle1">{companyLocation}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={6}>
          <Button
            className={classes.submit}
            color="secondary"
            fullWidth
            type="text"
            variant="contained"
          >
            Posted Internship
          </Button>
        </Grid>
      </Grid>
      <hr></hr>

      <Container className={classes.jobCard}>
        <Grid container spacing={6} justify="center">
          {loading && <CircularProgress />}
          {jobs.map((job) => (
            <Grid item lg={10}>
              <InternshipCard job={job.jobInfo} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default PostedInternships;
