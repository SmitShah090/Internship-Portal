import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Login from "./components/User/User-auth/Login";
import LoginE from "./components/Employee/Employee-auth/LoginE";
import Signup from "./components/User/User-auth/Signup";
import SignupE from "./components/Employee/Employee-auth/SignupE";
import Contact from "./components/Contact/Contact";
import theme from "./style";
import { ThemeProvider } from "@material-ui/styles";
import CreateProfile from "./components/User/CreateProfile/CreateProfile";
import User from "./components/User/User";
import Employee from "./components/Employee/Employee";
import Internship from "./components/User/Internships/Internship";
import Profile from "./components/User/Profile/Profile";
import PostedInternships from "./components/Employee/PostedInternships";
import CreateEmployeeProfile from "./components/Employee/CreateEmployeeProfile";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/studentlogin" component={Login} />
            <Route path="/employeelogin" component={LoginE} />
            <Route path="/studentsignup" component={Signup} />
            <Route path="/employeesignup" component={SignupE} />
            <Route path="/contact" component={Contact} />
            <Route path="/user" component={User} />
            <Route path="/internship" component={Internship} />
            <Route path="/profile" component={Profile} />
            <Route path="/create-profile" component={CreateProfile} />
            <Route path="/employee" component={Employee} />
            <Route path="/postedInternship" component={PostedInternships} />
            <Route path="/create-employee-profile" component={CreateEmployeeProfile} />

          </Switch>
        </Router>
        {/* <PostJobForm /> */}
      </ThemeProvider>
    </div>
  );
}

export default App;
