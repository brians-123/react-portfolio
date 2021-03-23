import "./App.css";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Footer } from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AboutMe } from "./components/AboutMe";
import { Project } from "./components/Project";
import projects from "./projects.json";
import React, { useState } from "react";
import { WorkWrapper } from "./components/WorkWrapper";

function App() {
  // var state = { projects };
  return (
    <Router>
      <div>
        <Header />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about-me">
            <AboutMe />
          </Route>
          <Route path="/work">
            {projects.map(project => (
              <Project
                id={project.id}
                key={project.id}
                image={project.image}
                imageAltText={project.imageAltText}
                cardTitle={project.cardTitle}
                cardText={project.cardText}
                deployedLink={project.deployedLink}
                repoLink={project.repoLink}
              />
            ))}
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
