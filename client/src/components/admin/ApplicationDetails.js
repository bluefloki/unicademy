import React, { useEffect, useState } from "react";
import { useAdminProvider } from "../../context/AdminContext";

export default function ApplicationDetails(props) {
  const {
    getSingleTeacherApplication,
    resetSingleTeacherApplication,
    singleApplication,
  } = useAdminProvider();

  useEffect(() => {
    getSingleTeacherApplication(props.match.params.id);
    return resetSingleTeacherApplication();
  }, []);

  const {
    resumePath,
    message,
    name,
    subject,
    videoLink,
    id,
  } = singleApplication;
  const [star, setStar] = useState(localStorage[id] ? true : false);

  //function to add favorite
  const starApplication = () => {
    if (!star) {
      setStar(!star);
      localStorage.setItem(id, "yes");
    } else if (star) {
      setStar(!star);
      localStorage.removeItem(id);
    }
  };

  //Function to render resume
  const displayResume = () => {
    if (resumePath) {
      return (
        <iframe
          src={require(`../../assets/uploads/${resumePath}`)}
          style={{ width: "100%", height: "70vh" }}
        ></iframe>
      );
    }
  };

  return (
    <div className="container">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h2 className="is-size-2" style={{ margin: 30 }}>
          {name}: <span className="has-text-primary">{subject}</span>{" "}
        </h2>
        <button
          className={`button is-warning ${
            !localStorage[id] ? "is-outlined" : ""
          }`}
          onClick={() => starApplication()}
        >
          <i className="fas fa-star"></i>
        </button>
      </div>
      <div className="has-text-left is-size-5">
        <p>
          <strong>Video: </strong>
          <a href={videoLink} className="has-text-primary" target="_blank">
            {videoLink}
          </a>
        </p>
        <p>
          <strong>Message: </strong>
          <br />
          {message}
        </p>
        <p>
          <strong>Resume: </strong>
        </p>
        <div id="resumeDisplay">{displayResume()}</div>
      </div>
    </div>
  );
}
