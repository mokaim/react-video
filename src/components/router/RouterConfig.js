import * as React from "react";
import App from '../../App'
import Content from '../Content'
import Test from '../Test'
import * as ReactDOM from "react-dom/client";

import {loader as SideNavLoader} from '../SideNav'
import {loader as AppLoader} from '../../App'

import {
    createBrowserRouter,
} from "react-router-dom";
import Contents from "../Contents";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        loader: AppLoader,
    },
    {
        path: "/home",
        element: <App/>,
        children: [
            {
                path: "/home",
                element: <Contents/>,
            },
            {
                path: "/home/video/:id",
                element: <Content/>,
            }
        ],
        loader: SideNavLoader
    },
    {
        path: "/:menu/:id",
        element: <Test/>,
    },
]);

export default router;