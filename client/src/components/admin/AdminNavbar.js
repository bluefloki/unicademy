import React from "react";
import { Link } from "react-router-dom";

export default function AdminNavbar() {
  return (
    <div
      className="column is-2 has-background-white"
      style={{ minHeight: "101vh" }}
    >
      <div className="container">
        <h2
          className="is-size-2 has-text-grey-darker has-text-centered"
          style={{ marginBottom: 20 }}
        >
          AdminPanel <span>🔥</span>
        </h2>
        <aside className="menu" style={{ width: "80%", margin: "auto" }}>
          <ul className="menu-list"></ul>
          <p className="menu-label is-size-5">
            USERS{" "}
            <span>
              <i className="fas fa-user has-text-primary"></i>
            </span>
          </p>
          <li>
            <Link to="/admin/userList" className="is-size-5">
              User List
            </Link>
          </li>
          <p className="menu-label is-size-5">
            TEACHERS{" "}
            <span>
              <i className="fas fa-chalkboard-teacher has-text-primary"></i>
            </span>
          </p>
          <li>
            <Link to="/admin/teacherApplications" className="is-size-5">
              Teacher Applications
            </Link>
          </li>
          <li>
            <Link to="/admin/teacherList" className="is-size-5">
              Teacher List
            </Link>
          </li>
          <li>
            <Link to="/admin/addTeacher" className="is-size-5">
              Add a Teacher
            </Link>
          </li>
          <p className="menu-label is-size-5">
            COURSES{" "}
            <span>
              <i className="fas fa-book has-text-primary"></i>
            </span>
          </p>
        </aside>
      </div>
    </div>
  );
}
