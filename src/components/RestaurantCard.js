import { RES_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData?.data;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="Logo Of Restaurant"
        src={RES_URL + cloudinaryImageId}
      />
      <h3 className="res-name">{name}</h3>
      <h5 className="res-type">{cuisines.join(", ")}</h5>
      <h5 className="res-rating">{avgRating}⭐</h5>
      <h5 className="cost">₹{costForTwo / 100} FOR TWO</h5>
      <h5 className="deltime">
        Estimated Delivery Time - {deliveryTime} minutes
      </h5>
      <div className="offer">Flat 10% off on pre-bookings</div>
    </div>
  );
};

export default RestaurantCard;
