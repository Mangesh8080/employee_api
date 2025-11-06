import React from "react";
import Menu from "../Components/Menu";

function Welcome() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Navbar */}
      <Menu></Menu>

      {/* Add top margin so content doesn't overlap the navbar */}
      <main className="grow flex flex-col items-center justify-center text-center px-4 mt-20">


        <h2 className="text-3xl font-semibold text-gray-800 mb-2">
          Welcome to the Employee Management System
        </h2>
        <img
          src="/employee.jpg"
          alt="Welcome"
          className="w-full max-w-lg h-auto object-cover rounded-xl shadow-lg mb-6"
        />
        <p className="text-gray-600">
          Login or Register to get started managing your team efficiently.
        </p>
      </main>

      <footer className="text-center py-4 text-gray-500 text-sm">
        © {new Date().getFullYear()} Employee Management System
      </footer>
    </div>
  );
}

export default Welcome;
