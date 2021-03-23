import React from "react";

export function AboutMe(props) {
  return (
    <div className="container">
      <div className="card mb-3" id="card-body-overide">
        <div className="row g-0">
          <div className="col-md-2">
            <img
              className="img-fluid"
              src="assets/deception-pass-v2.jpg"
              alt="selfie in front of deception pass"
            />
          </div>
          <div className="col-md-10">
            <div className="card-body">
              <h5 className="card-title">Hello. My name is Brian.</h5>
              <p className="card-text">
                I've been a business analyst for the last 15 years at technology
                companies, with a focus in Salesforce and operations. I've
                always enjoyed working with code but my management information
                systems degree was not strong enough to really dive into it at
                an enterprise level. In September2020, I began a coding bootcamp
                through the University of Washington. This site will chronicle
                my journey as I learn, struggle, and persevere, until one day I
                become a developer...even if I'm not changing my title.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
