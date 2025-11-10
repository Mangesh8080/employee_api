import React, { useState } from "react";
import Menu from "../Components/Menu";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setEmployee((old) => ({ ...old, [name]: value }));
  };

  const registerEmployee = (e) => {
    e.preventDefault();
    axios
      .post("https://employeeapi-tzw2.onrender.com/register", {
        name: employee.name,
        email: employee.email,
        password: employee.password,
      })
      .then((response) => {
        if (response.data) {
          alert("Registered Successfully!");
          navigate("/Login");
        }
      })
      .catch((error) => {
        alert("User already exists or server error.");
        console.error(error);
      });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Menu />

      <main className="grow flex items-center justify-center px-4 mt-10">
        <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold text-center text-indigo-600 mb-6">
            Register
          </h2>

          <form className="space-y-4" onSubmit={registerEmployee}>
            <div>
              <label className="block text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={employee.name}
                onChange={inputHandler}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={employee.email}
                onChange={inputHandler}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={employee.password}
                onChange={inputHandler}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
            >
              Register
            </button>
          </form>

          <p className="text-center text-gray-600 mt-4">
            Already have an account?{" "}
            <Link to="/Login" className="text-indigo-600 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </main>

      <footer className="text-center py-4 text-gray-500 text-sm mt-auto">
        © {new Date().getFullYear()} Employee Management System
      </footer>
    </div>
  );
}

export default Register;
