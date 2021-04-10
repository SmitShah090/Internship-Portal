import { CircularProgress, Container, Grid, Paper } from "@material-ui/core";
import React, { useEffect, useState } from "react";

import useStyles from "../../../styles/User/Profile";

import SideBar from "../Profile/SideBar";
import BasicInfo from "../Profile/BasicInfo";
import CertyInfo from "../Profile/CertyInfo";
import EduInfo from "../Profile/EduInfo";
import ProjectInfo from "../Profile/ProjectInfo";
import axios from "axios";

const Profile = ({ history }) => {

  const [name, setName] = useState("")
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [photo, setPhoto] = useState("")

  const [skills, setSkills] = useState([])

  const [age, setAge] = useState("")
  const [phoneno, setPhoneno] = useState("")
  const [experiance, setExperiance] = useState("")
  const [ctc, setCtc] = useState("")
  const [location, setLocation] = useState("")
  const [email, setEmail] = useState("")

  const [university, setUniversity] = useState("")
  const [edescription, setEdescription] = useState("")

  const [projectname, setProjectname] = useState("")
  const [pdescription, setPdescription] = useState("")

  const [certiname, setCertiname] = useState("")
  const [cdescription, setCdescription] = useState("")

  const [loading, setLoading] = useState(false)

  const storedUser = JSON.parse(localStorage.getItem('userInfo'))
 
  const user_ID = storedUser._id

  useEffect(async() => {

    setLoading(true)

    const userInfo = await axios.get(`http://localhost:5000/auth/get-profile/${user_ID}`)
    console.log(userInfo.data.profile);

    const Profile = userInfo.data.profile

    Profile.name !== undefined ?  setName(Profile.name) : history.push("/create-profile")
    Profile.title !== undefined ?  setTitle(Profile.title) : history.push("/create-profile")
    Profile.description !== undefined ?  setDescription(Profile.description) : history.push("/create-profile")
    Profile.photo !== undefined ?  setPhoto(Profile.photo) : history.push("/create-profile")

    Profile.skills !== undefined ? setSkills(Profile.skills) : history.push("/create-profile")

    Profile.basicInfo !== undefined ?  setAge(Profile.basicInfo.age) : history.push("/create-profile")
    Profile.basicInfo !== undefined ?  setCtc(Profile.basicInfo.ctc) : history.push("/create-profile")
    Profile.basicInfo !== undefined ?  setExperiance(Profile.basicInfo.experiance) : history.push("/create-profile")
    Profile.basicInfo !== undefined ?  setLocation(Profile.basicInfo.location) : history.push("/create-profile")
    Profile.basicInfo !== undefined ?  setPhoneno(Profile.basicInfo.phoneno) : history.push("/create-profile")
    Profile.basicInfo !== undefined ?  setEmail(Profile.basicInfo.email) : history.push("/create-profile")

    Profile.education !== undefined ?  setUniversity(Profile.education.university) : history.push("/create-profile")
    Profile.education !== undefined ?  setEdescription(Profile.education.edescription) : history.push("/create-profile")

    Profile.projects !== undefined ?  setProjectname(Profile.projects.projectname) : history.push("/create-profile")
    Profile.projects !== undefined ?  setPdescription(Profile.projects.pdescription) : history.push("/create-profile")

    Profile.certification !== undefined ?  setCertiname(Profile.certification.certiname) : history.push("/create-profile")
    Profile.certification !== undefined ?  setCdescription(Profile.certification.cdescription)  : history.push("/create-profile")

    setLoading(false)
  }, [])

  const classes = useStyles();

  return (
    <div className={classes.root}>
      
      <Container>
        <Grid container justify="space-evenly" spacing={6}>
          <Grid item lg={4} md={4}>
            <Paper>
           
              <SideBar
              loading={loading}
              name={name}
              title={title}
               description={description} 
                photo={photo}
                skills={skills}
              />
            </Paper>
          </Grid>
          <Grid item lg={8} md={7}>
            <Grid direction="column" container spacing={8}>
              <Grid item>
              
                <BasicInfo
                loading={loading}
                  age={age}
                  phoneNo={phoneno}
                  experiance={experiance}
                  ctc={ctc}
                  location={location}
                  email={email}
                />
              </Grid>
              <Grid item>
              
                <EduInfo
                loading={loading}
                  univeristy={university}
                  description={edescription}
                />
              </Grid>
              <Grid item>
              
                <ProjectInfo
                loading={loading}
                  projectName={projectname}
                  description={pdescription}
                />
              </Grid>
              <Grid item>
              
                <CertyInfo
                  loading={loading}
                  certiName={certiname}
                  description={cdescription}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Profile;
