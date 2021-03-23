import React from "react";

export function Footer(props) {
  return (
    // return <div>Contact me</div>;
    <div className="container p-4">
      <div className="row">
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase text-center ">
            <a href="#!" className="text-dark ">
              Email
            </a>
          </h5>
        </div>
        <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase mb-0 text-center">
            <a href="https://github.com/brians-123" className="text-dark">
              Github
            </a>
          </h5>
        </div>
        <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase text-center">
            <a
              href="https://www.linkedin.com/in/brianshor/"
              className="text-dark"
            >
              LinkedIn
            </a>
          </h5>
        </div>
        <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase text-center">
            <a href="./images/Resume.pdf" className="text-dark" download>
              Resume
            </a>
          </h5>
        </div>
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase text-center">
            <a href="#" className="text-dark">
              Phone: 555-5555
            </a>
          </h5>
        </div>
      </div>
    </div>
  );
}
