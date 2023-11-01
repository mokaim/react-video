import * as React from "react";
import App from '../../App'
import Test from '../Test'
import * as ReactDOM from "react-dom/client";

import {loader as SideNavLoader} from '../SideNav'
import {loader as AppLoader} from '../../App'

import {
    createBrowserRouter,
} from "react-router-dom";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        loader: AppLoader,
    },
    {
        path: "/:menu",
        element: <App/>,
        loader: SideNavLoader
    },
]);

export default router;