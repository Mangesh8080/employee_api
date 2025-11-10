import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Left side - Logo or Title */}
        <h1 className="text-2xl font-bold text-indigo-600">
          Employee Management
        </h1>

        {/* Right side - Navigation Links */}
        <div className="space-x-6">
          <Link
            to="/Login"
            className="text-gray-700 hover:text-indigo-600 font-medium transition"
          >
            Login
          </Link>

          <Link
            to="/Register"
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Menu;
