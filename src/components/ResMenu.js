import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RES_URL } from "../utils/constants";
const ResMenu = () =>{
    const [dishes, setDishes] = useState([]);
    const [resinfo, setResinfo]  = useState("");
    const {resid} = useParams();
    const fetchData = async() => {
        const data = await fetch(RES_URL+resid)
        const json = await data.json();
        // console.log(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
        setDishes(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
        setResinfo(json?.data?.cards[0]?.card?.card?.info);
        // console.log(resinfo);
    } 
    useEffect(()=>{
        fetchData();
        
    },[]);
    const {name, avgRating} = resinfo;
    return (<div>
          <h2>{name} : Rating {avgRating}</h2>
          <h3>Dishes</h3>
          <ul>
            {dishes.map((dish)=>{
                return <li key={dish?.card?.info?.id}>{dish?.card?.info?.name}</li>
            })}
          </ul>
    </div>)
};
export default ResMenu;