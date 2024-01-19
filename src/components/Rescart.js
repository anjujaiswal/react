const Rescart = (props)=>{ 
    return (
        <div className="card">
           <div className="resimg">
              <img  className="food-img" src={URLL + props.res.info.cloudinaryImageId} alt="" />
           </div>
           <div className="details">
              <h3>{props.res.info.name}</h3>
              <h4>{props.res.info.avgRating}</h4>
              <p>{props.res.info.cuisines}</p>
           </div>
        </div>
    )
};
export default Rescart;