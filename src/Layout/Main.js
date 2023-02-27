import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const Main = () => {
    return (
        <div className='w-full'>
            <Navbar></Navbar>
            <Outlet></Outlet>

        </div>
    );
};

export default Main;