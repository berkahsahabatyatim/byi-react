import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {
    createBrowserRouter,
    RouterProvider,
    // Route,
} from "react-router-dom";
import { routerData } from './router';

const router = createBrowserRouter(routerData);

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
