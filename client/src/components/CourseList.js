import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

export default function CourseList() {
  return (
    <div>
      <Navbar />
      <h2 className="has-text-centered is-size-2">Courses</h2>
      <div className="container">
        <div className="columns is-multiline" style={{ marginTop: 50 }}>
          <div className="column is-one-quarter">
            <Link
              to={`/course/${1}`}
              className="box has-text-black is-paddingless"
              style={{ marginBottom: "0.75rem" }}
            >
              <div style={{ marginBottom: 10 }}>
                <figure className="image is-16by9">
                  <img src={require("../assets/1.jpg")} />
                </figure>
              </div>
              <div className="columns is-multiline" style={{ padding: 10 }}>
                <div className="column is-10 is-size-5">AP MATHEMATICS</div>
                <div className="column is-half">
                  <p>Meeran Kazmi</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
