import React from 'react';
import {
  Grid,
  Paper,
  Typography,
  Container,
  Box,
  Button,
  CircularProgress,
} from '@material-ui/core';
import ProgrammingTech from '../../images/Programming & Tech.png';
import DataScience from '../../images/Data Science & analysis.png';
import ITEngineer from '../../images/IT Engineer.png';
import Education from '../../images/Education & training.png';
import Marketing from '../../images/Marketing.png';
import Management from '../../images/Management.png';
import Logo from '../../images/Home-illustration.png';
import useStyles from '../../styles/Home/Home';

const Home = () => {

  const classes = useStyles ();

  /* const categories = [
    {name: "Programming and Tech", image: {ProgrammingTech}},
    {name: "Management", image: (require('../../images/Management.png'))},
    {name: "Data Science & analysis", image: {ProgrammingTech}},
    {name: "Education & training", image: {ProgrammingTech}},
    {name: "Sales/Marketing", image: {ProgrammingTech}},
    {name: "IT Engineer", image: {ProgrammingTech}}
  ] */

  return (
    <div className={classes.root}>
      <Container>
        <Grid className={classes.cover} container>
          {/* Hero Section */}
          <Grid item xs={12} lg={6}>
            <Grid
              className={classes.heading}
              alignItems="center"
              conatiner
              spacing={4}
            >
              <Grid item lg={12}>
                <Typography variant="h2" className={classes.title}>
                  Find the perfect job
                </Typography>
              </Grid>
              <Grid item lg={12}>
                <Typography className={classes.caption} variant="h6">
                  An opportunity to the students to apply for summer internships
                  through this online portal
                </Typography>
              </Grid>
              <Grid item lg={4}>
                <Button
                  color="secondary"
                  fullWidth
                  type="submit"
                  variant="contained"
                  className={classes.submit}
                >
                  get Internship
                </Button>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} lg={6}>
            {Logo
              ? <img src={Logo} className={classes.illustration} />
              : <CircularProgress />}

          </Grid>
        </Grid>
        <Grid
          direction="row"
          justify="center"
          alignItems="center"
          container
          className={classes.headingContainer}
        >
          {/* Trending Categories */}
          <Grid item className={classes.headingGrid} xs={12}>
            <Typography className={classes.firstHeading}>
              Top Trending Categories
            </Typography>
            <Typography className={classes.secondHeading}>
              A better career is out there. We’ll help you find it.<br />
              We’re your first step to becoming everything you want to be.
            </Typography>
          </Grid>
        </Grid>
        <Grid className={classes.container} container spacing={10}>
                {/* {categories.map((category) => (
                  <>
                    <Grid className={classes.grid} item xs={12} sm={6} md={6} lg={4}>
                      <Paper elevation={4} component={Box} className={classes.paper}>
                        <Typography className={classes.typography}>
                          <img className={classes.image} src={require(category.image)} />
                          <Typography className={classes.categories}>
                            {category.name}
                          </Typography>
                        </Typography>
                      </Paper>
                    </Grid>
                  </>
                ))} */}
          <Grid className={classes.grid} item xs={12} sm={6} md={6} lg={4}>
            <Paper elevation={4} component={Box} className={classes.paper}>
              <Typography className={classes.typography}>
                <img className={classes.image} src={ProgrammingTech} />
                <Typography className={classes.categories}>
                Programming and Tech
                </Typography>
              </Typography>
            </Paper>
          </Grid>
          <Grid className={classes.grid} item xs={12} sm={6} md={6} lg={4}>
            <Paper elevation={4} component={Box} className={classes.paper}>
              <Typography className={classes.typography}>
                <img className={classes.image} src={Management} />
                <Typography className={classes.categories}>
                  Management
                </Typography>
              </Typography>
            </Paper>
          </Grid>
          <Grid className={classes.grid} item xs={12} sm={6} md={6} lg={4}>
            <Paper elevation={4} component={Box} className={classes.paper}>
              <Typography className={classes.typography}>
                <img className={classes.image} src={DataScience} />
                <Typography className={classes.categories}>
                  Data Science & analysis
                </Typography>
              </Typography>
            </Paper>
          </Grid>
          <Grid className={classes.grid} item xs={12} sm={6} md={6} lg={4}>
            <Paper elevation={4} component={Box} className={classes.paper}>
              <Typography className={classes.typography}>
                <img className={classes.image} src={Education} />
                <Typography className={classes.categories}>
                  Education & training
                </Typography>
              </Typography>
            </Paper>
          </Grid>
          <Grid className={classes.grid} item xs={12} sm={6} md={6} lg={4}>
            <Paper elevation={4} component={Box} className={classes.paper}>
              <Typography className={classes.typography}>
                <img className={classes.image} src={Marketing} />
                <Typography className={classes.categories}>
                  Sales / Marketing
                </Typography>
              </Typography>
            </Paper>
          </Grid>
          <Grid className={classes.grid} item xs={12} sm={6} md={6} lg={4}>
            <Paper elevation={4} component={Box} className={classes.paper}>
              <Typography className={classes.typography}>
                <img className={classes.image} src={ITEngineer} />
                <Typography className={classes.categories}>
                  IT Engineer
                </Typography>
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
export default Home;
