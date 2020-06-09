import React, { useEffect, useState } from "react";
import ApplicationsTable from "./ApplicationsTable";
import { useAdminProvider } from "../../context/AdminContext";

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
