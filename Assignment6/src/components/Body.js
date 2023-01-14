import RestaurantCard from "./RestaurantCard";
import { FiSearch } from "react-icons/fi";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { API_URL } from "../config";

const filterRestaurants = (searchText, restaurantList) => {
  return restaurantList.filter((restaurant) =>
    restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
  );
};

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const getRestaurants = async () => {
    try {
      const data = await fetch(
        API_URL
      );
      const response = await data.json();
      setAllRestaurants(response?.data?.cards[2]?.data?.data?.cards);
      setFilteredRestaurants(response?.data?.cards[2]?.data?.data?.cards);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(allRestaurants);
  useEffect(() => {
    getRestaurants();
  }, []);

  useEffect(() => {
    if (!searchText) {
      setFilteredRestaurants(allRestaurants);
    }
  }, [searchText]);

  return (
    <section className="main-container">
      <div className="search-container">
        <input
          type="text"
          className="search-box"
          placeholder="Search restaurants..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
            const filteredData = filterRestaurants(searchText, allRestaurants);
            setFilteredRestaurants(filteredData);
          }}
        >
          <FiSearch />
        </button>
      </div>
      {allRestaurants?.length > 0 ? (
        <div className="restaurants-list">
          {filteredRestaurants?.length > 0 ? (
            filteredRestaurants.map((restaurant) => (
              <RestaurantCard key={restaurant?.data?.id} {...restaurant.data} />
            ))
          ) : (
            <h2>No matching restaurant found</h2>
          )}
        </div>
      ) : (
        <Shimmer />
      )}
    </section>
  );
};

export default Body;
