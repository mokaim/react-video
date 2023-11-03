import React from 'react';
import ReactDOM from 'react-dom/client';

import 'what-input/dist/what-input.min'
import 'foundation-sites/dist/js/foundation.min'
import './custom-style/scss/animation.scss'

import './index.css';
import reportWebVitals from './reportWebVitals';

import RouterConfig from './components/router/RouterConfig'
import {RouterProvider} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={RouterConfig}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
