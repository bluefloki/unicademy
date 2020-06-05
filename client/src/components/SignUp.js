import React from "react";
import Navbar from "./Navbar";

export default function SignUp() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h3 className="is-size-2 has-text-centered">Sign Up</h3>
        <div className="columns is-centered" style={{ marginTop: 50 }}>
          <div className="column is-half is-vcentered">
            <form>
              <div className="field">
                <label htmlFor="name" className="label has-text-white">
                  Full Name <span className="has-text-info">*</span>
                </label>
                <div className="control">
                  <input class="input" type="text" name="name" />
                </div>
              </div>
              <div className="field">
                <label htmlFor="email" className="label has-text-white">
                  Email <span className="has-text-info">*</span>
                </label>
                <div className="control">
                  <input class="input" type="text" name="email" />
                </div>
              </div>
              <div className="field">
                <label htmlFor="password" className="label has-text-white">
                  Password <span className="has-text-info">*</span>
                </label>
                <div className="control">
                  <input class="input" type="password" name="password" />
                </div>
              </div>
              {/* <div className="field">
                <label htmlFor="plan" className="label has-text-white">
                  Plan <span className="has-text-info">*</span>
                </label>
                <div className="select is-primary">
                  <select name="plan" required>
                    <option value="" disabled selected>
                      Choose Plan
                    </option>
                    <option>14 Day Trial (FREE)</option>
                    <option>Alpha ($20.0/Month)</option>
                    <option>Beta ($15.0/Month)</option>
                    <option>Gamma ($12.5/Month)</option>
                  </select>
                </div>
              </div> */}
              <div className="field" style={{ marginTop: 20 }}>
                <button className="button is-primary" type="submit">
                  Sign Up
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
