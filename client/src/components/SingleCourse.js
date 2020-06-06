import React, { useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

export default function SingleCourse() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="box has-text-black">
          <div className="columns">
            <div className="column is-5">
              <figure className="image">
                <img src={require("../assets/1.jpg")} />
              </figure>
            </div>
            <div className="column">
              <h3 className="is-size-3">AP Mathematics</h3>
              <h5 className="is-size-5 has-text-primary">Meeran Kazmi</h5>
              <p style={{ marginTop: 10 }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                optio quaerat reprehenderit. Voluptatum dignissimos esse
                explicabo numquam placeat porro nihil doloremque assumenda
                temporibus hic? Quaerat hic asperiores facilis culpa provident,
                quidem consectetur aliquam error doloribus eveniet libero
                corrupti fugit. Commodi omnis accusantium incidunt quia!
                Inventore alias aut pariatur itaque modi in blanditiis odio
                velit ut. Pariatur earum porro culpa ratione nisi veniam
                laudantium facere! Quaerat numquam commodi fugit ratione officia
                voluptate ducimus fugiat fuga amet sit, nam, dolorem distinctio
                tempore possimus at consequuntur dolor ullam quidem! Repellat
                quo sit libero minus atque non! Repudiandae deserunt libero ex
                cumque porro aut!
              </p>
            </div>
          </div>
        </div>
        <h3 className="is-size-3">Curriculum</h3>
        <ul>
          <ChapterCard name={"Chapter 1"} />
          <ChapterCard name={"Chapter 2"} />
          <ChapterCard name={"Chapter 3"} />
        </ul>
      </div>
    </div>
  );
}

const ChapterCard = ({ name }) => {
  const [details, toggleDetails] = useState(false);
  const renderDetails = () => {
    if (details) {
      return (
        <div style={{ width: "90%", margin: "auto", marginBottom: 25 }}>
          <ul style={{ listStyle: "disc" }}>
            <li>
              <Link className="has-text-white is-size-5">Lecture 1</Link>
            </li>
            <li>
              <Link className="has-text-white is-size-5">Lecture 2</Link>
            </li>
            <li>
              <Link className="has-text-white is-size-5">Notes</Link>
            </li>
          </ul>
        </div>
      );
    }
  };
  return (
    <li style={{ margin: "12px 0" }}>
      <div
        className="box has-text-black"
        style={{ cursor: "pointer" }}
        onClick={() => toggleDetails(!details)}
      >
        <i className={`fas ${!details ? "fa-plus" : "fa-minus"}`}></i>
        {"  "}
        {name}
      </div>
      {renderDetails()}
    </li>
  );
};
