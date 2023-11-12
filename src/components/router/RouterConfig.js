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
import Error from "../Error";
import OAuthRedirect from "../OAuth_Redirect";


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
            },
        ],
        loader: SideNavLoader
    },

    {
        path: "/news",
        element: <App/>,
        children: [
            {
                path: "/news",
                element: <h1>아직 개발되지 않은 페이지 입니다.</h1>,
            },
        ],

    },
    {
        path: "/contact",
        element: <App/>,
        children: [
            {
                path: "/contact",
                element: <h1>아직 개발되지 않은 페이지 입니다.</h1>,
            },
        ],
    },
    {
        path: "/about",
        element: <App/>,
        children: [
            {
                path: "/about",
                element: <h1>아직 개발되지 않은 페이지 입니다.</h1>,
            },
        ],
    },
    {
        path: "/oauth/callback",
        element: <App/>,
        children: [
            {
                path: "/oauth/callback",
                element: <OAuthRedirect/>,
            },
        ],
    },

    {
        path: "/:menu/:id",
        element: <Test/>,
    },
]);

export default router;