import React from "react";

const Shimmer = () => {
  return (
    // shimmer-container: Centered, flexible grid-like layout for cards
    // The mt-[180px] pushes it down below your header + search/filter bar
    // You might need to adjust this mt- value based on your actual Header and Body filter/search bar height.
    <div className="container mx-auto flex flex-wrap justify-center gap-6 p-4 mt-[180px]">
      {Array(12) // Increased to 12 to match the typical 3 rows of 4 cards
        .fill("")
        .map((_, index) => (
          // shimmer-card: Mimics the restaurant card structure
          <div
            key={index}
            className="h-[380px] bg-white border border-gray-300 m-[10px] p-[5px] box-border flex flex-col w-[300px]" // Added shadow and adjusted padding/height
          >
            {/* shimmer-img: Larger image placeholder */}
            <div className="shimmer-animation w-full h-3/5 rounded-md mb-3" />{" "}
            {/* Adjusted height and added border-radius */}
            {/* Shimmer lines for Restaurant Name */}
            <div className="shimmer-animation h-4 w-3/4 mb-2" />
            {/* Shimmer lines for Cuisine */}
            <div className="shimmer-animation h-3 w-1/2 mb-3" />
            {/* Shimmer lines for Rating & Delivery */}
            <div className="shimmer-animation h-3 w-2/3 mb-2" />
            <div className="shimmer-animation h-3 w-1/3 mb-4" />{" "}
            {/* More space before offer */}
            {/* shimmer-offer: Placed at the very bottom */}
            <div className="shimmer-animation h-6 w-full rounded-md" />{" "}
            {/* Full width, specific height */}
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
