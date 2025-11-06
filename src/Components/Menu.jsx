import React from "react";

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
          
          <a
            href="/Login"
            className="text-gray-700 hover:text-indigo-600 font-medium transition"
          >
            Login
          </a>
          <a
            href="/Register"
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
          >
            Register
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Menu;
