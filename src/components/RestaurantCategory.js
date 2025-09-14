import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, veg, showItems, setShowIndex }) => {
  const filteredItems = veg
    ? data.itemCards.filter(
        (item) => item.card.info.isVeg === 1 // 1 means vegetarian in the API
      )
    : data.itemCards;

  const handleClick = () => {
    setShowIndex();
  };

  return (
    // Accordian Header
    <div className="p-0 bg-gray-50 shadow-lg mb-5 mt-3">
      <div
        className="flex justify-between mb-5 border-b border-gray-400 p-3 cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold text-lg ml-4">
          {data.title} ({filteredItems.length})
        </span>
        <span className="text-xl">🔽</span>
      </div>
      {showItems && <ItemList filteredItems={filteredItems} />}
    </div>
  );
};

export default RestaurantCategory;
