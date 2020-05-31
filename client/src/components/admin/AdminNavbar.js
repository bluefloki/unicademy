import React from "react";
import { Link } from "react-router-dom";

export default function AdminNavbar() {
  return (
    <div
      className="column is-2 has-background-white"
      style={{ minHeight: "101vh" }}
    >
      <div className="container has-text-centered">
        <h2
          className="is-size-2 has-text-grey-darker"
          style={{ marginBottom: 20 }}
        >
          AdminPanel
        </h2>
        <aside className="menu">
          <ul className="menu-list"></ul>
          <li>
            <Link to="/admin/teacherApplications">Teacher Applications</Link>
          </li>
          <li>
            <Link to="/admin/users">Users</Link>
          </li>
        </aside>
      </div>
    </div>
  );
}
