import React, { useEffect, useState } from "react";
import { useAuth } from "../../AuthContext"; // Ensure correct path
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase"; // Ensure correct path to your Firebase config
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore"; // Import Firestore functions
import "./dashboard.css"; // Import the CSS file

const Dashboard = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
      return;
    }

    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "leads")); // Replace with your collection name
        const dataList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setData(dataList);
      } catch (error) {
        setError("Failed to fetch data.");
      }
    };

    fetchData();
  }, [currentUser, navigate]);

  const handleLogout = async () => {
    if (!window.confirm("Are you sure you want to logout?")) return;
    try {
      await logout();
      navigate("/login"); // Redirect after logout
    } catch (error) {
      setError("Logout failed: " + error.message);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this lead?")) return;
    try {
      await deleteDoc(doc(db, "leads", id)); // Replace with your collection name
      setData(data.filter(item => item.id !== id));
      setMessage("Lead deleted successfully!");
    } catch (error) {
      setError("Delete failed: " + error.message);
    }
  };

  return (
    <div className="dashboard-container min-h-screen flex flex-col items-center bg-blue-300 p-6">
      {/* Dashboard Header */}
      <div className="dashboard-header w-full max-w-6xl bg-[#EEA124] text-white p-5 rounded-lg shadow-lg flex justify-between items-center">
        <h2 className="text-2xl font-bold tracking-wide">📊 Dashboard</h2>
        <button 
          className="bg-white text-[#EEA124] px-4 py-2 rounded-lg hover:bg-gray-200 transition duration-200 font-semibold"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>

      {/* Success & Error Messages */}
      {message && <p className="w-full max-w-6xl text-center bg-green-500 text-white p-3 mt-4 rounded-lg shadow-md">{message}</p>}
      {error && <p className="w-full max-w-6xl text-center bg-red-500 text-white p-3 mt-4 rounded-lg shadow-md">{error}</p>}

      {/* Data Table */}
      <div className="overflow-x-auto w-full max-w-6xl mt-6">
        <table className="dashboard-table w-full bg-white shadow-lg rounded-lg">
          <thead>
            <tr className="bg-orange-400 text-white text-sm uppercase tracking-wider">
              <th className="p-4 text-left">👤 Full Name</th>
              <th className="p-4 text-left">📧 Email Address</th>
              <th className="p-4 text-left">📞 Phone Number</th>
              <th className="p-4 text-left">💬 Message</th>
              <th className="p-4 text-center">⚙️ Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr key={item.id} className="border-b border-gray-300 hover:bg-gray-200 transition duration-150">
                <td className="p-4">{item.fname} {item.lname}</td>
                <td className="p-4">{item.email}</td>
                <td className="p-4">{item.phone}</td>
                <td className="p-4">{item.message}</td>
                <td className="p-4 text-center">
                  <button 
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
