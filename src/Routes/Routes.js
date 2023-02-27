import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Shared/Login/Login';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        // errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
        ]
    }
])

export default router;