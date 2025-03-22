import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import { assets } from "../../assets/assets";

const MyOrders = () => {
  const { url, token } = useContext(StoreContext);
  const [data, setData] = useState([]);

  const fetchOrders = async () => {
    try {
      const response = await axios.post(
        url + "/api/order/userorders",
        {},
        { headers: { token } }
      );
      setData(response.data.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        My Orders
      </h2>
      <div className="max-w-7xl mx-auto grid gap-6">
        {data.map((order, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transform hover:scale-105 transition-all duration-300 delay-75"
          >
            <div className="flex items-center mb-4">
              <img
                src={assets.parcel_icon}
                alt="Parcel Icon"
                className="w-12 h-12 mr-4"
              />
              <p className="text-gray-700">
                {order.items.map((item, idx) =>
                  idx === order.items.length - 1
                    ? `${item.name} x ${item.quantity}`
                    : `${item.name} x ${item.quantity}, `
                )}
              </p>
            </div>
            <div className="flex justify-between items-center mb-2">
              <p className="text-lg font-semibold text-gray-800">
                ${order.amount.toFixed(2)}
              </p>
              <p className="text-gray-600">Items: {order.items.length}</p>
            </div>
            <div className="flex justify-between items-center mb-4">
              <p className="flex items-center text-gray-700">
                <span className="mr-2">&#x25cf;</span>
                <b>{order.status}</b>
              </p>
              <button
                onClick={fetchOrders}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition duration-300 transform hover:scale-105"
              >
                Track Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
