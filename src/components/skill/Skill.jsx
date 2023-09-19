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
              <p>-NODEJS</p>
              <p>-TYPESCRIPT</p>
              <p>-EXPRESSJS</p>
              <p>-NESTJS</p>
              <p>-MONGO</p>
              <p>-SQL</p>
            </div>
          </div>
          <div
            className="skills-card-container"
            style={{ minWidth: "300px", width: "300px", height: "300px" }}
          >
            <h2 className="card-title">Frontend</h2>
            <div className="">
              <p>-REACT</p>
              <p>-HTML,CSS,Javascript</p>
            </div>
          </div>

          <div
            className="skills-card-container"
            style={{ minWidth: "300px", width: "300px", height: "300px" }}
          >
            <h2 className="card-title">Services</h2>
            <div className="">
              <p>-HEROKU</p>
              <p>-NETLIFY</p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
