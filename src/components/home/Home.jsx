import { Fragment, React, useEffect } from "react";

import Canvas from "./Canvas.jsx";
import "./home.css";
import canvas from "./fun";

export default function Home() {
  useEffect(() => {
    canvas();
  });

  return (
    <Fragment>
      <Canvas></Canvas>

      <div
        className="home row d-flex justify-content-start align-items-center"
        id="home"
      >
        {" "}
        <div className="image-container col-lg-5">
          <div className="image-framework">
            <img
              src="./img/05.png"
              alt="programmer"
              className="float-end image"
            />
          </div>
        </div>
        <div className="info-container col-lg-5 d-flex ">
          <div className="d-flex flex-column align-items-end">
            <div className="text-center">
              <h2 className="m-3">
                <span className="">Hi,i'm José Sequeira</span>
              </h2>

              <div className="text-center">
                <button className="btn-hover mt-1">Ver curriculum</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
