import React, { useEffect, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import logo from '../images/logo.png';
import food from '../images/food.png'
import foo1 from '../images/foo1.png'
import {Header} from "./components/Header";
import URLL from "./utils/constants";
import Shimmer from "./components/shimer";
/**
 * header
 * body 
 * footer
 */
const url  = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
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

const Rescart = (props)=>{ 
   
    // let cus = props.res.info.cuisine;
    // cus = cus.join(" ");
    return (
        <div className="card">
           <div className="resimg">
              <img  className="food-img" src={URLL + props.res.info.cloudinaryImageId} alt="" />
           </div>
           <div className="details">
              <h3>{props.res.info.name}</h3>
              <h4>{props.res.info.avgRating}</h4>
              <p>{props.res.info.cuisine}</p>
           </div>
        </div>
    )
};
const Maincontent = () => {
    const [searchValue, setSearchValue] = useState("");
    const [res, setres] = useState([]);
    const [filtered, setFiltered] = useState([]);
    // 
    console.log("body");
    useEffect(()=>{
        fetchData();
     }, [])
     const fetchData = async ()=>{
         const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5355161&lng=77.3910265&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
         const json = await data.json();
         const cards = json;
         console.log("xxx",cards?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
         setres(cards?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
         setFiltered(cards?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    return filtered.length === 0 ? (<><Shimmer/></>):(
      
        <div className="main-body">
            <div className="search">
                <input type="input"  
                value= {searchValue} onChange={(e)=> {setSearchValue(e.target.value)}}
                >
                </input>
                <button 
                onClick={()=>{
                    const newfilter = res.filter((res1) =>{
                       return  res1.info.name.toLowerCase().includes(searchValue.toLowerCase());
                    });
                    setFiltered(newfilter);
                }}
                > Search </button>
            </div>
            <div className="cards">
                {filtered.map((res)=> {
                    // console.log(res.info)
                    return <Rescart key = {res.info.id} res = {res}/>
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