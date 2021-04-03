import {
  CircularProgress,
  Container,
  Grid,
  InputBase,
  MenuItem,
  Paper,
  Select,
  Typography,
} from "@material-ui/core";
import React from "react";
import useStyles from "../../../styles/User/ProfileForm";

const BasicInfo = ({age, setAge, ctc, setCtc, experiance, setExperiance, phoneno, setPhoneno, location, setLocation, email, setEmail, loading}) => {
  const classes = useStyles();


  return (
    <Paper>
      <Container>
      {loading && <CircularProgress />}
        <Typography variant="h6">Basic Information</Typography>
        <Grid container spacing={3}>
          <Grid item lg={3} xl={12}>
            <Select
              className={classes.info}
              value={age}
              onChange={(e) =>setAge(e.target.value)}
            >
              <MenuItem>Age :</MenuItem>
              <MenuItem value={20}>20</MenuItem>
              <MenuItem value={21}>21</MenuItem>
              <MenuItem value={22}>22</MenuItem>
              <MenuItem value={23}>23</MenuItem>
              <MenuItem value={24}>24</MenuItem>
            </Select>
          </Grid>
          <Grid item lg={3} xl={12}>
            <InputBase
            value={phoneno}
            fullWidth
              className={classes.info}
              onChange={(e) => setPhoneno(e.target.value)}
              placeholder="Phone No. "
            />
          </Grid>
          <Grid item lg={3} xl={12}>
          <Select
          fullWidth
          className={classes.info}
              value={experiance}
              onChange={(e) => setExperiance(e.target.value)}
            >
              <MenuItem>Years Of Experiance :</MenuItem>
              <MenuItem value={0}>Fresher</MenuItem>
              <MenuItem value={1}>1 Year</MenuItem>
              <MenuItem value={2}>2 Year</MenuItem>
              <MenuItem value={3}>3 Year</MenuItem>
              <MenuItem value={4}>4 Year</MenuItem>
              <MenuItem value={5}>5 Year</MenuItem>
            </Select>
          </Grid>
          <Grid item lg={3} xl={12}>
          <Select
          fullWidth
              className={classes.info}
              value={ctc}
              onChange={(e) => setCtc(e.target.value)}
            >
              <MenuItem>CTC(In Lakhs) :</MenuItem>
              <MenuItem value={2}>2 lakh</MenuItem>
              <MenuItem value={3}>3 lakh</MenuItem>
              <MenuItem value={4}>4 lakh</MenuItem>
              <MenuItem value={5}>5 lakh</MenuItem>
              <MenuItem value={6}>6 lakh</MenuItem>
              <MenuItem value={7}>7 lakh</MenuItem>
              <MenuItem value={7}>7+ lakh</MenuItem>
            </Select>
          </Grid>
          <Grid item lg={3} xl={12}>
            <InputBase
            value={location}
              className={classes.info}
              placeholder="Location"
              onChange={(e) => setLocation(e.target.value)}
            />
          </Grid>
          <Grid item lg={3} xl={12}>
            <InputBase
            value={email}
              className={classes.info}
              placeholder="Email ID"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};

export default BasicInfo;
