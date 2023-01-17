import React from "react";
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Header from "../Common/Header/Header";
import career_1 from "./career 1.png";
import career_2 from "./career 2.png";
import career_3 from "./career 3.png";
import career_4 from "./career 4.png";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <div className="container">
        <div className=" mt-4 d-flex flex-column justify-content-center  ">
          <div className="mb-3 mt-4">
            <h2>ক্যারিয়ার ট্র্যাক কেন সেরা?</h2>
          </div>
          <div className="container  ">
            <Row className="" xs={1} md={4}>
              <Col className="d-flex flex-row justify-content-center">
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={career_1} />
                  <Card.Body>
                    <Card.Title>
                      ইন্ডাস্ট্রি এক্সপার্টদের বানানো কন্টেন্ট
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="d-flex flex-row justify-content-center">
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={career_2} />
                  <Card.Body>
                    <Card.Title>
                      বাস্তব ব্যবহারভিত্তিক প্রজেক্ট ও অ্যাসাইনমেন্ট
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="d-flex flex-row justify-content-center">
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={career_3} />
                  <Card.Body>
                    <Card.Title>মেন্টরদের কাছ থেকে সরাসরি সাপোর্ট</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="d-flex flex-row justify-content-center">
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={career_4} />
                  <Card.Body>
                    <Card.Title>যেকোনো জায়গা থেকে শেখার সুবিধা</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
