import { useContext, useEffect, useState } from "react";
import RestaurantCard, { withTopRatedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { data, Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import NoInternetPage from "./NoInternetPage";
import UserContext from "../utils/UserContext";
import MOCK_DATA from "../components/mocks/mockResListData.json";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [originalList, setOriginalList] = useState([]); // for reset
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true); // ✅ loading flag

  const onlineStatus = useOnlineStatus();

  const RestaurantCardTopRated = withTopRatedLabel(RestaurantCard);

  const { loggedInUser, setUserName } = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // const data = await fetch(
      //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      // );

      // const json = await data.json();

      const json = MOCK_DATA;

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
    const filteredList = originalList.filter(
      (res) => res.info?.avgRating > 4.3
    );
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

  if (onlineStatus === false) {
    return <NoInternetPage />;
  }

  // ✅ Show shimmer only while loading
  if (loading) {
    return <Shimmer />;
  }

  return (
    <div>
      <div className="flex items-center mt-26">
        <div className="search">
          <input
            type="text"
            data-testid="searchInput"
            className="p-1 m-3 border border-black-100"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearch();
            }}
          />
          <button
            className="cursor-pointer px-3 py-1 bg-green-200 rounded-md hover:bg-green-300"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <button
          className="cursor-pointer border border-b-2 ml-10 m-4 px-2 rounded-sm py-0.5 bg-orange-300 hover:bg-orange-400"
          onClick={filterTopRated}
        >
          Top Rated Restaurants
        </button>
        <button
          className="cursor-pointer border border-b-2 ml-1 px-2 rounded-sm py-0.5 text-w bg-orange-300 hover:bg-orange-400"
          onClick={resetList}
        >
          Reset
        </button>
        <div className="m-4 p-4 flex items-center">
          <label>UserName : </label>
          <input
            className="p-1 m-3 border border-black-100"
            value={loggedInUser}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
      </div>

      {/* ✅ Show message when no results */}
      {restaurantList.length === 0 ? (
        <h2 style={{ marginTop: "20px", textAlign: "center" }}>
          No restaurants match your search.
        </h2>
      ) : (
        <div className="flex flex-wrap ml-6">
          {restaurantList.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={"restaurants/" + restaurant.info.id}
            >
              {restaurant.info?.avgRating > 4.6 ? (
                <RestaurantCardTopRated resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
