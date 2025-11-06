import React, { useEffect, useState } from "react";
import Menu from "../Components/Menu";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [employees, setEmployees] = useState([]);
  const navigate=useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8080/getAll")
      .then((response) => {
        console.log("Response:", response.data);
        setEmployees(response.data);
      })
      .catch(() => {
        alert("Something went wrong");
      });
  }, []);

  const deleteEmployee = (id) => {
    axios
      .delete(`http://localhost:8080/delete?id=${id}`)
      .then((response) => {
        if (response.data === true) {
          alert("Employee deleted successfully");
          const newData = employees.filter((emp) => emp.id !== id);
          setEmployees(newData);
        } else {
          alert("Failed to delete employee");
        }
      })
      .catch(() => {
        alert("Something went wrong");
      });
  };

  const showEmployee = (id) => {
    navigate(`/employee-profile/${id}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Menu />

      <div className="overflow-x-auto mt-10 mx-auto w-3/4">
        <table className="min-w-full border border-gray-300 bg-white rounded-lg shadow-md">
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="py-3 px-6 text-left">ID</th>
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-left">Password</th>
              <th className="py-3 px-6 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp, index) => (
              <tr
                key={index}
                className="border-t hover:bg-gray-100 transition duration-200"
              >
                <td className="py-2 px-6">{emp.id}</td>
                <td className="py-2 px-6">{emp.name}</td>
                <td className="py-2 px-6">{emp.email}</td>
                <td className="py-2 px-6">{emp.password}</td>
                <td className="py-2 px-6 space-x-2">
                  <button
                    onClick={() => deleteEmployee(emp.id)}
                    className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => showEmployee(emp.id)}
                    className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 transition"
                  >
                    Show
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <footer className="text-center py-4 text-gray-500 text-sm mt-auto">
        © {new Date().getFullYear()} Employee Management System
      </footer>
    </div>
  );
}

export default Dashboard;
