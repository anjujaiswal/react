import {URLL} from "../utils/constants";

const Rescart = (props)=>{
  
    return (
        <div className="bg-gray-100 hover:bg-gray-200 rounded-lg m-4 p-4 shadow-md w-[250px] ">
           
              <img  className=" rounded-lg" src={URLL + props.res.info.cloudinaryImageId} alt="" />
           {/* </div> */}
           {/* <div className="details p-2"> */}
              <h3 className="font-bold">{props.res.info.name}</h3>
              <h4>Rating: {props.res.info.avgRating}</h4>
              <h4>{props.res.info.costForTwo}</h4>
              <p className="">{props.res.info.cuisines.join(", ")}</p>
           {/* </div> */}
        </div>
    )
};
export default Rescart;