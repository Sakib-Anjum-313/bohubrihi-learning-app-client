import React, { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaAccessibleIcon, FaClock, FaUser, FaVideo } from "react-icons/fa";
import { CourseDetailContext } from "../../contexts/CourseDetailsProvider/CourseDetailsProvider";
import Header from "../Common/Header/Header";

const CheckOut = () => {
  const { selectCourse } = useContext(CourseDetailContext);
    const { image_url, title, details, author, category_id, _id } = selectCourse;
    
    return (
      <>
        <Header></Header>
        <div className="d-flex justify-content-center align-items-center mt-4">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <div>
                <Row md={2}>
                  <Col lg="6">
                    <div className="mb-2 mt-3">
                      <span className="me-3  text-warning">
                        <FaVideo />
                      </span>
                      <span className="text-dark">
                        Approx. {details?.video} Hours
                      </span>
                    </div>
                    <div className="mb-2">
                      <span className="me-3 text-warning">
                        <FaUser />
                      </span>

                      <span className=" text-dark">
                        {details?.student}+ Total Students
                      </span>
                    </div>
                    <div className="mb-4">
                      <span className="me-3 text-warning">
                        <FaAccessibleIcon />
                      </span>
                      <span className="text-dark">
                        Access of Content: {details?.content_access}
                      </span>
                    </div>
                  </Col>
                  <Col lg="6">
                    <div className="mb-2 mt-3">
                      <span className="me-3  text-warning">
                        <FaClock />
                      </span>
                      <span className="text-dark">
                        Course Duration {details?.duration} Months
                      </span>
                    </div>
                  </Col>
                </Row>
              </div>
              <Button className="bg-warning border-0" variant="primary">
                পেমেন্ট করুন
              </Button>
            </Card.Body>
          </Card>
        </div>
      </>
    );
};

export default CheckOut;
