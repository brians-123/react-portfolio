import { Project } from "./Project";
import projects from "../projects.json";
import React from "react";

export function WorkWrapper(props) {
  return <div className="work-wrapper">{props.children}</div>;
  // return (
  //   <Project
  //     id={projects.id}
  //     key={projects.id}
  //     image={projects.image}
  //     imageAltText={projects.imageAltText}
  //     cardTitle={projects.cardTitle}
  //     cardText={projects.cardText}
  //     deployedLink={projects.deployedLink}
  //     repoLink={projects.repoLink}
  //   />
  // )
}

export default WorkWrapper;
