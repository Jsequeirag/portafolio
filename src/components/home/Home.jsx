import { Fragment, React, useEffect } from "react";
import { motion } from "framer-motion/dist/framer-motion";
import Canvas from "./Canvas.jsx";
import "./home.css";
import canvas from "./stars";
import { typeitMyName, typeitMyOcupation } from "../utilities/shirinkMenu";
export default function Home() {
  /* ------------------------------ framer-motion ----------------------------- */
  const fadeInUp = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.7,
        delay: 0.5,
        ease: "easeInOut",
      },
    },
  };
  /* -------------------------------- useeffect ------------------------------- */
  useEffect(() => {
    canvas();

    setTimeout(typeitMyName, 500);
    setTimeout(typeitMyOcupation, 3200);
  });

  return (
    <Fragment>
      <Canvas />
      <div className="home row d-flex  align-items-center" id="home">
        <motion.div
          className="image-container col-lg-5"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <img src="./img/happy.svg" alt="programmer" className="image" />
        </motion.div>
        <motion.div
          className="info-container col-lg-5 d-flex d-flex flex-column"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <div className="myname">
            <span id="typeit-name"></span>
          </div>
          <div className="myocupation">
            <span id="typeit-ocupation"></span>
          </div>
          <div className="text-center cv-button">
            <button className="btn-hover mt-1">Download CV</button>
          </div>
        </motion.div>
      </div>
    </Fragment>
  );
}
