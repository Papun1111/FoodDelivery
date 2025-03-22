import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { assets } from "../../assets/assets";

const Orders = ({ url }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    try {
      const response = await axios.get(`${url}/api/order/list`);
      if (response.data.success) {
        setOrders(response.data.data);
      } else {
        toast.error("Error fetching orders!");
      }
    } catch (error) {
      toast.error("Error fetching orders!");
    }
  };

  const statusHandler = async (e, orderId) => {
    try {
      const response = await axios.post(`${url}/api/order/status`, {
        orderId,
        status: e.target.value,
      });
      if (response.data.success) {
        await fetchAllOrders();
      } else {
        toast.error("Error updating status!");
      }
    } catch (error) {
      toast.error("Error updating status!");
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h3 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Order Page
      </h3>
      <div className="grid grid-cols-1 gap-6">
        {orders.map((order, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-4 flex flex-col md:flex-row items-center gap-4 hover:shadow-xl transform hover:scale-105 transition duration-300"
          >
            {/* Order Icon */}
            <div className="flex-shrink-0">
              <img
                src={assets.parcel_icon}
                alt="Parcel Icon"
                className="w-16 h-16"
              />
            </div>
            {/* Order Details */}
            <div className="flex-grow">
              <p className="font-medium text-gray-800">
                {order.items.map((item, idx) =>
                  idx === order.items.length - 1
                    ? `${item.name} x ${item.quantity}`
                    : `${item.name} x ${item.quantity}, `
                )}
              </p>
              <p className="text-gray-600">
                {order.address.firstname} {order.address.lastname}
              </p>
              <p className="text-gray-600">
                {order.address.street}, {order.address.city},{" "}
                {order.address.state}
              </p>
              <p className="text-gray-600">{order.address.phone}</p>
            </div>
            {/* Order Summary & Status */}
            <div className="flex flex-col items-end">
              <p className="text-gray-800 font-bold">
                ${parseFloat(order.amount).toFixed(2)}
              </p>
              <p className="text-gray-600">Items: {order.items.length}</p>
              <select
                onChange={(e) => statusHandler(e, order._id)}
                value={order.status}
                className="mt-2 px-2 py-1 border border-gray-300 rounded focus:outline-none focus:border-red-500 transition duration-300"
              >
                <option value="Food Processing">Food Processing</option>
                <option value="Out for delivery">Out for delivery</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
