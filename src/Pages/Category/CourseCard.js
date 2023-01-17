import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";
import { CourseDetailContext } from "../../contexts/CourseDetailsProvider/CourseDetailsProvider";

const CourseCard = ({ course }) => {
  const { title, image_url, details } = course;
  const { selectCourse, setSetectCourse } = useContext(CourseDetailContext);
  const navigate = useNavigate();
  const handleCourseDetails = () => {
    setSetectCourse(course);
    navigate("/ekhoni-vorti-hon");
  
}
  return (
    <>
      <Col>
        <Card>
          <Card.Img variant="top" src={image_url} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              <span className="fw-bold fs-4">৳ </span>
              <span className="fw-bold fs-5">{details.price}</span>
            </Card.Text>
            <div>
              
                <Button onClick={handleCourseDetails} className="w-100" variant="primary" size="md">
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
