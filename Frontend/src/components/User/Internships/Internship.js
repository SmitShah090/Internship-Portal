import {
  Avatar,
  Button,
  Container,
  Grid,
  InputBase,
  Paper,
  TextField,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import Axios from "axios";
import LocationOnIcon from "@material-ui/icons/LocationOn";

import useStyles from "../../../styles/User/Internship";
import SideBar from "./SideBar";
import InternshipCard from "./InternshipCard";

const Internship = ({history}) => {
  const [jobs, setJobs] = useState([]);
  const [query, setQuery] = useState("")
  const [search, setSearch] = useState("")

 /*  const getInternships = async () => {
    try {
      const data = await Axios.get("http://localhost:5000/employee/getjobs",{
        withCredentials: true
      });
      console.log(data);
      setJobs(data.data);
      if(!data.status === 200){
        const error = new Error(data.error)
        throw error;
      }
    } catch (error) {
      console.log(error);
      history.push("/studentlogin")
    }
  } */

  useEffect(async () => {
   const data =   await Axios.get("http://localhost:5000/employee/getjobs",{
      withCredentials: true
    });
    console.log(data.data);
      setJobs(data.data);
   // getInternships()
  }, [setJobs]);

 /*  const filterSearch = jobs.filter( job => {
    return job.toLowerCase().includes( search.toLowerCase())
  }) */


 /*  function search (jobs){
    return jobs.filter(
      (job) => 
      job.job.location.toLowerCase().indexOf(query) > -1 ||
      job.job.jobType.toLowerCase().indexOf(query) > -1 
      
      )
  } */

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container justify="space-around">
        {/*  Side Bar (Filters) */}
        <Grid item lg={2}>
          <SideBar />
        </Grid>

        {/* Top Search Filters */}
        <Grid item lg={9}>
          <Grid container direction="column" justify="space-around" spacing={1}>
            <Grid item lg={12}>
              <Paper className={classes.search} variant={4}>
                <Container>
                  <Grid container>
                    <Grid lg={4} item spacing={4} alignItems="flex-start">
                      <SearchIcon className={classes.icon} opacity="50%" />
                      <InputBase id="Search-Job" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search for job" />
                    </Grid>
                    <hr color="grey"></hr>
                    <Grid item lg={4} alignItems="flex-start">
                      <LocationOnIcon className={classes.icon} opacity="50%" />
                      <InputBase value={search} onChange={(e) => setSearch(e.target.value)} id="location" placeholder="location" />
                    </Grid>
                    <Grid item lg={2} alignItems="flex-start">
                      <Button
                        color="secondary"
                        fullWidth
                        type="submit"
                        variant="contained"
                        className={classes.submit}
                      >
                        Search
                      </Button>
                    </Grid>
                  </Grid>
                </Container>
              </Paper>
            </Grid>

            {/* Internship Card (Job Details) */}
            {jobs.map((job) => (
              <Grid item lg={12} xl={12}>
                <InternshipCard job={job} />
              </Grid>
            ))}

          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Internship;
