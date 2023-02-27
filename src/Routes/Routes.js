import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Main from '../Layout/Main';
import Appointment from '../Pages/Appointment/Appointment';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Shared/Login/Login';
import PrivateRoute from './PrivateRoute/PrivateRoute';

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
            {
                path: "/appointment",
                // loader: ({ params }) =>
                // fetch(`https://get-shield-server.vercel.app/servicedetails/${params.id}`),
                element: (
                <PrivateRoute>
                    <Appointment></Appointment>
                </PrivateRoute>
                ),
            },
        ]
    }
])

export default router;