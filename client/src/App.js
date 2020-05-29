import React from "react";
import MainPage from "./components/MainPage";
import AboutPage from "./components/AboutPage";
import CourseList from "./components/CourseList";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/about" component={AboutPage} />
      <Route exact path="/courses" component={CourseList} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/login" component={Login} />
    </Router>
  );
}

export default App;
