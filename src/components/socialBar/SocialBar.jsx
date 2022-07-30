import React from "react";
import "./socialBar.css";
import Ztext from "react-ztext";
import { motion } from "framer-motion/dist/framer-motion";
export default function SocialBar() {
  /* ------------------------------ framer motion ----------------------------- */
  const fadeInDown = {
    initial: {
      x: 50,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.5,
        ease: "easeInOut",
      },
    },
  };
  return (
    <motion.div
      variants={fadeInDown}
      initial="initial"
      animate="animate"
      className="icon-bar "
    >
      <a href="linkedin.com/in/josé-luis-sequeira-góngora-114baa216" target="_blank" rel="noreferrer" className="linkedin">
        <i className="fa fa-linkedin"></i>
      </a>
      <a
        href="https://github.com/Jsequeirag/"
         target="_blank" rel="noreferrer"
        className="github"
      >
        <i className="fa fa-github"></i>
      </a>
      <a href="/" className="robot">
        <Ztext
          depth="1rem"
          direction="both"
          event="pointer"
          eventRotation="10deg"
          eventDirection="default"
          fade={false}
          layers={14}
          perspective="500px"
        >
          <span role="img" aria-label="emoji">
            🤖
          </span>
        </Ztext>
      </a>
    </motion.div>
  );
}
