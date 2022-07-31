import { Fragment, useEffect, React } from "react";
import { Nav, Navbar, Container } from "react-bootstrap/";
import { shrinkNav } from "../utilities/shirinkMenu";
import { reload } from "../utilities/shirinkMenu";

import "./nav.css";
import { motion } from "framer-motion/dist/framer-motion";
export default function Navigator() {
  /* ------------------------------ framer motion ----------------------------- */
  const fadeInDown = {
    initial: {
      y: -60,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.5,
        ease: "easeInOut",
      },
    },
  };
  /* -------------------------------- useEffect ------------------------------- */
  useEffect(() => {
    shrinkNav();
    reload();
  }, []);
  return (
    <Fragment>
      <motion.div variants={fadeInDown} initial="initial" animate="animate">
        <Navbar
          fixed="top"
          className="Navigator"
          id="Navigator"
          collapseOnSelect
          expand="lg"
        >
          <Navbar.Brand href="#home" className="p-2">
            <mark className=" text-white ">José</mark>
            <span className="text-white">Sequeira</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Container>
              <Nav className="justify-content-end" id="nav">
                <Nav.Link className="navLink" href="#home">
                  Home
                </Nav.Link>
                <Nav.Link className="navLink" href="#skills">
                  Skills
                </Nav.Link>{" "}
                <Nav.Link className="navLink" href="#projects">
                  Projects
                </Nav.Link>{" "}
                <Nav.Link className="contactLink" href="#contact">
                  Contact
                </Nav.Link>
              </Nav>
            </Container>
          </Navbar.Collapse>
        </Navbar>
      </motion.div>
    </Fragment>
  );
}
