import React from "react";
import ReactDOM from "react-dom/client";


// const  heading = React.createElement("h1",{id:"headin"}, [React.createElement("div",{id:"child1"},"child1"),
// React.createElement("div",{id:"child2"},"child2")]);
const Logo = () =>(
    <div className="header">
       
        <img src= "./images/logo.jpg" alt="logo"/>
        <input  name="myInput"/>
         <h5>icon</h5>
    </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Logo/>);