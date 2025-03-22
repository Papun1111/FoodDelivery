import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { FaPlus, FaMinus, FaStar } from "react-icons/fa";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="group bg-white rounded-lg shadow-lg overflow-hidden transition transform hover:scale-105">
      <div className="relative">
        <img src={image} alt={name} className="w-full h-48 object-cover" />
        {cartItems[id] ? (
          <div className="absolute bottom-2 left-2 bg-white bg-opacity-80 px-3 py-1 flex items-center rounded transition ease-in-out duration-300">
            <button
              onClick={() => removeFromCart(id)}
              className="text-red-500 hover:text-red-600 transition duration-300"
            >
              <FaMinus />
            </button>
            <span className="mx-2 text-gray-700 font-semibold">
              {cartItems[id]}
            </span>
            <button
              onClick={() => addToCart(id)}
              className="text-green-500 hover:text-green-600 transition duration-300"
            >
              <FaPlus />
            </button>
          </div>
        ) : (
          <button
            onClick={() => addToCart(id)}
            className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full transition duration-300"
          >
            <FaPlus />
          </button>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3
            className="text-lg font-semibold text-gray-800 transition duration-500 ease-in-out
                      group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-red-500 group-hover:to-yellow-500 group-hover:text-transparent"
          >
            {name}
          </h3>
          <div className="flex items-center">
            {[...Array(5)].map((_, idx) => (
              <FaStar key={idx} className="text-yellow-500 mr-1" />
            ))}
          </div>
        </div>
        <p className="text-gray-600 text-sm mt-2">{description}</p>
        <p className="text-gray-800 font-bold mt-4">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
