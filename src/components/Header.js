
import logo from '../../images/logo.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';
export const Header = ()=>{
    const [auth, setAuth] = useState("Login");
    const toggle = ()=>{
        let tog = auth === "Login" ? "Logout" : "Login";
        setAuth(tog);
    }
    return (
        <div div className="nav">
            <div className="logo-container">
               <img  className="logo" src= {logo}  />
            </div>
            <div className="nav-container">
                <ul className="nav-items">
                    <li  className="item"><Link to ="/">Home</Link></li>
                    <li className="item"><Link to ="/about">About</Link></li>
                    <li className="item"><Link to ="/contacts">Contact us</Link></li>
                    <button onClick={()=>{toggle()}}>{auth}</button>
                </ul>

            </div>
       </div>
    );
};