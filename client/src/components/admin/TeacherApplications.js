import React, { useEffect, useState } from "react";
import axios from "axios";
import ApplicationsTable from "./ApplicationsTable";
import { useAdminProvider } from "../../context/AdminContext";

export default function TeacherApplications() {
  const { applications, getTeacherApplications } = useAdminProvider();

  useEffect(() => {
    getTeacherApplications();
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
