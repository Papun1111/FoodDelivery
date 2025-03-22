import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left">Item</th>
                <th className="px-4 py-2 text-left">Title</th>
                <th className="px-4 py-2 text-left">Price</th>
                <th className="px-4 py-2 text-left">Quantity</th>
                <th className="px-4 py-2 text-left">Total</th>
                <th className="px-4 py-2 text-left">Remove</th>
              </tr>
            </thead>
            <tbody>
              {food_list.map((item, index) => {
                if (cartItems[item._id] > 0) {
                  return (
                    <tr
                      key={index}
                      className="border-b hover:bg-gray-50 transition duration-300"
                    >
                      <td className="px-4 py-2">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded"
                        />
                      </td>
                      <td className="px-4 py-2">{item.name}</td>
                      <td className="px-4 py-2">${item.price}</td>
                      <td className="px-4 py-2">{cartItems[item._id]}</td>
                      <td className="px-4 py-2">
                        ${(item.price * cartItems[item._id]).toFixed(2)}
                      </td>
                      <td className="px-4 py-2">
                        <button
                          onClick={() => removeFromCart(item._id)}
                          className="text-red-500 hover:text-red-600 transition duration-300 transform hover:rotate-12"
                        >
                          <FaTrash size={18} />
                        </button>
                      </td>
                    </tr>
                  );
                }
                return null;
              })}
            </tbody>
          </table>
        </div>
        <div className="mt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          {/* Cart Total Section */}
          <div className="w-full md:w-1/2">
            <h2 className="text-xl font-bold text-gray-800">Cart Total</h2>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="text-gray-800 font-semibold">
                  ${getTotalCartAmount().toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Delivery Fee</span>
                <span className="text-gray-800 font-semibold">
                  ${getTotalCartAmount() === 0 ? 0 : 2}
                </span>
              </div>
              <div className="flex justify-between border-t pt-2">
                <span className="text-gray-600 font-bold">Total</span>
                <span className="text-gray-800 font-bold">
                  $
                  {getTotalCartAmount() === 0
                    ? 0
                    : (getTotalCartAmount() + 2).toFixed(2)}
                </span>
              </div>
            </div>
            <button
              onClick={() => navigate("/order")}
              className="mt-4 w-full md:w-auto bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded transition duration-300 transform hover:scale-105 delay-75"
            >
              Proceed to Checkout
            </button>
          </div>
          {/* Promo Code Section */}
          <div className="w-full md:w-1/3">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Promo Code</h2>
            <div className="flex">
              <input
                type="text"
                placeholder="Enter your code"
                className="w-full px-4 py-2 border border-gray-300 rounded-l focus:outline-none transition duration-300 focus:border-red-500"
              />
              <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-r transition duration-300 transform hover:scale-105">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
