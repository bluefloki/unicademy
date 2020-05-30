import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="columns has-text-centered is-vcentered">
          <div className="column">
            <img src={require("../assets/hero.svg")} alt="" />
          </div>
          <div className="column">
            <h1 className="is-size-2">Ace your Classes</h1>
            <h1 className="is-size-2">One Class At a Time</h1>
            <div className="buttons is-centered" style={{ margin: 20 }}>
              <Link to="/courses" className="button is-white">
                Browse Courses
              </Link>
              <Link to="/teach" className="button is-white is-outlined">
                Teach a Course
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
