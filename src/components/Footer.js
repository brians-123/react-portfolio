import React from "react";

export function Footer(props) {
  return (
    // return <div>Contact me</div>;
    <div class="container p-4">
      <div class="row">
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase text-center ">
            <a href="#!" class="text-dark ">
              Email
            </a>
          </h5>
        </div>
        <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase mb-0 text-center">
            <a href="https://github.com/brians-123" class="text-dark">
              Github
            </a>
          </h5>
        </div>
        <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase text-center">
            <a href="https://www.linkedin.com/in/brianshor/" class="text-dark">
              LinkedIn
            </a>
          </h5>
        </div>
        <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase text-center">
            <a href="./images/Resume.pdf" class="text-dark" download>
              Resume
            </a>
          </h5>
        </div>
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase text-center">
            <a href="#" class="text-dark">
              Phone: 555-5555
            </a>
          </h5>
        </div>
      </div>
    </div>
  );
}
