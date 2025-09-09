import { RES_URL } from "../utils/constant";

const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;

  return (
    <div className="w-85 h-93 flex flex-col justify-start border border-black m-3 pb-2 hover:-translate-y-[5px] hover:scale-[1.02] hover:shadow-[0_8px_16px_rgba(0,0,0,0.2)] -z-10">
      <img
        className="w-[100%] h-50 object-cover"
        alt={`Logo of ${name}`}
        src={RES_URL + cloudinaryImageId}
      />
      <h3
        className="pl-2 text-lg mt-2 font-medium text-gray-950 truncate"
        title={name}
      >
        {name}
      </h3>
      <h5 className="text-sm pl-2">
        {cuisines?.slice(0, 3).join(", ") || "Various cuisines"}
      </h5>
      <h5 className="pl-2">{avgRating ? `${avgRating}⭐` : "No rating"}</h5>
      <h5 className="pl-2">{costForTwo}</h5>
      <h5 className="pl-2">
        Estimated Delivery Time - {sla?.deliveryTime || "N/A"} minutes
      </h5>
      <div className="mt-auto ml-4 text-center w-[90%] bg-green-500 rounded-2xl border border-black pl-2">
        Flat 10% off on pre-bookings
      </div>
    </div>
  );
};

// Higher Order Compnent --> takes a comp and returns with some enhancement without changing the code of compo which it takes
export const withTopRatedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute p-1 m-1 bg-orange-500 text-white z-10">
          Top Rated
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
