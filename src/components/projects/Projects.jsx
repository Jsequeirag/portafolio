import React, { useState, useEffect } from "react";
import "./projects.css";
import axios from "axios";
export default function Projects() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    axios.get(process.env.REACT_APP_ENDPOINT).then((res) => {
      setProjects(res.data);
    });
  }, []);

  return (
    <div className="projects" id="projects">
      <h1 className="title">Projects</h1>
      <div className="projects-container d-flex flex-wrap justify-content-center align-items-center">
        {projects.map((project) => (
          <div
            key={project._id}
            className="card"
            style={{ minWidth: "300px", width: "350px" }}
          >
            <div
              className="card-img"
              style={{
                backgroundImage: `url(${project.photo})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            ></div>

            <div className="card-body">
              <h4 className="card-title">{project.title}</h4>
              <p className="card-text">{project.description}</p>
              <div className="d-flex justify-content-center">
                {project.link && (
                  <a
                    href={project.link}
                    style={{
                      textDecoration: "none",
                    }}
                    target="_blank"
                  >
                    <button className="btn-moving d-flex align-items-center">
                      Website
                      <img
                        src="/img/website.png"
                        alt="hi"
                        style={{ width: "35px", height: "35px" }}
                      />
                    </button>
                  </a>
                )}

                <a
                  href={project.github}
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <button className="btn-moving d-flex align-items-center">
                    GitHub
                    <img
                      src="/img/github.png"
                      alt="hi"
                      style={{ width: "35px", height: "35px" }}
                    />
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>{" "}
    </div>
  );
}
