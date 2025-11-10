import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams, } from 'react-router-dom'

function Employeeprofile() {
  const {id}=useParams();
  const navigate=useNavigate();
  const [employee, setEmployee] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
  });
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setEmployee((old) => ({ ...old, [name]: value }));
  };
  
useEffect(()=>{
  axios.get(`https://employeeapi-tzw2.onrender.com/getById?id=${id}`)
  .then((response)=>{setEmployee(response.data)})
  .catch(()=>{alert("Error fetching employee data.");})
},[id])

  const updateEmployee = (e) => {
    e.preventDefault();
    axios
      .put("https://employeeapi-tzw2.onrender.com/update", {
        id: employee.id,
        name: employee.name,
        email: employee.email,
        password: employee.password
      })
      .then((response) => {
        if (response.data) {
          alert("updated Successfully!");
            navigate("/dashboard");
        }
      })
      .catch((error) => {
        alert("User already exists or server error.");
        console.error(error);
      });
  };
  return (
    <div>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <div>
          <div>employee</div>
          <div>
            <Link to={"/Login"}>logout</Link>
          </div>
        </div>



        <main className="grow flex items-center justify-center px-4 mt-10">
          <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
            <h2 className="text-2xl font-bold text-center text-indigo-600 mb-6">
              Update
            </h2>

            <form className="space-y-4" onSubmit={updateEmployee}>
              <div>
                <label className="block text-gray-700 mb-1">ID</label>
                <input
                  type="number"
                  name="id"
                  placeholder="Enter your id"
                  value={employee.id}
                  onChange={inputHandler}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                  readOnly
                />
              </div>

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
                update
              </button>
            </form>


          </div>
        </main>

        <footer className="text-center py-4 text-gray-500 text-sm mt-auto">
          © {new Date().getFullYear()} Employee Management System
        </footer>

      </div>


    </div>
  )
}

export default Employeeprofile
