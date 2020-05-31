import React, { useState } from "react";
import Moment from "react-moment";
import axios from "axios";
import { Link, Route } from "react-router-dom";
import { useAdminProvider } from "../../context/AdminContext";
import ApplicationDetails from "./ApplicationDetails";

export default function ApplicationsTable({ applications }) {
  const { removeTeacherApplication } = useAdminProvider();

  return (
    <div className="container">
      <table
        className="table is-bordered has-background-dark has-text-white is-fullwidth"
        style={{ margin: "auto" }}
      >
        <thead>
          <tr>
            <th>#</th>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Category</th>
            <th>Subject</th>
            <th>Date</th>
            <th>Details</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((application, index) => {
            return (
              <tr key={application.id}>
                <td>{index + 1}</td>
                <td>{application.id}</td>
                <td>{application.name}</td>
                <td>{application.email}</td>
                <td>{application.category}</td>
                <td>{application.subject}</td>
                <td>
                  <Moment format="MMM-DD-YYYY">{application.createdAt}</Moment>
                </td>
                <td className="has-text-centered">
                  <Link
                    to={`/admin/applicationDetails/${application.id}`}
                    className="button is-info"
                  >
                    <i className="fas fa-info"></i>
                  </Link>
                </td>
                <td className="has-text-centered">
                  <button
                    className="button is-rounded is-danger"
                    style={{ width: 20 }}
                    onClick={() => removeTeacherApplication(application.id)}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
