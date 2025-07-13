import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [originalList, setOriginalList] = useState([]); // for reset
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true); // ✅ loading flag

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
      setLoading(false); // ✅ done loading
    }
  };

  const filterTopRated = () => {
    const filteredList = originalList.filter((res) => res.info?.avgRating > 4);
    setRestaurantList(filteredList);
    setSearchText("");
  };

  const resetList = () => {
    setRestaurantList(originalList);
    setSearchText("");
  };

  const handleSearch = () => {
    const filteredRes = originalList.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setRestaurantList(filteredRes);
  };

  // ✅ Show shimmer only while loading
  if (loading) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearch();
            }}
          />
          <button className="searchbtn" onClick={handleSearch}>
            Search
          </button>
        </div>
        <button className="ratedbtn" onClick={filterTopRated}>
          Top Rated Restaurants
        </button>
        <button className="resetbtn" onClick={resetList}>
          Reset
        </button>
      </div>

      {/* ✅ Show message when no results */}
      {restaurantList.length === 0 ? (
        <h2 style={{ marginTop: "20px", textAlign: "center" }}>
          No restaurants match your search.
        </h2>
      ) : (
        <div className="res-container">
          {restaurantList.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
