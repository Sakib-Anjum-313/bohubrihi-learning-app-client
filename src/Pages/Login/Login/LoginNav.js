import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../Common/Header/logo/Bohubrihi-Online-Courses-2.png";

const LoginNav = () => {
  return (
    <div>
      <>
        <div className="navbar-bg ">
          <Navbar expand="lg">
            <Container fluid>
              <Navbar.Brand href="#">
                <img className="ms-4" src={logo} alt="" />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0 "
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                >
                  <Nav.Link
                    className="text-light fs-6 home-bg rounded"
                    href="/"
                  >
                    হোম
                  </Nav.Link>
                  <NavDropdown
                    className=" ms-4 home-bg rounded"
                    title={
                      <span className="course-color my-auto">কোর্সসমূহ</span>
                    }
                    id="navbarScrollingDropdown"
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#" disabled>
                    Link
                  </Nav.Link>
                </Nav>
                <Button className="login me-4">Login</Button>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </>
    </div>
  );
};

export default LoginNav;
