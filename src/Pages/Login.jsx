import React, { useState } from "react";
import Menu from "../Components/Menu";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [employee, setEmployee] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setEmployee((old) => ({ ...old, [name]: value }));
  };

  const loginEmployee = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8080/login", {
        email: employee.email,
        password: employee.password,
      })
      .then((response) => {
        if (response.data) {
          alert("Login successful!");
          setEmployee({ email: "", password: "" });
          navigate("/Dashboard");
        } else {
          alert("Invalid email or password.");
        }
      })
      .catch((error) => {
        alert("Login failed. Please check your credentials or try again later.");
        console.error(error);
      });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Menu />

      <main className="grow flex items-center justify-center px-4 mt-10">
        <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold text-center text-indigo-600 mb-6">
            Login
          </h2>

          <form onSubmit={loginEmployee} className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={employee.email}
                onChange={inputHandler}
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
            >
              Login
            </button>
          </form>

          <p className="text-center text-gray-600 mt-4">
            Don’t have an account?{" "}
            <a href="/Register" className="text-indigo-600 hover:underline">
              Register
            </a>
          </p>
        </div>
      </main>

      <footer className="text-center py-4 text-gray-500 text-sm mt-auto">
        © {new Date().getFullYear()} Employee Management System
      </footer>
    </div>
  );
}

export default Login;
