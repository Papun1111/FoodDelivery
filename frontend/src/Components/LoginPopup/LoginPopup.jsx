import React, { useContext, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import { FaTimes } from "react-icons/fa";

const LoginPopup = ({ setShowLogin }) => {
  const { url, setToken } = useContext(StoreContext);
  const [currState, setCurrState] = useState("Sign up");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const onLogin = async (event) => {
    event.preventDefault();
    let newUrl = url;
    if (currState === "Login") {
      newUrl += "/api/user/login";
    } else {
      newUrl += "/api/user/register";
    }

    const response = await axios.post(newUrl, data);
    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      setShowLogin(false);
    } else {
      alert(response.data.message);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-transparent backdrop-blur-lg transition-opacity duration-500 delay-150">
      <form
        onSubmit={onLogin}
        className="relative bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-md transform transition-all duration-500 scale-100"
      >
        <button
          type="button"
          onClick={() => setShowLogin(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition duration-300"
        >
          <FaTimes size={20} />
        </button>
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold text-gray-800">{currState}</h2>
        </div>
        <div className="space-y-4">
          {currState !== "Login" && (
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              onChange={onChangeHandler}
              value={data.name}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-red-500 transition duration-300"
            />
          )}
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={onChangeHandler}
            placeholder="Your Email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-red-500 transition duration-300"
          />
          <input
            type="password"
            name="password"
            onChange={onChangeHandler}
            placeholder="Enter Password"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-red-500 transition duration-300"
          />
          <button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded transition duration-300 transform hover:scale-105"
          >
            {currState === "Sign up" ? "Create Account" : "Login"}
          </button>
        </div>
        <div className="flex items-center mt-4">
          <input type="checkbox" required className="mr-2" />
          <p className="text-sm text-gray-600">
            By continuing, I agree to the terms of use & privacy policy.
          </p>
        </div>
        <div className="mt-4 text-center">
          {currState === "Login" ? (
            <p className="text-gray-600">
              Create a new account{" "}
              <span
                onClick={() => setCurrState("Sign up")}
                className="text-red-500 hover:underline cursor-pointer transition duration-300"
              >
                Click Here
              </span>
            </p>
          ) : (
            <p className="text-gray-600">
              Already have an account?{" "}
              <span
                onClick={() => setCurrState("Login")}
                className="text-red-500 hover:underline cursor-pointer transition duration-300"
              >
                Login Here
              </span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default LoginPopup;
