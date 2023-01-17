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
          <Container fluid className="p-0">
            <Navbar.Brand href="/" className="mb-0">
              <img className="ms-4" src={logo} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto " style={{ maxHeight: "100px" }}>
                <Link
                  className="nav-btn text-decoration-none text-white fs-6 home-bg rounded p-2"
                  to={"/"}
                >
                  হোম
                </Link>

                <NavDropdown
                  className=" ms-lg-4 home-bg rounded sm-ms-0 nav-btn"
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
                      <NavDropdown.Item>
                        <Link to={"/all-courses/category/02"}>
                          কম্পিউটার সাইন্স
                        </Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/courses">
                        <Link to={"/all-courses/category/03"}>ডাটা সাইন্স</Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/courses">
                        <Link to={"/all-courses/category/04"}>
                          ডিজিটাল মার্কেটিং
                        </Link>
                      </NavDropdown.Item>
                    </NavDropdown>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>
                    <Link to={"/all-courses/category/01"}>
                      ক্যারিয়ার ট্র্যাক প্রোগ্রাম
                    </Link>
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
                    <Link to={"/login"} className=" me-4 nav-btn">
                      <Button className="login me-4 ">Login</Button>
                    </Link>
                   
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
