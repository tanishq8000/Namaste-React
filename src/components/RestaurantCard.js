import { RES_URL } from "../utils/constant";

const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;

  return (
    <div className="flex flex-col justify-start border border-black m-3 pb-2">
      <img
        className="w-full h-50"
        alt={`Logo of ${name}`}
        src={RES_URL + cloudinaryImageId}
      />
      <h3 className="pl-2">{name}</h3>
      <h5 className="res-type">
        {cuisines?.slice(0, 3).join(", ") || "Various cuisines"}
      </h5>
      <h5 className="res-rating">
        {avgRating ? `${avgRating}⭐` : "No rating"}
      </h5>
      <h5 className="cost">{costForTwo}</h5>
      <h5 className="deltime">
        Estimated Delivery Time - {sla?.deliveryTime || "N/A"} minutes
      </h5>
      <div className="offer">Flat 10% off on pre-bookings</div>
    </div>
  );
};

export default RestaurantCard;
