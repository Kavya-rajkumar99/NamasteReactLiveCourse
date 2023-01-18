import { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [restaurantInfo, setResaurantInfo] = useState(null);
  const getRestaurantMenuInfo = async () => {
    const response = await fetch(
      `https://www.swiggy.com/dapi/menu/v4/full?lat=13.0826802&lng=80.2707184&menuId=${resId}`
    );
    const data = await response.json();
    console.log(data);
    setResaurantInfo(data);
  };
  useEffect(() => {
    getRestaurantMenuInfo();
  }, []);

  const buttonStyle = {
    backgroundColor:
      restaurantInfo?.data?.avgRatingString == "--"
        ? "#fff"
        : parseFloat(restaurantInfo?.data?.avgRatingString) < 4.0
        ? "#db7c38"
        : "#48c479",
    color: isNaN(restaurantInfo?.data?.avgRatingString) ? "#535665" : "#fff",
  };

  if (restaurantInfo?.statusCode && restaurantInfo?.statusCode == "404") {
    return <NotFound />;
  }
  return !restaurantInfo ? (
    <Shimmer />
  ) : (
    <section className="restaurant-container">
      <div className="card-box">
        <div className="res-card">
          <div className="img-container">
            <img
              src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${restaurantInfo?.data?.cloudinaryImageId}`}
              alt={restaurantInfo?.data?.name}
              className="restaurant-image"
            />
          </div>
          <div className="card-text">
            <h2 className="restaurant-name no-margin">
              {restaurantInfo?.data?.name}
            </h2>
            <p className="res-cuisines">
              {restaurantInfo?.data?.cuisines.join(", ")}
            </p>
            <p>
              {restaurantInfo?.data?.area}, {restaurantInfo?.data?.city}
            </p>
            <p className="res-cost">{restaurantInfo?.data?.costForTwoMsg}</p>
            <div className="resRating" style={buttonStyle}>
              <AiFillStar />
              <span>{restaurantInfo?.data?.avgRatingString}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="res-menu">
        {Object.values(restaurantInfo?.data?.menu?.items)
          .slice(0, 25)
          .filter((item) => item?.price !== 0)
          .map((menuItem) => (
            <div className="res-menu-card" key={menuItem.id}>
              <div className="res-menu-card-box">
                <div className="res-menu-info">
                  <h3 className="res-menu-item-name">{menuItem.name}</h3>
                  <p className="res-menu-item-price">
                    {new Intl.NumberFormat("en-IN", {
                      style: "currency",
                      currency: "INR",
                    }).format(menuItem.price / 100)}
                  </p>
                  <button>Add to Cart</button>
                </div>
                <img
                  src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${menuItem.cloudinaryImageId}`}
                  className="res-menu-image"
                  alt={menuItem.name}
                />
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default RestaurantMenu;
