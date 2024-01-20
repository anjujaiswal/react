import Shimmer from "./shimer";
import Rescart from "./Rescart";
import { useState, useEffect } from "react";
import { Link} from "react-router-dom";
import { HOMEPAGE_URL } from "../utils/constants";

const Maincontent = () => {
    const [searchValue, setSearchValue] = useState("");
    const [res, setres] = useState([]);
    const [filtered, setFiltered] = useState([]);
    
    useEffect(()=>{
        fetchData();
     }, [])
     const fetchData = async ()=>{
         const data = await fetch(HOMEPAGE_URL)
         const json = await data.json();
         const cards = json;
        //  console.log("xxx",cards?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
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
                <button 
                onClick={()=>{
                    const newfilter = res.filter((res1) =>{
                       return  res1.info.avgRating>=4;
                    });
                    setFiltered(newfilter);
                }}
                > Filter by rating </button>
            </div>
            <div className="cards">
                {filtered.map((res)=> {
                    // console.log(res.info)
                    return <Link to = {"/res/"+res.info.id} key = {res.info.id} ><Rescart res = {res}/></Link>
                })} 
            </div>
        </div>
    );
};
export default Maincontent;