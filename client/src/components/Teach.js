import React, { useState, useReducer } from "react";
import Navbar from "./Navbar";
import axios from "axios";

export default function Teach() {
  //Get user inputs
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({
      ...state,
      ...newState,
    }),
    {
      name: "",
      email: "",
      category: "",
      subject: "",
      videoLink: "",
      message: "",
    }
  );
  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;

    setUserInput({ [key]: value });
  };

  //Get File
  const [resume, setResume] = useState(null);
  const handleFile = (e) => {
    setResume(e.target.files[0]);
  };

  const sendData = async (data) => {
    await axios.post("/api/v1/teach", data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  };

  //On Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("data", JSON.stringify(userInput));
    formData.append("resume", resume, resume.name);
    console.log(formData.get("resume"));
    alert("form submitted");
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1 className="is-size-3 has-text-centered">Teach a Course</h1>
        <div className="columns is-centered" style={{ marginTop: 50 }}>
          <div className="column is-half">
            <form onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="name" className="label has-text-white">
                  Full Name <span className="has-text-info">*</span>
                </label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    name="name"
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="field">
                <label htmlFor="email" className="label has-text-white">
                  Email <span className="has-text-info">*</span>
                </label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    name="email"
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="field">
                <label htmlFor="category" className="label has-text-white">
                  Category <span className="has-text-info">*</span>
                </label>
                <div className="select is-primary">
                  <select name="category" onChange={handleChange} required>
                    <option>Select Category</option>
                    <option>AP Classes</option>
                    <option>Standardized Test</option>
                  </select>
                </div>
              </div>
              <div className="field">
                <label htmlFor="subject" className="label has-text-white">
                  Subject <span className="has-text-info">*</span>
                </label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    name="subject"
                    onChange={handleChange}
                    required
                  />
                </div>
                <p className="help">The subject that you want to teach</p>
              </div>
              <div className="field">
                <label htmlFor="videoLink" className="label has-text-white">
                  Video Link <span className="has-text-info">*</span>
                </label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    name="videoLink"
                    onChange={handleChange}
                    required
                  />
                </div>
                <p className="help">
                  A Video of you teaching. We just want to see your teaching
                  methods, so no need to record a video while teaching a
                  className. If you have not done this before, the easiest way
                  is to upload a private video on Youtube.
                </p>
              </div>
              <div className="field">
                <label htmlFor="resume" className="label has-text-white">
                  Resume <span className="has-text-info">*</span>
                </label>
                <div className="file has-name">
                  <label className="file-label">
                    <input
                      className="file-input"
                      type="file"
                      name="resume"
                      onChange={handleFile}
                    />
                    <span className="file-cta">
                      <span className="file-icon has-text-grey-darker">
                        <i className="fas fa-upload"></i>
                      </span>
                      <span className="file-label has-text-grey-darker">
                        Choose a file…
                      </span>
                    </span>
                    <span className="file-name">
                      {resume !== null ? resume.name : ""}
                    </span>
                  </label>
                </div>
                <p className="help">doc, docx, pdf, or txt file</p>
              </div>
              <div className="field">
                <label htmlFor="message" className="label has-text-white">
                  Message
                </label>
                <div className="control">
                  <textarea
                    className="textarea"
                    name="message"
                    onChange={handleChange}
                  />
                </div>
                <p className="help">
                  Tell us about yourself. And anything else you want us to know
                </p>
              </div>
              <div className="field" style={{ marginTop: 20 }}>
                <button className="button is-primary" type="submit">
                  Apply
                </button>
                <p className="help">
                  <span className="has-text-info">*</span> = required
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
