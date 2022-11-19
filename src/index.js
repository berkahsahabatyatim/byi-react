import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Profile from './about/Profile'
import * as serviceWorker from './serviceWorker';
import {
    createBrowserRouter,
    RouterProvider,
    // Route,
} from "react-router-dom";
import Notfound from './notfound/Notfound'
import { profile } from "./about/Profile"
import { visiMisi, Vision } from "./about/Vision"
import { pengurus, Pengurus } from "./about/Pengurus"
import { Legalitas, legalitas } from './about/Legalitas';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Notfound />,
        children: [

        ],
    },
    {
        path: profile,
        element: <Profile />
    },
    {
        path: visiMisi,
        element: <Vision />
    },
    {
        path: pengurus,
        element: <Pengurus />
    },
    {
        path: legalitas,
        element: <Legalitas />
    },
]);

ReactDOM.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
