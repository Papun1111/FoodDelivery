import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { FaTrash, FaTimes } from "react-icons/fa";

const List = ({ url }) => {
  const [list, setList] = useState([]);
  const [selectedFood, setSelectedFood] = useState(null);

  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`);
      if (response.data.success) {
        setList(response.data.data);
      } else {
        toast.error("Error fetching foods list");
      }
    } catch (error) {
      toast.error("An error occurred while fetching the list");
    }
  };

  const removeFood = async (foodId) => {
    try {
      const response = await axios.post(`${url}/api/food/remove/${foodId}`);
      await fetchList();
      if (response.data.success) {
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("An error occurred while removing the food item");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        All Foods List
      </h2>

      {/* Desktop Table View */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full bg-white shadow rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-3 px-6 text-left">Image</th>
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Category</th>
              <th className="py-3 px-6 text-left">Price</th>
              <th className="py-3 px-6 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {list.map((item, index) => (
              <tr
                key={index}
                className="border-b hover:bg-gray-50 transition duration-300"
              >
                <td className="py-4 px-6">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>
                <td className="py-4 px-6 text-gray-700">{item.name}</td>
                <td className="py-4 px-6 text-gray-700">{item.category}</td>
                <td className="py-4 px-6 text-gray-700">
                  ${parseFloat(item.price).toFixed(2)}
                </td>
                <td className="py-4 px-6 text-center">
                  <button
                    onClick={() => removeFood(item._id)}
                    className="text-red-500 hover:text-red-700 transition duration-300 transform hover:scale-110"
                  >
                    <FaTrash size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="block md:hidden space-y-4">
        {list.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow p-4 flex items-center justify-between"
          >
            <div className="flex items-center">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded"
              />
              <div className="ml-4">
                <p className="font-semibold text-gray-800">{item.name}</p>
                <p className="text-gray-600">{item.category}</p>
                <p className="text-gray-800 font-bold">
                  ${parseFloat(item.price).toFixed(2)}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <button
                onClick={() => removeFood(item._id)}
                className="text-red-500 hover:text-red-700 transition duration-300 transform hover:scale-110"
              >
                <FaTrash size={18} />
              </button>
              <button
                onClick={() => setSelectedFood(item)}
                className="mt-2 text-blue-500 hover:text-blue-700 transition duration-300"
              >
                Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Pop-up for Mobile Details */}
      {selectedFood && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-md relative transform transition duration-300">
            <button
              onClick={() => setSelectedFood(null)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 transition duration-300"
            >
              <FaTimes size={20} />
            </button>
            <img
              src={selectedFood.image}
              alt={selectedFood.name}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h3 className="text-xl font-bold text-gray-800">
              {selectedFood.name}
            </h3>
            <p className="text-gray-600">{selectedFood.category}</p>
            <p className="text-gray-800 font-bold">
              ${parseFloat(selectedFood.price).toFixed(2)}
            </p>
            <button
              onClick={() => {
                removeFood(selectedFood._id);
                setSelectedFood(null);
              }}
              className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition duration-300 transform hover:scale-105"
            >
              Remove
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default List;
