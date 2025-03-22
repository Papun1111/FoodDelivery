import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaPlus, FaList, FaShoppingBag, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(prev => !prev);
  };

  return (
    <div
      className={`bg-gray-800 text-white min-h-screen p-4 transition-all duration-300 ${
        isCollapsed ? "w-20" : "w-64"
      }`}
    >
      {/* Collapse Toggle Button */}
      <div className="flex justify-end">
        <button
          onClick={toggleCollapse}
          className="text-white focus:outline-none"
        >
          {isCollapsed ? <FaChevronRight size={20} /> : <FaChevronLeft size={20} />}
        </button>
      </div>

      {/* Navigation Options */}
      <div className="mt-4 space-y-4">
        <NavLink
          to="/add"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded transition duration-300 hover:bg-gray-700 ${
              isActive ? "bg-gray-700" : ""
            }`
          }
        >
          <FaPlus size={20} className="text-green-400" />
          {!isCollapsed && <p className="text-lg font-medium">Add Items</p>}
        </NavLink>
        <NavLink
          to="/list"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded transition duration-300 hover:bg-gray-700 ${
              isActive ? "bg-gray-700" : ""
            }`
          }
        >
          <FaList size={20} className="text-blue-400" />
          {!isCollapsed && <p className="text-lg font-medium">List Items</p>}
        </NavLink>
        <NavLink
          to="/orders"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded transition duration-300 hover:bg-gray-700 ${
              isActive ? "bg-gray-700" : ""
            }`
          }
        >
          <FaShoppingBag size={20} className="text-yellow-400" />
          {!isCollapsed && <p className="text-lg font-medium">Orders Items</p>}
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
