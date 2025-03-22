import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { FaUpload } from "react-icons/fa";

const Add = ({ url }) => {
  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", data.price);
    formData.append("category", data.category);
    formData.append("image", image);

    try {
      const response = await axios.post(`${url}/api/food/add`, formData);
      if (response.data.success) {
        setData({
          name: "",
          description: "",
          price: "",
          category: "Salad",
        });
        setImage(null);
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Error occurred while adding product");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <form
        onSubmit={onSubmitHandler}
        className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg space-y-6"
      >
        {/* Image Upload Section */}
        <div className="flex flex-col items-center space-y-2">
          <p className="text-gray-700 font-medium">Upload Image</p>
          <label
            htmlFor="image"
            className="cursor-pointer border border-dashed border-gray-300 p-4 rounded-lg hover:border-red-500 transition duration-300"
          >
            {image ? (
              <img
                src={URL.createObjectURL(image)}
                alt="Uploaded"
                className="w-48 h-48 object-cover rounded"
              />
            ) : (
              <div className="flex flex-col items-center justify-center text-gray-400">
                <FaUpload size={48} />
                <span>Click to upload</span>
              </div>
            )}
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            hidden
            required
          />
        </div>

        {/* Product Name */}
        <div className="flex flex-col">
          <p className="text-gray-700 font-medium">Product Name</p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            type="text"
            name="name"
            placeholder="Type here"
            required
            className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-red-500 transition duration-300"
          />
        </div>

        {/* Product Description */}
        <div className="flex flex-col">
          <p className="text-gray-700 font-medium">Product Description</p>
          <textarea
            name="description"
            onChange={onChangeHandler}
            value={data.description}
            rows="6"
            placeholder="Write content here"
            required
            className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-red-500 transition duration-300"
          ></textarea>
        </div>

        {/* Category and Price */}
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Category */}
          <div className="flex flex-col flex-1">
            <p className="text-gray-700 font-medium">Product Category</p>
            <select
              name="category"
              onChange={onChangeHandler}
              value={data.category}
              className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-red-500 transition duration-300"
            >
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noddles">Noddles</option>
            </select>
          </div>
          {/* Price */}
          <div className="flex flex-col flex-1">
            <p className="text-gray-700 font-medium">Product Price</p>
            <input
              type="number"
              onChange={onChangeHandler}
              name="price"
              value={data.price}
              placeholder="Enter price"
              required
              className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-red-500 transition duration-300"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500 transition duration-300 transform hover:scale-105"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default Add;
