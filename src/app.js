import React, { useEffect, useState, useEffect, lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter,Link,Outlet } from "react-router-dom";

import {Header} from "./components/Header";
import Maincontent from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contacts";
import ResMenu from "./components/ResMenu";
import Error from "./components/Error";
import Grocery from "./components/Grocery";

const url  = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
// const Grocery = lazy(()=>{import("./components/Grocery")});
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
                path:"/about",
                element:<About/>
            },
            {
                path:"/grocery",
                element:<Suspense fallback={<h1>Loading grocery</h1>}><Grocery/></Suspense>
            },
            {
                path:"/contacts",
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