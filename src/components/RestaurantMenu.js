import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import React from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import ItemList from "./ItemList";

const RestaurantMenu = () => {
  const [isVegOnly, setIsVegOnly] = useState(false); // New state for the toggle veg only mode
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(null);

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const restaurantInfo = resInfo?.cards?.find((card) => card?.card?.card?.info)
    ?.card?.card?.info;

  // Find all menu sections
  const menuSections = resInfo?.cards
    ?.find((card) => card?.groupedCard?.cardGroupMap?.REGULAR)
    ?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (card) => card?.card?.card?.title && card?.card?.card?.itemCards
    );

  const { name } = restaurantInfo || {};

  // Function to handle the toggle button click
  const handleVegOnlyToggle = () => {
    setIsVegOnly(!isVegOnly);
  };

  //console.log(menuSections);

  return (
    <div className="flex items-center justify-center h-screen w-full mt-24">
      <div className="w-1/2 min-w-[400px] bg-white rounded-xl shadow-lg p-8 text-center max-h-[90vh] overflow-y-auto">
        <h1 className="text-4xl font-extrabold mb-1 text-gray-800">{name}</h1>

        <button
          onClick={handleVegOnlyToggle}
          className={`
    font-semibold py-2 px-4 rounded-full border transition-all duration-200 ease-in-out mt-4 
    ${
      isVegOnly
        ? "bg-green-600 text-white border-green-600 shadow-md hover:bg-green-700"
        : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200 hover:border-gray-400"
    }
  `}
        >
          Veg Only
        </button>

        {menuSections && menuSections.length > 0 ? (
          menuSections.map((section, index) => {
            return (
              <React.Fragment key={section.card.card.title}>
                <RestaurantCategory
                  data={section.card.card}
                  veg={isVegOnly}
                  showItems={index === showIndex ? true : false}
                  setShowIndex={() => {
                    index == showIndex
                      ? setShowIndex(null)
                      : setShowIndex(index);
                  }}
                />
              </React.Fragment>
            );
          })
        ) : (
          <p className="text-center text-gray-500">
            No menu items available for this restaurant.
          </p>
        )}
      </div>
    </div>
  );
};

export default RestaurantMenu;
