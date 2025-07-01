import { useEffect, useState } from "react";
import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [originalList, setOriginalList] = useState([]); // for reset
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const json = await data.json();

      const restaurants = json?.data?.cards?.find(
        (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
      )?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      if (restaurants) {
        setRestaurantList(restaurants);
        setOriginalList(restaurants);
      } else {
        console.warn("Restaurants not found in API response");
      }
    } catch (error) {
      console.error("Failed to fetch data:", error);
    } finally {
      setLoading(false);
    }
  };

  const filterTopRated = () => {
    const filteredList = restaurantList.filter(
      (res) => res.info?.avgRating > 4
    );
    setRestaurantList(filteredList);
  };

  const resetList = () => {
    setRestaurantList(originalList);
  };

  return (
    <div className="body">
      <div className="filter">
        <button onClick={filterTopRated}>Top Rated Restaurants</button>
        <button onClick={resetList}>Reset</button>
      </div>

      <div className="res-container">
        {loading ? (
          <h2>Loading restaurants...</h2>
        ) : (
          restaurantList.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
