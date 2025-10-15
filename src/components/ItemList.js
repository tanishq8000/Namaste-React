import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/reduxFiles/cartSlice";
import { useSelector } from "react-redux";

const ItemList = ({ filteredItems }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item.card.info.id));
  };

  return (
    <ul className="list-none p-0 m-0 text-left">
      {filteredItems.map((item) => {
        const cartItem = cartItems.find(
          (cartItem) => cartItem.card.info.id === item.card.info.id
        );

        return (
          <li
            data-testid="foodItem"
            key={item.card.info.id}
            className="flex justify-between items-center border-b border-gray-100 p-5 last:border-b-0"
          >
            {/* Left side: name and description */}
            <div className="flex flex-col">
              <h4 className="text-xl font-semibold text-gray-800">
                {item.card.info.name}
              </h4>
              <p className="text-sm text-gray-500 leading-normal">
                {item.card.info.description}
              </p>
            </div>

            {/* Right side: price and button */}
            <div className="flex flex-col items-end">
              <p className="text-lg font-semibold text-gray-700">
                Rs.{" "}
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </p>

              {/* Use `cartItem` directly to check for existence and get quantity */}
              {cartItem ? (
                <div className="flex items-center space-x-2 border border-gray-300 rounded-md mt-2">
                  <button
                    onClick={() => handleRemoveItem(item)}
                    className="px-2"
                  >
                    -
                  </button>
                  <span>{cartItem.quantity}</span>
                  <button onClick={() => handleAddItem(item)} className="px-2">
                    +
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => handleAddItem(item)}
                  className="ml-4 px-3 py-1 bg-gray-100 text-gray-800 border border-gray-300 rounded-lg text-sm transition-all duration-200 hover:bg-gray-200 hover:shadow-md mt-2"
                >
                  Add
                </button>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ItemList;
