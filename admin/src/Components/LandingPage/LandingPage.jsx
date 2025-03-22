import React from "react";
import { Link } from "react-router-dom";
import { FaPlus, FaList, FaClipboardList } from "react-icons/fa";

const AdminLandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-red-600 text-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold">Pamotra Admin</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 flex-grow">
        {/* Welcome Section */}
        <section className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Welcome to Pamotra Admin Panel
          </h2>
          <p className="text-gray-600">
            Manage your food items, monitor orders, and keep track of deliveries—all in one place.
          </p>
        </section>

        {/* Dashboard Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Add Items Card */}
          <Link to="/add" className="block">
            <div className="bg-white rounded-lg shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="flex items-center justify-center mb-4">
                <FaPlus size={36} className="text-green-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">
                Add Food Item
              </h3>
              <p className="text-gray-600 text-center">
                Easily add new items to your menu.
              </p>
            </div>
          </Link>

          {/* List Items Card */}
          <Link to="/list" className="block">
            <div className="bg-white rounded-lg shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="flex items-center justify-center mb-4">
                <FaList size={36} className="text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">
                List Items
              </h3>
              <p className="text-gray-600 text-center">
                View and manage your existing items.
              </p>
            </div>
          </Link>

          {/* Orders Items Card */}
          <Link to="/orders" className="block">
            <div className="bg-white rounded-lg shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="flex items-center justify-center mb-4">
                <FaClipboardList size={36} className="text-yellow-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">
                Orders Items
              </h3>
              <p className="text-gray-600 text-center">
                Check all customer orders at a glance.
              </p>
            </div>
          </Link>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Pamotra Admin. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AdminLandingPage;
