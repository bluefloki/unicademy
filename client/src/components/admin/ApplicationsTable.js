import React, { useState } from "react";
import Moment from "react-moment";
import axios from "axios";
import { useAdminProvider } from "../../context/AdminContext";

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
            <th>Video</th>
            <th>Resume</th>
            <th>Message</th>
            <th>Date</th>
            <th></th>
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
                <td>{application.videoLink}</td>
                <td>{application.resumePath}</td>
                <td>This is a message</td>
                <td>
                  <Moment format="MMM-DD-YYYY">{application.createdAt}</Moment>
                </td>
                <td>
                  <button
                    className="button is-rounded is-danger"
                    style={{ width: 20 }}
                    onClick={() => removeTeacherApplication(application.id)}
                  >
                    <i className="fas fa-minus"></i>
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
