import { Fragment, React } from "react";
import "./skill.css";

export default function Skill() {
  return (
    <Fragment>
      <div className="skill p-5" id="skills">
        <h1 className="title text-center text-white mb-5">Skills</h1>
        <div className="skills-container d-flex flex-wrap justify-content-center align-items-center  ">
          <div
            className="skills-card-container skills-card-container-backend text-white m-3 "
            style={{ minWidth: "300px", width: "300px", height: "300px" }}
          >
            <div className="background-backend-card"></div>

            <h2 className="text-center">Backend</h2>
            <div class="">
              <br />
              -TypeScryth
              <br />
              -Mongo
            </div>
          </div>
          <div
            className="skills-card-container skills-card-container-frontend text-white m-3 "
            style={{ minWidth: "300px", width: "300px", height: "300px" }}
          >
            <div className="background-frontend-card"></div>

            <h2 className="text-center">Frontend</h2>
            <div class="">
              <br />
              -TypeScryth
              <br />
              -Mongo
            </div>
          </div>

          <div
            className="skills-card-container skills-card-container-cloud text-white m-3 "
            style={{ minWidth: "300px", width: "300px", height: "300px" }}
          >
            <div className="background-cloud-card"></div>

            <h2 className="text-center">Cloud</h2>
            <div class="">
              <br />
              -TypeScryth
              <br />
              -Mongo
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
