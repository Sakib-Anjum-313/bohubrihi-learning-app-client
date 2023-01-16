import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Common/Footer/Footer';
import Header from '../Pages/Common/Header/Header';
import cover from "../Pages/Common/Header/logo/cover.png";
import LeftSideBar from '../Pages/Common/LeftSideBar/LeftSideBar';

const Main = () => {
    return (
      <div>
        <Header></Header>
        <div className="mx-4 rounded mt-4 ">
          <img className="w-100" src={cover} alt="" />
        </div>
        <Container className="border border-3">
          <Row className=" ">
            <Col lg="3" className="">
              <LeftSideBar></LeftSideBar>
            </Col>
            <Col lg="9" className="">
              <Outlet></Outlet>
            </Col>
          </Row>
        </Container>
        <Footer></Footer>
      </div>
    );
};

export default Main;