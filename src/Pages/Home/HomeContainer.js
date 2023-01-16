import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Common/Header/Header';

const HomeContainer = () => {
    return (
      <div>
        <Header></Header>
        <Outlet></Outlet>
      </div>
    );
};

export default HomeContainer;