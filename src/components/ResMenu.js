import { useState, useEffect, useSyncExternalStore } from "react";

import { useParams } from "react-router-dom";
import { RES_URL } from "../utils/constants";
import Rescategory from "./Rescategory";
const ResMenu = () =>{
    const [dishes, setDishes] = useState([]);
    const [resinfo, setResinfo]  = useState("");
    const {resid} = useParams();
    const [categories,setCategories] = useState([]);
    const [showIndex, setShowIndex] = useState(0);
    const fetchData = async() => {
        const data = await fetch(RES_URL+resid)
        const json = await data.json();
        setDishes(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
        setResinfo(json?.data?.cards[0]?.card?.card?.info);
        let ctgry = json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=> {
            // console.log(c?.card?.card?.["@type"])
            return c?.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"} )
        setCategories(ctgry);
        
        // console.log(resinfo);
    } 
    useEffect(()=>{
        fetchData();
    },[]);
    const {name, avgRating,costForTwoMessage,cuisines} = resinfo;
    // console.log(categories);

    return (<div className="text-center  ">
          <h1 className="font-bold text-2xl m-6">{name} : Rating {avgRating}</h1>
          <p className="font-bold text-lg">{cuisines !=undefined ? cuisines.join(", "): cuisines} - {costForTwoMessage}</p>
          { categories.map((category,index)=> {
           return < Rescategory key = {category?.card?.card?.title} 
           data={category?.card?.card} 
           showItems={index === showIndex?true: false}
           setShowIndex = {()=> setShowIndex(index)}/>
          })}
    </div>)
};
export default ResMenu;