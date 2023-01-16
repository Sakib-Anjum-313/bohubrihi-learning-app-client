import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Common/Header/Header';

const RegAndLogin = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default RegAndLogin;