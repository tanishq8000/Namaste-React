import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import React from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const [isVegOnly, setIsVegOnly] = useState(false); // New state for the toggle veg only mode
  const { resId } = useParams();

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
          menuSections.map((section) => {
            // Conditionally filter items for the "Veg Only" button
            const filteredItems = isVegOnly
              ? section.card.card.itemCards.filter(
                  (item) => item.card.info.isVeg === 1 // 1 means vegetarian in the API
                )
              : section.card.card.itemCards;

            // Only render the section if it has items after filtering
            if (filteredItems.length === 0) {
              return null;
            }

            return (
              <React.Fragment key={section.card.card.title}>
                <h3 className="text-2xl mt-8 mb-4 text-gray-800 border-b border-gray-200 pb-4">
                  {section.card.card.title}
                </h3>
                <ul className="list-none p-0 m-0 text-left">
                  {filteredItems.map((item) => (
                    <li
                      key={item.card.info.id}
                      className="border-b border-gray-100 p-5 last:border-b-0"
                    >
                      <div className="flex justify-between items-baseline mb-1">
                        <h4 className="text-xl font-semibold text-gray-800 m-0">
                          {item.card.info.name}
                        </h4>
                        <p className="text-lg font-semibold text-gray-700 m-0">
                          Rs.
                          {item.card.info.price
                            ? item.card.info.price / 100
                            : item.card.info.defaultPrice / 100}
                        </p>
                      </div>
                      <p className="text-sm text-gray-500 leading-normal m-0">
                        {item.card.info.description}
                      </p>
                    </li>
                  ))}
                </ul>
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
