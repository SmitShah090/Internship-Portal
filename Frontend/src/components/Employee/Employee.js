import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Fab,
  FilledInput,
  Grid,
  IconButton,
  MenuItem,
  Select,
  Typography,
} from '@material-ui/core';
import React, {useState} from 'react';
import useStyles from '../../styles/Employee/Employee';
//import PostJobForm from "../Employee/PostJobForm";
import {Close as CloseIcon} from '@material-ui/icons';
import Axios from 'axios';
import EmployeeProfile from './CreateEmployeeProfile';
import EmployeeHeader from './EmployeeHeader';
import Skills from '../User/CreateProfile/Skills';
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import axios from 'axios';


const Employee = ({history}) => {
  const skillsList = [
    'JavaScript',
    'React Js',
    'Node Js',
    'React Native',
    'Python',
    'Mobile App Development',
    'UI/UX Designing',
    'DBMS',
    'OS',
    'DSA',
    'Rest API',
    'Cloud Management',
    'Git & GitHub',
    'Research',
    'Wireframing',
    'AWS',
    'Troubleshooting',
    'SDLC',
    'Problem Solving',
  ];

  const classes = useStyles ();

  const [open, setOpen] = useState (false);

  const [photo, setPhoto] = useState("")
  const [jobTitle, setJobTitle] = useState ('');
  const [jobDescription, setJobDescription] = useState ('');
  const [jobType, setJobType] = useState ('');
  const [companyURL, setCompanyURL] = useState ('');
  const [companyName, setCompanyName] = useState ('');
  const [workType, setWorkType] = useState ('');
  const [payScale, setPayScale] = useState ('');
  const [skills, setSkills] = useState ([]);

  const handleClickOpen = () => {
    setOpen (true);
  };

  const handleClose = () => {
    setOpen (false);
  };

  const post = async e => {
    e.preventDefault ();
    try {
      const getData = {
        jobInfo: {
          photo,
          jobTitle,
          jobDescription,
          companyName,
          companyURL,
          payScale,
          workType,
          jobType,
          skills,
        },
      };

      await Axios.post ('http://localhost:5000/employee/postjob', getData);
      console.log (getData);
    } catch (error) {
      console.log (error);
    }
  };

  const uploadImage = async(e) => {
    e.preventDefault()
    const file = e.target.files[0]
    const formData = new FormData();
    formData.append('image', file);

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }

    const { data } = await axios.post(`http://localhost:5000/student/upload`, formData, config );
    console.log(data);
    setPhoto(data)
  }

  return (
    <div className={classes.root}>
      <EmployeeHeader />
      <Container>
        <Grid className={classes.button} container justify="center" spacing={2}>
          <Grid item lg={4}>
            <Button
              className={classes.submit}
              color="secondary"
              fullWidth
              type="submit"
              variant="contained"
              onClick={handleClickOpen}
            >
              Post an Iternship
            </Button>
            <form type="submit">
              <Dialog onClose={handleClose} open={open}>
                <DialogTitle>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    Post Job
                    <IconButton onClick={handleClose}>
                      <CloseIcon />
                    </IconButton>
                  </Box>
                </DialogTitle>
                <DialogContent>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>

                    </Grid>
                    <Grid justify="center" alignItems="center" item xs={6}>
                      <form>
                        <input
                        style={{display: "none"}}
                           onChange={uploadImage} 
                          accept="image/*"
                          id="contained-button-file"
                          multiple
                          type="file"
                        />
                        <label htmlFor="contained-button-file">
                          <Fab component="span" className={classes.profilePic}>
                            <AddPhotoAlternateIcon />
                          </Fab>
                        </label>
                      </form>
                    </Grid>
                    <Grid item xs={6}>
                      <FilledInput
                        value={jobTitle}
                        onChange={e => setJobTitle (e.target.value)}
                        autoComplete="off"
                        placeholder="Job title *"
                        disableUnderline
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Select
                        value={jobType}
                        onChange={e => setJobType (e.target.value)}
                        variant="filled"
                        disableUnderline
                        fullWidth
                      >
                        <MenuItem value="Full time">Full time</MenuItem>
                        <MenuItem value="Part time">Part time</MenuItem>
                        <MenuItem value="Contract">Contract</MenuItem>
                      </Select>
                    </Grid>
                    <Grid item xs={6}>
                      <FilledInput
                        value={companyName}
                        onChange={e => setCompanyName (e.target.value)}
                        autoComplete="off"
                        placeholder="Company name *"
                        disableUnderline
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <FilledInput
                        value={companyURL}
                        onChange={e => setCompanyURL (e.target.value)}
                        autoComplete="off"
                        placeholder="Company Url *"
                        disableUnderline
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Select
                        value={workType}
                        onChange={e => setWorkType (e.target.value)}
                        disableUnderline
                        variant="filled"
                        fullWidth
                      >
                        <MenuItem value="Remote">Remote</MenuItem>
                        <MenuItem value="In-office">In-Office</MenuItem>
                      </Select>
                    </Grid>
                    <Grid item xs={6}>
                      <Select
                        value={payScale}
                        onChange={e => setPayScale (e.target.value)}
                        disableUnderline
                        variant="filled"
                        fullWidth
                      >
                        <MenuItem>PayScale(In Lakhs)</MenuItem>
                        <MenuItem value={2}>2 LPA</MenuItem>
                        <MenuItem value={3}>3 LPA</MenuItem>
                        <MenuItem value={4}>4 LPA</MenuItem>
                        <MenuItem value={5}>5 LPA</MenuItem>
                        <MenuItem value={6}>6 LPA</MenuItem>
                        <MenuItem value={7}>7 LPA</MenuItem>
                        <MenuItem value={7}>7+ LPA</MenuItem>
                      </Select>
                    </Grid>
                    <Grid item xs={12}>
                      <FilledInput
                        value={jobDescription}
                        onChange={e => setJobDescription (e.target.value)}
                        autoComplete="off"
                        placeholder="Job description *"
                        disableUnderline
                        fullWidth
                        multiline
                        rows={4}
                      />
                    </Grid>
                  </Grid>
                  <Box mt={2}>
                    <Typography>Skills</Typography>
                    <Grid container spacing={1} direction="row">
                      {skillsList.map ((skill, index) => (
                        <Grid item key={index}>
                          <Typography className={classes.skill}>
                            <Button
                              onClick={e => {
                                let employee = {
                                  skills: skill,
                                };
                                const skillList = skills.concat (
                                  employee.skills
                                );
                                setSkills (skillList);
                              }}
                            >
                              {skill}
                            </Button>
                          </Typography>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                </DialogContent>
                <DialogActions>
                  <Box
                    color="red"
                    width="100%"
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Typography variant="caption">*Required fields</Typography>
                    <Button
                      onClick={post}
                      variant="contained"
                      disableElevation
                      color="secondary"
                      className={classes.submit}
                      type="submit"
                      // disabled={loading}
                    >
                      Post Job
                      {/* {loading ? (
                        <CircularProgress color="secondary" size={22} />
                      ) : (
                        "Post job"
                      )} */}
                    </Button>
                  </Box>
                </DialogActions>
              </Dialog>
            </form>
          </Grid>
          <Grid item lg={4}>
            <Button
              className={classes.submit}
              color="secondary"
              fullWidth
              type="submit"
              variant="contained"
              onClick={() => {
                history.push ('/postedInternship');
              }}
            >
              Posted Iternship
            </Button>
          </Grid>
        </Grid>
      </Container>
      <hr />
      <Container>
        <Grid container justify="center" spacing={3}>
          <Grid item lg={12}>
            <Typography className={classes.stepheading} variant="h5">
              Steps For Posting an Internship : <br />
            </Typography>
          </Grid>
          <Grid item lg={12}>
            <Typography className={classes.steps} variant="h6">
              Step - 1 :- First of all, Press the Icon of First Left Corner of
              the page and Create a Profile.
            </Typography>
            <Typography className={classes.steps} variant="h6">
              Step - 2 :- Click on the Post an Internship Button.
            </Typography>
            <Typography className={classes.steps} variant="h6">
              Step - 3 :- After that Post an Internship form will appear.
            </Typography>
            <Typography className={classes.steps} variant="h6">
              Step - 4 :- Fill in the necessary details that are required for
              posting the internship.
            </Typography>
            <Typography className={classes.steps} variant="h6">
              Step - 5 :- After filling the necessary details click on the post
              button.
            </Typography>
            <Typography className={classes.steps} variant="h6">
              Step - 6 :- To check if internship has been posted or not go
              through the posted internships page and verify it.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Employee;
