import React, { useEffect, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter,Link,Outlet } from "react-router-dom";

import {Header} from "./components/Header";
import Maincontent from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contacts";
import ResMenu from "./components/ResMenu";
import Error from "./components/Error";

const url  = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"

const Applayout = () => {
    return (
    <>
        <Header/>
        <Outlet/>
    </>
    );
};
const appRouter = createBrowserRouter([
    {
        path:"/",
        element: <Applayout/>,
        children: [
            {
                path:"/",
                element:<Maincontent/>
            },
            {   
                path:"about",
                element:<About/>
            },
            {
                path:"contacts",
                element:<Contact/>
            },
            {
                path:"res/:resid",
                element: <ResMenu/>
            }
        ],
        errorElement:<Error/>
    }
    

])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);