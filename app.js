import React from "react";
import ReactDOM from "react-dom/client";
import logo from './images/logo.png';
import food from './images/food.png'
import foo1 from './images/foo1.png'
/**
 * header
 * body 
 * footer
 */

const reslist = [
    { 
        id:'1',
        name:"xeros",
        cuisine:"North India, biryani",
        rating: "4.5",
        img: logo
    },
    { 
        id:'2',
        name:"kareems",
        cuisine:"South India, Idli, dosa",
        rating: "4",
        img: food
    },
    {
        id:'3',
        name:"orion",
        cuisine:"East-West prawns",
        rating:"3.5",
        img:foo1
    }
]
const Header = ()=>{
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
                </ul>

            </div>
       </div>
    );
};
const Rescart = (props)=>{
    return (
        <div className="card">
           <div className="resimg">
              <img  className="food-img" src={props.img} alt="" />
           </div>
           <div className="details">
              <h3>{props.name}</h3>
              <h4>{props.rating}</h4>
              <p>{props.cuisine}</p>
           </div>
        </div>
    )
}
const Maincontent = () => {
    return (
        <div className="main-body">
            <div className="search">
                <input type="input"></input>
                <label> Search </label>
            </div>
            <div className="cards">
                {/* <Rescart name ={ reslist[0].name} rating = {reslist[0].rating} cuisine={reslist[0].cuisine}/> */}
                {/* <Rescart/>
                <Rescart/> */}
                {reslist.map(res => {
                    return <Rescart name ={res.name} rating = {res.rating} cuisine={res.cuisine} img={res.img}/>
                })}
            </div>
        </div>
    );
};
const Applayout = () => {
    return (
    <>
        <Header/>
        <Maincontent/>
    </>
    );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout/>);