import Shimmer from "./shimer";
import Rescart from "./Rescart";
import { useState, useEffect,useContext } from "react";
import { Link} from "react-router-dom";
import { HOMEPAGE_URL } from "../utils/constants";
import userContext from "../utils/useContext";


const Maincontent = () => {
    const [searchValue, setSearchValue] = useState("");
    const [res, setres] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const {loggedInUser, setUserName} = useContext(userContext);
    useEffect(()=>{
        fetchData();
     }, [])
     const fetchData = async ()=>{
         const data = await fetch(HOMEPAGE_URL);
         const json = await data.json();
         const cards = json;
        //  console.log("xxx",cards?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
         setres(cards?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
         setFiltered(cards?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    return filtered.length === 0 ? (<><Shimmer/></>):(
      
        <div className="main-body">
            <div className="search p-2">
                <input type="input" className="m-2 outline outline-1"  
                value= {searchValue} onChange={(e)=> {setSearchValue(e.target.value)}}
                >
                </input>
                <button  className= " bg-green-200  m-2 outline outline-1 p-1 rounded-xl w-[100]"
                onClick={()=>{
                    const newfilter = res.filter((res1) =>{
                       return  res1.info.name.toLowerCase().includes(searchValue.toLowerCase());
                    });
                    setFiltered(newfilter);
                }}
                > Search </button>
                <button  className=" bg-pink-200 p-1 outline outline-1 rounded-xl"
                onClick={()=>{
                    const newfilter = res.filter((res1) =>{
                       return  res1.info.avgRating>=4;
                    });
                    setFiltered(newfilter);
                }}
                > Filter by rating </button>
            
    
            <label className="mx-2 p-2 font-bold" >Username : </label>
                    <input className="border-black border p-1"
                    value={loggedInUser}
                     onChange={(e)=>setUserName(e.target.value)} />
            </div>
            <div className="cards flex flex-wrap">
                {filtered.map((res)=> {
                    // console.log(res.info)
                    return <Link to = {"/res/"+res.info.id} key = {res.info.id} ><Rescart res = {res}/></Link>
                })} 
            </div>
        </div>
    );
};
export default Maincontent;