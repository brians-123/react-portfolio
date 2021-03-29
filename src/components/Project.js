import React from "react";

export function Project(props) {
  //will use the state here and change it on each mouseEnter and mouseExit
  const [imageSource, setImageSource] = React.useState(props.image);
  //add styling from html pages into each component
  return (
    <div className={props.cardSize}>
      <div className="card">
        <img
          className="card-img-top"
          alt={props.imageAltText}
          //create a mouseover effect that calls a function
          //use this to update state

          // onLoad={setImageSource(props.image)}
          onMouseOver={() => {
            if (imageSource === props.image) {
              // console.log(imageSource);
              // console.log(props.image);
              console.log(props.mouseOverImg);
              setImageSource(props.mouseOverImg);
            } else {
              // console.log(props.mouseOverImg);
              setImageSource(props.image);
              // console.log(imageSource);
            }
          }}
          src={imageSource}

          // onMouseOver={props.onMouseOver}
        />
        <div className="card-body">
          <h5 className="card-title">{props.cardTitle}</h5>
          <p className="card-text">{props.cardText}</p>
          {/* not justifying */}
          <div className="d-flex justify-content-center">
            {/* if there's a deploy link in json file, render, else don't*/}
            {props.deployedLink ? (
              <a href={props.deployedLink} className="btn btn-primary">
                Deployed Link
              </a>
            ) : null}

            <a href={props.repoLink} className="btn btn-primary ">
              Github
            </a>
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
