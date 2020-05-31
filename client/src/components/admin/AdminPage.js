import React from "react";
import AdminNavbar from "./AdminNavbar";
import { Route } from "react-router-dom";
import TeacherApplications from "./TeacherApplications";
import axios from "axios";
import { AdminProvider } from "../../context/AdminContext";
import ApplicationDetails from "./ApplicationDetails";

export default function AdminPage() {
  return (
    <AdminProvider>
      <div className="columns is-4">
        <AdminNavbar />
        <div className="column has-text-centered">
          <Route
            path="/admin/teacherApplications"
            component={TeacherApplications}
          />
          <Route
            path="/admin/applicationDetails/:id"
            component={ApplicationDetails}
          />
          <Route
            path="/admin/users"
            component={() => {
              return <p>Hello</p>;
            }}
          />
        </div>
      </div>
    </AdminProvider>
  );
}
