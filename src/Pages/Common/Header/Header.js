import React, { useContext, useState } from "react";
import { Image } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BsSunFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { MdOutlineNightlightRound } from "react-icons/md";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import "./Header.css";
import logo from "./logo/Bohubrihi-Online-Courses-2.png";

const Header = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const [displayUserName, setDisplayUserName] = useState(false);
  const [nightMode, setNightMode] = useState(false);

  const handleLogOut = () => {
    logOutUser()
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };

  const handleMouseOver = () => {
    setDisplayUserName(true);
  };

  const handleMouseOut = () => {
    setDisplayUserName(false);
  };

  const handleNightMode = () => {
    setNightMode(!nightMode);
  }
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
              <Nav className="me-auto " style={{ maxHeight: "600px" }}>
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

                <Nav.Link
                  className="text-white rounded home-bg p-2 ms-3 nav-btn "
                  href="#"
                >
                  FAQ
                </Nav.Link>
                <Link
                  className="text-decoration-none text-white rounded home-bg p-2 ms-3 nav-btn"
                  to={"/blog"}
                >
                  Blogs
                </Link>
                <div
                  onClick={handleNightMode}
                  className="d-flex justify-content-center align-items-center text-white fs-4 ms-3 home-bg rounded p-2 ms-3  mb-3 mb-lg-0"
                >
                  {nightMode ? (
                    <MdOutlineNightlightRound></MdOutlineNightlightRound>
                  ) : (
                    <BsSunFill></BsSunFill>
                  )}
                </div>
              </Nav>
              <>
                {user?.uid ? (
                  <>
                    {user?.photoURL ? (
                      <>
                        {displayUserName && (
                          <span className="text-white fw-semibold">
                            {user?.displayName}
                          </span>
                        )}
                        <Image
                          onMouseOver={handleMouseOver}
                          onMouseOut={handleMouseOut}
                          className="ms-2 "
                          style={{ height: "30px" }}
                          roundedCircle
                          src={user?.photoURL}
                        ></Image>
                      </>
                    ) : (
                      <>
                        <span>{user?.displayName}</span>
                        <FaUser className="text-white fs-4 me-1"></FaUser>
                      </>
                    )}

                    <Button onClick={handleLogOut} className="login me-4 ms-2">
                      LogOut
                    </Button>
                  </>
                ) : (
                  <>
                    <Link to={"/login"} className=" me-4 nav-btn">
                      <Button className="login me-4 border-0">Login</Button>
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
