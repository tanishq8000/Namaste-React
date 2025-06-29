import { useState } from "react";
import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  // React state variable using hooks
  const [restaurantList, setRestaurantList] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          onClick={() => {
            const filteredList = restaurantList.filter(
              (res) => res.data.avgRating > 4
            );
            setRestaurantList(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {restaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
