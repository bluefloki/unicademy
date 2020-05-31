import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import AboutPage from "./components/AboutPage";
import CourseList from "./components/CourseList";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Teach from "./components/Teach";
//ADMIN
import AdminPage from "./components/admin/AdminPage";

function App() {
  return (
    <Router>
      <Route exact path="/" component={MainPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/courses" component={CourseList} />
      <Route path="/signup" component={SignUp} />
      <Route path="/login" component={Login} />
      <Route path="/teach" component={Teach} />
      {/*Admin*/}
      <Route path="/admin" component={AdminPage} />
    </Router>
  );
}

export default App;
