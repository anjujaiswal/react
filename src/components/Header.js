import { useAutocomplete } from '@mui/material';
import logo from '../../images/logo.png';
import { useState } from 'react';
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
                    <li  className="item">Home</li>
                    <li className="item">About us</li>
                    <li className="item">Contact us</li>
                    <button onClick={()=>{toggle()}}>{auth}</button>
                </ul>

            </div>
       </div>
    );
};