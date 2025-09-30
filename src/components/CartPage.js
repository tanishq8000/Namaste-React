import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/reduxFiles/cartSlice";

const CartPage = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-15 p-5">
      <h1 className="text-4xl font-bold m-10 mb-0">Cart</h1>
      <button
        className="px-3 py-1 mt-4 bg-red-500 text-white border border-gray-300 rounded-lg text-sm transition-all duration-200 hover:bg-red-600 hover:border-gray-400"
        onClick={handleClearCart}
      >
        Clear
      </button>

      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center p-8 bg-gray-100 rounded-lg shadow-md mt-10">
          <span
            role="img"
            aria-label="shopping-cart-emoji"
            className="text-5xl mb-4"
          >
            🛒
          </span>
          <h2 className="text-2xl font-semibold text-gray-700">
            Your Cart is Empty
          </h2>
          <p className="text-gray-500 mt-2">
            Looks like you haven't added anything to your cart yet.
          </p>
        </div>
      ) : (
        <div className="w-8/12 m-auto">
          <ItemList filteredItems={cartItems} />
        </div>
      )}
    </div>
  );
};

export default CartPage;
