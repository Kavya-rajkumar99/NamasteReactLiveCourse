import RestaurantCard from "./RestaurantCard";
import {FiSearch} from "react-icons/fi"
import { restaurantList } from "../config";
import { useState } from "react";

const filterRestaurants = (searchText,restaurantList) => {
   return restaurantList.filter(restaurant => restaurant.data.name.toLowerCase().includes(searchText.toLowerCase()))
}
const Body = () => {
    const [searchText,setSearchText] = useState("")
    const [restaurants,setRestaurants] = useState(restaurantList)
    return (
     <section className="main-container">
     <div className="search-container">
        <input type="text" className="search-box" placeholder="Search restaurants..." value={searchText} onChange={e=>setSearchText(e.target.value)}/>
        <button className="search-btn" onClick={() => {
            const filteredData = filterRestaurants(searchText,restaurantList)
            setRestaurants(filteredData)
        }}><FiSearch /></button>
     </div>
      <div className="restaurants-list">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
        ))}
      </div>
      </section>
    );
  };

export default Body;