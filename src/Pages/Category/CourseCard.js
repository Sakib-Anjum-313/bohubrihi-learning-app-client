import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

const CourseCard = ({ course }) => {
  const { title, image_url, details } = course;
  return (
    <>
      <Col>
        <Card>
          <Card.Img variant="top" src={image_url} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              <span className="fw-bold fs-4">৳ </span>
              {details.price}
            </Card.Text>
            <div >
              <Button className="w-100" variant="primary" size="md">
                এখনই ভর্তি হোন
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default CourseCard;
