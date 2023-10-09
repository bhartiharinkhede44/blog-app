import React from 'react';
import './index.css'; 
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "./views/Home/Home";
import Post from "./views/Post/Post"
import ReadPost from "./views/ReadPost/ReadPost"


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path:"/post",
        element:<Post/>
    },
    {
        path:"/post/read/:id",
        element:<ReadPost/>
    },
    {
        path:"*",
        element:<h1>404 not found</h1>
    }
    ])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router = {router} />
);




