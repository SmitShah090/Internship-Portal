import {
  Button,
  CircularProgress,
  Container,
  Fab,
  Grid,
  InputBase,
  Paper,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import useStyles from "../../styles/Employee/EmployeeForm";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import Axios from "axios";

const CreateEmployeeProfile = ({history}) => {
  //const [profileInfo, setProfileInfo] = useState();

  const storedEmployee = JSON.parse(localStorage.getItem("employeeInfo"));

  const employee_ID = storedEmployee.existingEmployee._id;

  const [companyName, setCompanyName] = useState("");
  const [companyLocation, setCompanyLocation] = useState("");
  const [companyDescription, setCompanyDescription] = useState("");
  const [companyURL, setCompanyURL] = useState("");

  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    setLoading(true);

    const companyInfo = await Axios.get(
      `http://localhost:5000/employee/getinfo/${employee_ID}`
    );

   const CompanyProfile =  companyInfo.data.profileInfo
   console.log(CompanyProfile);

   if(CompanyProfile !== undefined){

     if( CompanyProfile.companyName !== undefined) {
      setCompanyName(CompanyProfile.companyName)
     } 
     if( CompanyProfile.companyLocation !== undefined) {
      setCompanyLocation(CompanyProfile.companyLocation)
     }
     if( CompanyProfile.companyDescription !== undefined) {
      setCompanyURL(CompanyProfile.companyURL)
     }
     if( CompanyProfile.companyURL !== undefined) {
      setCompanyDescription(CompanyProfile.companyDescription)
     }
   }
    
    setLoading(false);
  }, []);

  const OnSubmit = async (e) => {
    e.preventDefault();
    try {
      const getData = {
        // profileInfo
        /*   profileInfo : companyName,
         profileInfo : companyLocation,
         profileInfo : companyURL,
         profileInfo : companyDescription */
        companyInfo: {
          companyName,
          companyLocation,
          companyURL,
          companyDescription,
        },
      };

      await Axios.put(
        `http://localhost:5000/employee/update-profile/${employee_ID}`,
        getData
      );
      // localStorage.setItem('userInfo',JSON.stringify(updatedEmployee.data))
      console.log(getData);
    } catch (error) {}
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <form
          onSubmit={OnSubmit}
          className={classes.employeeForm}
          encType="multipart-form"
        >
          <Grid container spacing={3} justify="center">
            <Paper>
              <Grid item lg={10}>
                <Grid
                  className={classes.imageform}
                  container
                  spacing={3}
                  justify="center"
                >
                  <input
                    accept="image/*"
                    className={classes.input}
                    id="contained-button-file"
                    multiple
                    type="file"
                  />
                  <label htmlFor="contained-button-file">
                    <Fab component="span" className={classes.profilePic}>
                      <AddPhotoAlternateIcon />
                    </Fab>
                  </label>
                </Grid>
              </Grid>

              <Grid item lg={12}>
                <Grid container spacing={3} justify="center">
                  <Grid item xs={12} lg={7}>
                    <Typography className={classes.info}>
                      <InputBase
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        fullWidth
                        placeholder="Company Name*"
                        /* onChange={(e) => setProfileInfo({...profileInfo, companyName: e.target.value})}  */
                      />{" "}
                      {loading && <CircularProgress />}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} lg={7}>
                    <Typography className={classes.info}>
                      <InputBase
                        value={companyLocation}
                        onChange={(e) => setCompanyLocation(e.target.value)}
                        fullWidth
                        placeholder="Company Location*"
                      />
                      {loading && <CircularProgress />}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} lg={7}>
                    <Typography className={classes.info}>
                      <InputBase
                        value={companyURL}
                        onChange={(e) => setCompanyURL(e.target.value)}
                        fullWidth
                        placeholder="Company URL*"
                      />
                      {loading && <CircularProgress />}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} lg={7}>
                    <Typography className={classes.info}>
                      <InputBase
                        value={companyDescription}
                        onChange={(e) => setCompanyDescription(e.target.value)}
                        fullWidth
                        multiline
                        rows={4}
                        placeholder="Description*"
                      />
                      {loading && <CircularProgress />}
                    </Typography>
                  </Grid>
                  <Grid item lg={7}>
                <Button
                  fullWidth
                  className={classes.button}
                  color="secondary"
                  type="submit"
                  variant="contained"
                >
                  Submit
                </Button>
              </Grid>
                </Grid>
              </Grid>
              
            </Paper>
          </Grid>
        </form>
      </Container>
    </div>
  );
};

export default CreateEmployeeProfile;
