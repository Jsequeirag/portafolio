import { Fragment, useEffect, React } from "react";
import { Nav, Navbar, Container } from "react-bootstrap/";
import { shrinkNav } from "../utilities/shirinkMenu";
import "./header.css";
export default function Header() {
  useEffect(() => {
    shrinkNav();
  }, []);
  return (
    <Fragment>
      <Navbar
        fixed="top"
        className="headerNav"
        id="headerNav"
        collapseOnSelect
        expand="lg"
      >
        <Navbar.Brand href="#home" className="p-2">
          <mark className=" text-white ">José</mark>
          <text className="text-white">Sequeira</text>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Container>
            <Nav className="justify-content-end">
              <Nav.Link className="headerLink" href="#home">
                Home
              </Nav.Link>
              <Nav.Link className="headerLink" href="#skills">
                Skills
              </Nav.Link>{" "}
              <Nav.Link className="headerLink" href="#projects">
                Projects
              </Nav.Link>{" "}
              <Nav.Link className="contactLink" href="#contact">
                Contact
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar.Collapse>
      </Navbar>
    </Fragment>
  );
}
