import "./App.css";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Footer } from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AboutMe } from "./components/AboutMe";
import { Project } from "./components/Project";
import projects from "./projects.json";
import React from "react";

function App() {
  // var state = { projects };
  return (
    <Router>
      <div className="the-body">
        <Header />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about-me">
            <AboutMe />
          </Route>
          <Route path="/work">
            <div className="container">
              <div className="row">
                {projects.map(project => (
                  <Project
                    id={project.id}
                    key={project.id}
                    cardSize={project.cardSize}
                    image={project.image}
                    imageAltText={project.imageAltText}
                    cardTitle={project.cardTitle}
                    cardText={project.cardText}
                    deployedLink={project.deployedLink}
                    repoLink={project.repoLink}
                    mouseOverImg={project.mouseOverImg}
                  />
                ))}
              </div>
            </div>
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
