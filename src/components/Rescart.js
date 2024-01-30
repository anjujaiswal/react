import {URLL} from "../utils/constants";

const Rescart = (props)=>{
  
    return (
        <div className="card rounded-lg m-4 outline outline-1 shadow-md w-[300] h-[500] flex flex-col justify-between">
           <div className="resimg  p-2">
              <img  className="food-img h-[350] rounded-lg" src={URLL + props.res.info.cloudinaryImageId} alt="" />
           </div>
           <div className="details p-2">
              <h3 className="font-bold">{props.res.info.name}</h3>
              <h4>Rating: {props.res.info.avgRating}</h4>
              <h4>{props.res.info.costForTwo}</h4>
              <p className="">{props.res.info.cuisines.join(", ")}</p>
           </div>
        </div>
    )
};
export default Rescart;