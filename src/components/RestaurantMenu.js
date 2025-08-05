import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";
import React from "react";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [isVegOnly, setIsVegOnly] = useState(false); // New state for the toggle veg only mode
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setResInfo(json.data);
  };

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
    <div className="resDesContainer">
      <div className="menu">
        <h1>{name}</h1>

        <button
          className={`toggle-button ${isVegOnly ? "active" : ""}`}
          onClick={handleVegOnlyToggle}
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
                <h3>{section.card.card.title}</h3>
                <ul className="menuList">
                  {filteredItems.map((item) => (
                    <li key={item.card.info.id} className="menuItem">
                      <div className="itemHeader">
                        <h4>{item.card.info.name}</h4>
                        <p className="price">Rs.{item.card.info.price / 100}</p>
                      </div>
                      <p className="description">
                        {item.card.info.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </React.Fragment>
            );
          })
        ) : (
          <p>No menu items available for this restaurant.</p>
        )}
      </div>
    </div>
  );
};

export default RestaurantMenu;
