import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import "./Header.css";
import logo from "./logo/Bohubrihi-Online-Courses-2.png";

const Header = () => {
  const { user, logOutUser } = useContext(AuthContext);

  const handleLogOut = () => {
    logOutUser()
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <>
      <div className="navbar-bg ">
        <Navbar expand="lg">
          <Container fluid>
            <Navbar.Brand href="#">
              <img className="ms-4" src={logo} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav
                className="me-auto my-2 my-lg-0 "
                style={{ maxHeight: "100px" }}
              >
                <Nav.Link className="text-light fs-6 home-bg rounded">
                  <Link className="text-decoration-none text-white" to={"/"}>
                    হোম
                  </Link>
                </Nav.Link>
                <NavDropdown
                  className=" ms-4 home-bg rounded"
                  autoClose="outside"
                  title={
                    <span className="course-color my-auto">কোর্সসমূহ</span>
                  }
                  id="navbarScrollingDropdown"
                >
                  <NavDropdown.Item>
                    <Link
                      className="text-decoration-none text-dark"
                      to={"/all-courses"}
                    >
                      সকল কোর্স
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item className="ps-1">
                    <NavDropdown
                      drop={"end"}
                      title={<span className="text-dark">কোর্স ক্যাটাগরি</span>}
                    >
                      <NavDropdown.Item href="/courses">
                        কম্পিউটার সাইন্স
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/courses">
                        ডাটা সাইন্স
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/courses">
                        ডিজিটাল মার্কেটিং
                      </NavDropdown.Item>
                    </NavDropdown>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="all-courses/category/01">
                    ক্যারিয়ার ট্র্যাক প্রোগ্রাম
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#" disabled>
                  Link
                </Nav.Link>
              </Nav>
              <>
                {user?.email ? (
                  <>
                    <span>{user.email}</span>
                    <Button onClick={handleLogOut} className="login me-4">
                      LogOut
                    </Button>
                  </>
                ) : (
                  <>
                    <Button className="login me-4">
                      <Link
                        className="text-decoration-none text-white"
                        to={"/login"}
                      >
                        Login
                      </Link>
                    </Button>
                  </>
                )}
              </>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default Header;
