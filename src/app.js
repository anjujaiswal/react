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
import userContext from "./utils/useContext"; 
const url  = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
// const Grocery = lazy(()=>{import("./components/Grocery")});
const Applayout = () => {
    const [userName, setUserName] = useState();
    useEffect(()=>{
        const data= {
            name:"Anju"
        }
        setUserName(data.name);
    },[])
    return (
    <userContext.Provider value={{loggedInUser : userName, setUserName}}>
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
    </userContext.Provider>
        
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