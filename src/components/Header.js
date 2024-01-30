
import logo from '../../images/logo.png';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import userContext from '../utils/useContext';
export const Header = ()=>{
    const [auth, setAuth] = useState("Login");
    const toggle = ()=>{
        let tog = auth === "Login" ? "Logout" : "Login";
        setAuth(tog);
    }
    const {loggedInUser} = useContext(userContext);
    return (
        <div div className="nav flex justify-between bg-pink-50">
            <div className="logo-container w-32">
               <img  className="logo" src= {logo}  />
            </div>
            <div className="nav-container flex">
                <ul className="nav-items flex items-center">
                    <li className='p-2'>{useOnlineStatus()? "Online: ✅": "Offline:🚫"}</li>
                    <li  className="item p-2"><Link to ="/">Home</Link></li>
                    <li className="item p-2"><Link to ="/about">About</Link></li>
                    <li className="item p-2"><Link to ="/contacts">Contact us</Link></li>
                    <li className='item p-2'><Link to="/grocery">Grocery</Link></li>
                    <button className="p-2"onClick={()=>{toggle()}}>{auth}</button>
                    <li className='p-4 font-bold'>{loggedInUser}</li>
                </ul>

            </div>
       </div>
    );
};