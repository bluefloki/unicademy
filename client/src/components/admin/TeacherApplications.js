import React, { useEffect, useState } from "react";
import axios from "axios";
import ApplicationsTable from "./ApplicationsTable";
import { useAdminProvider } from "../../context/AdminContext";
import { Route } from "react-router-dom";
import ApplicationDetails from "./ApplicationDetails";

export default function TeacherApplications() {
  const {
    applications,
    getTeacherApplications,
    resetApplications,
  } = useAdminProvider();

  useEffect(() => {
    getTeacherApplications();
    return resetApplications();
  }, []);

  return (
    <div>
      <h2 className="is-size-2" style={{ margin: 30 }}>
        Teacher Applications
      </h2>
      <ApplicationsTable applications={applications} />
    </div>
  );
}
