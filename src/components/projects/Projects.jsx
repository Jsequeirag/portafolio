import React from "react";
import "./projects.css";
export default function Projects() {
  return (
    <div className="projects" id="projects">
      <h1 className="title">Projects</h1>
      <div className="projects-container d-flex flex-column justify-content-center align-items-center">
        <div className="card" style={{ minWidth: "300px", width: "200px" }}>
          <img
            src="/img/05.png"
            className="card-img-top"
            alt="..."
            style={{ "pointer-events": "none" }}
          />
          <div class="card-body">
            <h4 class="card-title">Project title</h4>
            <p class="card-text">Technologies:Nodejs, React,Heroku,netlify</p>
            <div className="d-flex justify-content-center">
              <button className="btn-moving d-flex align-items-center">
                Website
                <img
                  src="/icons/web-icon.ico"
                  alt="hi"
                  style={{
                    "pointer-events": "none",
                  }}
                />
              </button>

              <button className="btn-moving d-flex align-items-center">
                Gitlab
                <img
                  src="/icons/gitlab-icon.ico"
                  alt="hi"
                  style={{
                    "pointer-events": "none",
                  }}
                />
              </button>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}
