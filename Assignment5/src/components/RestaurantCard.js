import { AiFillStar } from "react-icons/ai";
const RestaurantCard = ({
    name,
    cuisines,
    avgRating,
    slaString,
    costForTwoString,
    cloudinaryImageId,
  }) => {
    return (
      <div className="restaurant-card">
        <img
          src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`}
          alt={name}
          className="restaurant-card-image"
        />
        <h2 className="restaurant-name">{name}</h2>
        <p className="restaurant-card-cuisines">{cuisines.join(", ")}</p>
        <div className="restaurant-details">
          <div className="rating">
            <AiFillStar />
            <span>{avgRating}</span>
          </div>
          <div>•</div>
          <div>{slaString}</div>
          <div>•</div>
          <div>{costForTwoString}</div>
        </div>
      </div>
    );
  };

  export default RestaurantCard;