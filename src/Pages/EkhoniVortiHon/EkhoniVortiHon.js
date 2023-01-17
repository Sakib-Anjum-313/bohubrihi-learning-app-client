import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { FaAccessibleIcon, FaClock, FaUser, FaVideo } from "react-icons/fa";
import { CourseDetailContext } from "../../contexts/CourseDetailsProvider/CourseDetailsProvider";
import Header from "../Common/Header/Header";
import "./EkhonoVorti.css";
const EkhoniVortiHon = () => {
  const { selectCourse } = useContext(CourseDetailContext);
  const { image_url, title, details, author } = selectCourse;
  console.log(selectCourse);
  return (
    <div>
      <Header></Header>
      <Container className="mt-4">
        <Row xs={1} md={2} className="justify-content-md-center">
          <Col lg="7">
            <div>
              <h2 className="mb-1">{title}</h2>
              <h5 className="mb-3">
                Instructor: <span className="vorti">{author?.name}</span>
              </h5>
              <img className="img-fluid" src={image_url} alt="" />
            </div>
          </Col>
          <Col lg="5">
            <Card style={{ width: "30rem" }}>
              <Card.Body className="navbar-bg rounded ">
                <div className="ms-3 me-3">
                  <Card.Title className="text-white fw-bold text-start ms-2 mt-3">
                    এই কোর্সের ভেতরে যা যা রয়েছে
                  </Card.Title>

                  <div>
                    <Row md={2}>
                      <Col lg="6">
                        <div className="mb-2 mt-3">
                          <span className="me-3  text-warning">
                            <FaVideo />
                          </span>
                          <span className="text-white">
                            Approx. {details?.video} Hours
                          </span>
                        </div>
                        <div className="mb-2">
                          <span className="me-3 text-warning">
                            <FaUser />
                          </span>

                          <span className=" text-white">
                            {details?.student}+ Total Students
                          </span>
                        </div>
                        <div className="mb-4">
                          <span className="me-3 text-warning">
                            <FaAccessibleIcon />
                          </span>
                          <span className="text-white">
                            Access of Content: {details?.content_access}
                          </span>
                        </div>
                      </Col>
                      <Col lg="6">
                        <div className="mb-2 mt-3">
                          <span className="me-3  text-warning">
                            <FaClock />
                          </span>
                          <span className="text-white">
                            Course Duration {details?.duration} Months
                          </span>
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <div className="d-grid gap-2 ">
                    <button className="home-bg rounded btn">
                      <div className="d-flex justify-content-between align-items-center mx-2">
                        <div className="text-white fs-6">কোর্সের মূল্য</div>
                        <div className="text-white fw-bold fs-5">
                          ৳ <span>{details?.price}</span>
                        </div>
                      </div>
                    </button>
                    <button className="btn btn-warning  fw-bold">
                      <span className="vorti">এখনই ভর্তি হোন</span>
                    </button>
                  </div>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default EkhoniVortiHon;
