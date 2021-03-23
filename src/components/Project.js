import React from "react";

export function Project(props) {
  //add styling from html pages into each component
  return (
    <div className="container">
      <h1 className="display-4" id="work">
        Work
      </h1>

      <div className="row">
        <div className={props.cardSize}>
          <div className="card">
            <img
              className="card-img-top"
              src={props.image}
              alt={props.imageAltText}
            />
            <div className="card-body">
              <h5 className="card-title">{props.cardTitle}</h5>
              <p className="card-text">{props.cardText}</p>
              <div className="d-flex justify-content-center">
                <a href={props.repoLink} className="btn btn-primary ">
                  Github
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    //copy paste into the html in home
    //refactor the rectangles into a project component
    //pass the shape via props into the project component
    //pass the number of buttons via props into the project component

    //app should statically define the content for each. One entry for each project component.
    // Pass the name, description,
    //four URLs - (image of project, photo, github url, url to deployed site), shape

    //default state isMouseOver to false use mouseover callback function to change to true
    //use mouseout to change state back to false
    // return <div>myProject 1</div>;
  );
}
