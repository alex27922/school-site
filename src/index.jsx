import React from 'react';
import './index.scss';
import { createRoot } from 'react-dom/client';
import App from "./App"
import Home from "./Home"
import Contacts from "./Contacts"
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import About from './About';

const container = document.getElementById('root');
const root = createRoot(container);

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                element: <Home />,
                index: true
            },
            {
                element: <Contacts />,
                path: "/contacts"
            }, 
            {
                element: <About />,
                path: "/about"
            }
        ]
    },
]);
root.render(<RouterProvider router={router} />)