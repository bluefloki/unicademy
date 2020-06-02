import React from "react";
import Navbar from "./Navbar";

export default function CourseList() {
  return (
    <div>
      <Navbar />
      <h2 className="has-text-centered is-size-2">Courses</h2>
      {/* OUTER GRID */}
      <div className="columns" style={{ marginTop: 50 }}>
        <div className="column is-2" style={{ borderRight: "2px solid white" }}>
          <div className="container">
            <p>Hello this work</p>
          </div>
        </div>
        <div className="column is-10">
          <div className="container">
            {/* INNER GRID */}
            <div className="columns is-multiline is-8">
              <div className="column is-one-quarter">
                <div
                  className="box has-text-black is-paddingless"
                  style={{ marginBottom: "0.75rem" }}
                >
                  <div style={{ marginBottom: 10 }}>
                    <figure className="image is-16by9">
                      <img src={require("../assets/1.jpg")} />
                    </figure>
                  </div>
                  <div className="columns is-multiline" style={{ padding: 10 }}>
                    <div className="column is-11 is-size-5">AP MATHEMATICS</div>
                    <div className="column is-1 is-size-5 is-pulled-right">
                      <p className="is-pulled-right">$40</p>
                    </div>
                    <div className="column is-half">
                      <p>Meeran Kazmi</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
