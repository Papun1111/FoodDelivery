import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import {
  FaBars,
  FaTimes,
  FaSearch,
  FaShoppingBasket,
  FaUserCircle,
  FaShoppingBag,
  FaSignOutAlt,
} from "react-icons/fa";

const Navbar = ({ setShowLogin }) => {
  const [activeLink, setActiveLink] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  // Menu items without Mobile App option
  const menuItems = [
    { id: "home", label: "Home", to: "/" },
    { id: "menu", label: "Menu", to: "#explore-menu" },
    { id: "contact-us", label: "Contact Us", to: "#footer" },
  ];

  const handleMenuClick = (id) => {
    setActiveLink(id);
    setIsMobileMenuOpen(false);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchActive(false);
      setSearchQuery("");
    }
  };

  return (
    <nav className="bg-white fixed w-full z-50 shadow-lg">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex-1">
          <Link
            to="/"
            onClick={() => handleMenuClick("home")}
            className="text-2xl font-bold text-red-600 hover:text-red-700 transition duration-300"
          >
            PaMoTra
          </Link>
        </div>

        {/* Center: Nav Links (Desktop) */}
        <div className="hidden md:flex flex-1 justify-center space-x-6">
          {menuItems.map((item) =>
            item.to.startsWith("#") ? (
              <a
                key={item.id}
                href={item.to}
                onClick={() => setActiveLink(item.id)}
                className={`text-gray-700 hover:text-red-600 transition duration-300 ${
                  activeLink === item.id ? "font-semibold" : "font-normal"
                }`}
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.id}
                to={item.to}
                onClick={() => setActiveLink(item.id)}
                className={`text-gray-700 hover:text-red-600 transition duration-300 ${
                  activeLink === item.id ? "font-semibold" : "font-normal"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </div>

        {/* Right: Icons & Auth (Desktop) */}
        <div className="hidden md:flex flex-1 justify-end items-center space-x-4">
          {/* Search Functionality */}
          {searchActive ? (
            <form
              onSubmit={handleSearchSubmit}
              className="relative flex items-center"
            >
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="px-2 py-1 border border-gray-300 rounded focus:outline-none focus:border-red-500 transition duration-300"
                autoFocus
              />
              <button
                type="submit"
                className="ml-2 text-red-500 hover:text-red-600 transition duration-300"
              >
                Go
              </button>
              <button
                type="button"
                onClick={() => setSearchActive(false)}
                className="absolute right-0 pr-8 text-gray-500 hover:text-red-600 transition duration-300"
              >
                <FaTimes size={16} />
              </button>
            </form>
          ) : (
            <FaSearch
              size={20}
              onClick={() => setSearchActive(true)}
              className="text-gray-700 hover:text-red-600 cursor-pointer transition duration-300"
            />
          )}
          <div className="relative">
            <Link to="/cart">
              <FaShoppingBasket
                size={20}
                className="text-gray-700 hover:text-red-600 cursor-pointer transition duration-300"
              />
            </Link>
            {getTotalCartAmount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {getTotalCartAmount}
              </span>
            )}
          </div>
          {!token ? (
            <button
              onClick={() => setShowLogin(true)}
              className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-500 transition duration-300 font-semibold"
            >
              Sign In
            </button>
          ) : (
            <div className="relative group">
              <FaUserCircle
                size={24}
                className="text-gray-700 cursor-pointer hover:text-red-600 transition duration-300"
              />
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded transition-all duration-300 opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100">
                <ul className="py-2">
                  <li
                    onClick={() => {
                      navigate("/myorders");
                      setActiveLink("orders");
                    }}
                    className="px-4 py-2 flex items-center cursor-pointer text-gray-700 hover:bg-red-50 transition duration-300"
                  >
                    <FaShoppingBag className="mr-2" />
                    Orders
                  </li>
                  <li
                    onClick={logout}
                    className="px-4 py-2 flex items-center cursor-pointer text-gray-700 hover:bg-red-50 transition duration-300"
                  >
                    <FaSignOutAlt className="mr-2" />
                    Logout
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex-1 flex justify-end">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-700 hover:text-red-600 focus:outline-none transition duration-300"
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg transition-all duration-300">
          <div className="px-4 py-4 flex flex-col space-y-2">
            {menuItems.map((item) =>
              item.to.startsWith("#") ? (
                <a
                  key={item.id}
                  href={item.to}
                  onClick={() => handleMenuClick(item.id)}
                  className={`text-gray-700 hover:text-red-600 transition duration-300 ${
                    activeLink === item.id ? "font-semibold" : "font-normal"
                  }`}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.id}
                  to={item.to}
                  onClick={() => handleMenuClick(item.id)}
                  className={`text-gray-700 hover:text-red-600 transition duration-300 ${
                    activeLink === item.id ? "font-semibold" : "font-normal"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}

            {/* Mobile Icons */}
            <div className="flex items-center space-x-4 pt-3 border-t border-gray-200">
              <FaSearch
                size={20}
                onClick={() => setSearchActive(true)}
                className="text-gray-700 hover:text-red-600 cursor-pointer transition duration-300"
              />
              <div className="relative">
                <Link to="/cart">
                  <FaShoppingBasket
                    size={20}
                    className="text-gray-700 hover:text-red-600 transition duration-300"
                  />
                </Link>
                {getTotalCartAmount > 0 && (
                  <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {getTotalCartAmount}
                  </span>
                )}
              </div>
              {!token ? (
                <button
                  onClick={() => {
                    setShowLogin(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-500 transition duration-300 font-semibold"
                >
                  Sign In
                </button>
              ) : (
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center text-gray-700 hover:text-red-600 transition duration-300"
                  >
                    <FaUserCircle size={24} />
                  </button>
                  <div className="mt-2 transition-all duration-300">
                    <div
                      onClick={() => {
                        navigate("/myorders");
                        setActiveLink("orders");
                        setIsMobileMenuOpen(false);
                      }}
                      className="flex items-center px-4 py-2 text-gray-700 hover:bg-red-50 transition duration-300 cursor-pointer"
                    >
                      <FaShoppingBag className="mr-2" />
                      Orders
                    </div>
                    <div
                      onClick={() => {
                        logout();
                        setIsMobileMenuOpen(false);
                      }}
                      className="flex items-center px-4 py-2 text-gray-700 hover:bg-red-50 transition duration-300 cursor-pointer"
                    >
                      <FaSignOutAlt className="mr-2" />
                      Logout
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
