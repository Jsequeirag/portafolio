import { Fragment, React } from "react";
import "./skill.css";

export default function Skill() {
  return (
    <Fragment>
      <div className="skill" id="skills">
        <h1 className="title">Skills</h1>
        <div className="skills-container d-flex flex-wrap justify-content-center align-items-center  ">
          <div
            className="skills-card-container "
            style={{ minWidth: "300px", width: "300px", height: "300px" }}
          >
            <h2 className="card-title">Backend</h2>
            <div className="">
              <p>-Typescript</p>
              <p>-Mongo</p>
            </div>
          </div>
          <div
            className="skills-card-container"
            style={{ minWidth: "300px", width: "300px", height: "300px" }}
          >
            <h2 className="card-title">Frontend</h2>
            <div className="">
              <p>-Typescript</p>
              <p>-Mongo</p>
            </div>
          </div>

          <div
            className="skills-card-container"
            style={{ minWidth: "300px", width: "300px", height: "300px" }}
          >
            <h2 className="card-title">Cloud</h2>
            <div className="">
              <p>-Typescript</p>
              <p>-Mongo</p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
