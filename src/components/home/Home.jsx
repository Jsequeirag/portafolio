import { Fragment, React, useEffect } from "react";
import { motion } from "framer-motion/dist/framer-motion";
import AnimatedBackground from "./spheres";
//import Canvas from "./Canvas.jsx";
import "./home.css";
//import canvas from "./stars";
import {
  typeitMyName,
  typeitMyOcupation,
  typeitMyOcupationSt,
} from "../utilities/shirinkMenu";
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
    //canvas();

    setTimeout(typeitMyName, 500);
    setTimeout(typeitMyOcupation, 3000);
    setTimeout(typeitMyOcupationSt, 4700);
  });

  return (
    <Fragment>
      <a
        href="https://wa.me/50685022903"
        class="whatsapp-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fab fa-whatsapp whatsapp-icon"></i>
      </a>

      <div className="home row d-flex  align-items-center" id="home">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="background-video"
          style={{ padding: "0px" }}
        >
          <source src="./nave-nicola-narracci.mp4" type="video/mp4" />
        </video>
        <motion.div
          className="image-container col-lg-5 "
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <img src="./img/avatar.png" alt="programmer" className="image" />
        </motion.div>

        <motion.div
          className="info-container col-lg-5 d-flex d-flex flex-column glassmorphism"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <AnimatedBackground /> {/* Agregar el fondo animado */}
          <div className="myname">
            <span id="typeit-name"></span>
          </div>
          <div className="myocupation">
            <span id="typeit-ocupation"></span>
          </div>
          <div className="myocupationst">
            <span id="typeit-ocupation-st"></span>
          </div>
          <div className="cv-button">
            <a
              href="https://drive.google.com/file/d/1er0Aw9HfrNi436Kb5PLMhKchRQ8es7PZ/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn-hover mt-1">
                <i className="fa-solid fa-download"></i> Download CV
              </button>
            </a>
            <a href="#projects-section" rel="noreferrer">
              <button
                className="btn-hover mt-1"
                style={{ marginLeft: "1.5em" }}
              >
                <i className="fa-solid fa-briefcase"></i> Projects
              </button>
            </a>
            <a href="#contact">
              <button className="btn-hover mt-1" style={{ margin: "1.5em" }}>
                <i className="fa-brands fa-whatsapp"></i> Contact me
              </button>
            </a>
          </div>
        </motion.div>
      </div>
    </Fragment>
  );
}
