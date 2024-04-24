import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate()

  const Logout =()=>{
    localStorage.removeItem("token");
    navigate("/");
  }
  return (
    <>
      <div className="flex items-center mt-16 justify-center ">
        <div className="max-w-md w-full bg-white p-8 shadow-md rounded-md">
          <h2 className="text-2xl font-bold mb-4">Sign Out</h2>
          <p className="text-gray-600 mb-6">
            Are you sure you want to sign out?
          </p>
          <div className="flex justify-between">
              <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md" onClick={Logout}>
                Sign Out
              </button>
            <Link to="/dash">
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-md">
                Cancel
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Logout;
