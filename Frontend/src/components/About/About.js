import {
  CircularProgress,
  Container,
  Grid,
  makeStyles,
  Typography,
  useTheme,
} from "@material-ui/core";
import React from "react";
import Aboutimg from "../../images/about .svg";
import Aash from "../../images/aash.png";
import Smit from "../../images/smit.png";
import zeel from "../../images/zeel.png";
import useStyles from "../../styles/About/About";

const About = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        {/* <Grid container>
          <Grid item>

        <Typography className={classes.heading} variant="h6">About Us <hr></hr></Typography>
          </Grid>
        </Grid> */}
        
        <Grid
          className={classes.container}
          justify="space-between"
          container
          spacing={3}
        >
          {/* About Us */}
          <Grid item xs={12} md={6} lg={5}>
            {Aboutimg ? <img className={classes.image} src={Aboutimg} /> : <CircularProgress />}
            
          </Grid>
          <Grid item className={classes.information} xs={12} md={6} lg={5}>
            <Typography gutterBottom paragraph>
              {/* Our website focuses on providing an opportunity to the students of
            our university to apply for summer internships. Students can create
            their profile and look for the internships provided by several
            companies amd apply according to their skills and convenience. They
            can upload their resumes to make it easier for the companies to
            review at ease. This platform reduces the complexity and time for
            students to apply for internships at one hub. */}
              Our website focuses on providing an opportunity to the students of
              our university to apply for summer internships. Students can
              create their profile and look for the internships provided by
              several companies and apply according to their skills and
              convenience. They can upload their resumes to make it easier for
              the companies to review at ease. Once reviewed, the company can
              mail the accepted students for further details directly, making it
              an autonomous system. Our team got inspired to initiate this after
              seeing the hardships faced by students to get their summer
              internships as an important milestone in their college life. This
              platform reduces the complexity and time for students to apply for
              internships at one hub. It will also alleviate some difficulties
              for the faculty members. A chatbot is incorporated to help out the
              first time users for better experience.
            </Typography>
          </Grid>
        </Grid>
        <Grid
          className={classes.ourPic}
          justify="space-around"
          container
          spacing={3}
        >
          {/* Our Photo */}
          <Grid item lg={4} sm={12} md={6} xl={12}>
            <img src={Smit} />
            <Typography variant="h6">SMIT SHAH</Typography>
            <Typography variant="subtitle1">
              FULL-STACK WEB DEVELOPER
            </Typography>
          </Grid>
          <Grid item lg={4} sm={12} md={6} xl={12}>
            <img src={zeel} />
            <Typography variant="h6">ZEEL PATEL</Typography>
            <Typography variant="subtitle1">MACHINE LEARNING ENGINEER</Typography>
          </Grid>
          <Grid item lg={4} sm={12} md={6} xl={12}>
            <img src={Aash} />
            <Typography variant="h6">AASH SHAH</Typography>
            <Typography variant="subtitle1">FRONTEND WEB DEVELOPER</Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default About;
