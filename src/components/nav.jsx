import React, { useState, useEffect } from "react";
//import { Link } from "react-router-dom";
import * as ReactBootstrap from "react-bootstrap";
import * as Scroll from "react-scroll";
import "./nav.style.css";
export default function Nav() {
  const [scrolltop, setscrolltop] = useState(0);

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    setscrolltop(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div>
      <ReactBootstrap.Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        bg="dark"
        fixed="top"
      >
        <ReactBootstrap.Navbar.Brand href="">
          I'm Parag Dangariya
        </ReactBootstrap.Navbar.Brand>

        <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootstrap.Nav className="mr-auto"></ReactBootstrap.Nav>
          <ReactBootstrap.Nav>
            <Scroll.Link to="about" smooth={true} duration={1000}>
              <ReactBootstrap.Nav.Link>About Me</ReactBootstrap.Nav.Link>
            </Scroll.Link>
            <Scroll.Link to="project" smooth={true} duration={1200}>
              <ReactBootstrap.Nav.Link>Projects</ReactBootstrap.Nav.Link>
            </Scroll.Link>
            <Scroll.Link to="achievements" smooth={true} duration={1400}>
              <ReactBootstrap.Nav.Link>Achievements</ReactBootstrap.Nav.Link>
            </Scroll.Link>
            <Scroll.Link to="contact" smooth={true} duration={1600}>
              <ReactBootstrap.Nav.Link>Contact Me</ReactBootstrap.Nav.Link>
            </Scroll.Link>
          </ReactBootstrap.Nav>
        </ReactBootstrap.Navbar.Collapse>
      </ReactBootstrap.Navbar>
      <div className="pageprogress">
        <div className="progressbar" style={{ width: `${scrolltop}%` }}></div>
      </div>
    </div>
  );
}
