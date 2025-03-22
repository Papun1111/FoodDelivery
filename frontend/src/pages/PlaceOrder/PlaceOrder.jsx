import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaCreditCard } from "react-icons/fa";

const PlaceOrder = () => {
  const { getTotalCartAmount, token, food_list, cartItems, url } = useContext(StoreContext);
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });
  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const placeOrder = async (event) => {
    event.preventDefault();
    let orderItems = [];
    food_list.forEach((item) => {
      if (cartItems[item._id] > 0) {
        // Clone the item and add the quantity property.
        let itemInfo = { ...item, quantity: cartItems[item._id] };
        orderItems.push(itemInfo);
      }
    });
    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 2,
    };
    let response = await axios.post(url + "/api/order/place", orderData, { headers: { token } });
    if (response.data.success) {
      const { session_url } = response.data;
      window.location.replace(session_url);
    } else {
      alert("Error");
    }
  };

  useEffect(() => {
    if (!token) {
      navigate("/cart");
    } else if (getTotalCartAmount() === 0) {
      navigate("/cart");
    }
  }, [token, getTotalCartAmount, navigate]);

  return (
    <form onSubmit={placeOrder} className="max-w-7xl mx-auto p-6 bg-gray-50 rounded-lg shadow-lg flex flex-col md:flex-row gap-8">
      {/* Delivery Information Section */}
      <div className="w-full md:w-2/3">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Delivery Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            required
            type="text"
            name="firstname"
            onChange={onChangeHandler}
            value={data.firstname}
            placeholder="First Name"
            className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-red-500 transition duration-300"
          />
          <input
            required
            type="text"
            name="lastname"
            onChange={onChangeHandler}
            value={data.lastname}
            placeholder="Last Name"
            className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-red-500 transition duration-300"
          />
          <input
            required
            type="email"
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            placeholder="Email Address"
            className="md:col-span-2 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-red-500 transition duration-300"
          />
          <input
            type="text"
            name="street"
            onChange={onChangeHandler}
            value={data.street}
            placeholder="Street"
            className="md:col-span-2 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-red-500 transition duration-300"
          />
          <input
            required
            type="text"
            name="city"
            onChange={onChangeHandler}
            value={data.city}
            placeholder="City"
            className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-red-500 transition duration-300"
          />
          <input
            required
            type="text"
            name="state"
            onChange={onChangeHandler}
            value={data.state}
            placeholder="State"
            className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-red-500 transition duration-300"
          />
          <input
            required
            type="text"
            name="zipcode"
            onChange={onChangeHandler}
            value={data.zipcode}
            placeholder="ZipCode"
            className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-red-500 transition duration-300"
          />
          <input
            required
            type="text"
            name="country"
            onChange={onChangeHandler}
            value={data.country}
            placeholder="Country"
            className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-red-500 transition duration-300"
          />
          <input
            required
            type="text"
            name="phone"
            onChange={onChangeHandler}
            value={data.phone}
            placeholder="Phone"
            className="md:col-span-2 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-red-500 transition duration-300"
          />
        </div>
      </div>
      {/* Cart Total and Promo Code Section */}
      <div className="w-full md:w-1/3 space-y-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Cart Total</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal</span>
              <span className="text-gray-800 font-semibold">${getTotalCartAmount().toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Delivery Fee</span>
              <span className="text-gray-800 font-semibold">${getTotalCartAmount() === 0 ? 0 : 2}</span>
            </div>
            <hr className="my-2 border-gray-300" />
            <div className="flex justify-between">
              <span className="text-gray-600 font-bold">Total</span>
              <span className="text-gray-800 font-bold">
                ${getTotalCartAmount() === 0 ? 0 : (getTotalCartAmount() + 2).toFixed(2)}
              </span>
            </div>
          </div>
          <button
            type="submit"
            className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
          >
            <FaCreditCard />
            Proceed to Payment
          </button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Promo Code</h2>
          <div className="flex">
            <input
              type="text"
              placeholder="Enter your code"
              className="w-full px-4 py-2 border border-gray-300 rounded-l focus:outline-none focus:border-red-500 transition duration-300"
            />
            <button
              type="button"
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-r transition duration-300 transform hover:scale-105"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
