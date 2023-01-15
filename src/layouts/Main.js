import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Common/Footer/Footer';
import Header from '../Pages/Common/Header/Header';
import LeftSideBar from '../Pages/Common/LeftSideBar/LeftSideBar';

const Main = () => {
    return (
      <div>
        <Header></Header>
        <Container className="border border-3">
          <Row>
            <Col lg="3" className="border border-3">
              <LeftSideBar></LeftSideBar>
            </Col>
            <Col lg="9">
              <Outlet></Outlet>
            </Col>
          </Row>
        </Container>
        <Footer></Footer>
      </div>
    );
};

export default Main;