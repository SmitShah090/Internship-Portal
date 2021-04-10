import { Avatar, Button, Container, Grid } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import useStyles from "../../../styles/User/ProfileForm";
import axios from "axios";
import FormInfo from "./FormInfo";
import BasicInfo from "./BasicInfo";
import Skills from "./Skills";
import ProjectInfo from "./ProjectInfo";
import EducationInfo from "./EducationInfo";
import CertificationInfo from "./CertificationInfo";
import Image from "./Image";

const CreateProfile = () => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [photo, setPhoto] = useState("")

  const [skills, setSkills] = useState([]);

  const [age, setAge] = useState("");
  const [phoneno, setPhoneno] = useState("");
  const [experiance, setExperiance] = useState("");
  const [ctc, setCtc] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");

  const [university, setUniversity] = useState("");
  const [edescription, setEdescription] = useState("");

  const [projectname, setProjectname] = useState("");
  const [pdescription, setPdescription] = useState("");

  const [certiname, setCertiname] = useState("");
  const [cdescription, setCdescription] = useState("");

  const [loading, setLoading] = useState(false);

  const storedUser = JSON.parse(localStorage.getItem("userInfo"));

  const user_ID = storedUser._id;

  useEffect(async () => {
    setLoading(true);
    const userInfo = await axios.get(
      `http://localhost:5000/auth/get-profile/${user_ID}`
    );
    console.log(userInfo.data.profile);

    const Profile = userInfo.data.profile;

    if (Profile !== undefined) {
      setName(Profile.name);
      setTitle(Profile.title);
      setDescription(Profile.description);

      setPhoto(Profile.photo)

      if (Profile.basicInfo !== undefined) {
        setAge(Profile.basicInfo.age);
        setCtc(Profile.basicInfo.ctc);
        setExperiance(Profile.basicInfo.experiance);
        setLocation(Profile.basicInfo.location);
        setPhoneno(Profile.basicInfo.phoneno);
        setEmail(Profile.basicInfo.email);
      }

      if (Profile.skills !== undefined) {
        setSkills(Profile.skills);
      }

      if (Profile.education !== undefined) {
        setUniversity(Profile.education.university);
        setEdescription(Profile.education.edescription);
      }

      if (Profile.projects !== undefined) {
        setProjectname(Profile.projects.projectname);
        setPdescription(Profile.projects.pdescription);
      }
      if (Profile.certification !== undefined) {
        setCertiname(Profile.certification.certiname);
        setCdescription(Profile.certification.cdescription);
      }
    }

    setLoading(false);
  }, []);

  const OnSubmit = async (e) => {
    e.preventDefault();

    try {
      const updatedData = {
        profile: {
          name,
          title,
          description,
          photo,
          skills,
          basicInfo: {
            age,
            phoneno,
            experiance,
            ctc,
            location,
            email,
          },
          education: {
            university,
            edescription,
          },
          projects: {
            projectname,
            pdescription,
          },
          certification: {
            certiname,
            cdescription,
          },
        },
      };

      const updatedUser = await axios.patch(
        `http://localhost:5000/auth/update-profile/${user_ID}`,
        updatedData
      );
      console.log(updatedUser.data.updated_profile.profile.skills);
    } catch (err) {
      console.error(err);
    }
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <form onSubmit={OnSubmit} encType="multipart-form">
        <Container>
          <Grid container spacing={5}>
            <Grid item lg={3}>
              <Image photo={photo} setPhoto={setPhoto} />
            </Grid>
            <Grid item lg={9}>
              {/* Information Form */}
              <FormInfo
                loading={loading}
                name={name}
                title={title}
                description={description}
                setName={setName}
                setTitle={setTitle}
                setDescription={setDescription}
              />
            </Grid>
            <Grid item lg={12}>
              <Skills skills={skills} setSkills={setSkills} />
            </Grid>
            <Grid item lg={12}>
              {/* Basic Information Form */}
              <BasicInfo
                loading={loading}
                age={age}
                ctc={ctc}
                experiance={experiance}
                phoneno={phoneno}
                location={location}
                email={email}
                setAge={setAge}
                setCtc={setCtc}
                setExperiance={setExperiance}
                setPhoneno={setPhoneno}
                setLocation={setLocation}
                setEmail={setEmail}
              />
            </Grid>
            <Grid item lg={12}>
              {/* Education Information Form */}
              <EducationInfo
                loading={loading}
                university={university}
                edescription={edescription}
                setUniversity={setUniversity}
                setEdescription={setEdescription}
              />
            </Grid>
            <Grid item lg={12}>
              {/* Projects Information Form */}
              <ProjectInfo
                loading={loading}
                projectname={projectname}
                pdescription={pdescription}
                setPdescription={setPdescription}
                setProjectname={setProjectname}
              />
            </Grid>
            <Grid item lg={12}>
              {/* Certificate Information Form */}
              <CertificationInfo
                loading={loading}
                certiname={certiname}
                cdescription={cdescription}
                setCertiname={setCertiname}
                setCdescription={setCdescription}
              />
            </Grid>
          </Grid>
          <Button
            fullWidth
            className={classes.button}
            color="secondary"
            type="submit"
            variant="contained"
          >
            Submit
          </Button>
        </Container>
      </form>
    </div>
  );
};

export default CreateProfile;
