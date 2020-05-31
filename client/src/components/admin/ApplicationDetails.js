import React, { useEffect } from "react";
import { useAdminProvider } from "../../context/AdminContext";

export default function ApplicationDetails(props) {
  const { getSingleTeacherApplication, singleApplication } = useAdminProvider();

  useEffect(() => {
    getSingleTeacherApplication(props.match.params.id);
  }, []);

  const { resumePath, message, name, subject, videoLink } = singleApplication;

  return (
    <div className="container">
      <h2 className="is-size-2" style={{ margin: 30 }}>
        {name}: <span className="has-text-primary">{subject}</span>
      </h2>
      <div className="has-text-left">
        <p>
          <strong>Video: </strong>
          <a href={videoLink} className="has-text-primary" target="_blank">
            {videoLink}
          </a>
        </p>
        <p>
          <strong>Resume: </strong>
          {resumePath}
        </p>
        <p>
          <strong>Message: </strong>
          {message}
        </p>
      </div>
    </div>
  );
}
