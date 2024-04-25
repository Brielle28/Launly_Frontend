import React, { useState } from "react";
import axios from "axios";
import { API_URI } from "../Api/Api";
import { useNavigate } from "react-router-dom";

function ResetPasswordPage(props) {
  const navigate = useNavigate()
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
 

  const handleResetPassword = (e) => {
    const claimCode = localStorage.getItem('claimCode');
    e.preventDefault();
    // console.log(claimCode, "this is the claim code local")

    // Client-side validation
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Get the token from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");

    // Send token and new password to backend
    axios
      .post(`${API_URI}/login/reset`, {
        new_password: newPassword,
        claim: claimCode,
      },{
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${token}`
        }
      })
      console.log(claimCode, "this is the claim code")
      .then((response) => {
        // Handle success
        console.log("Password reset successful");
        setSuccessMessage("Password reset successful");
        navigate("/login")
      })
      .catch((error) => {
        // Handle error
        console.error("Error resetting password:", error);
        setError("Error resetting password");
      });
  };

  return (
    <div className="flex min-h-screen bg-blue-50">
      <div className="w-1/2 flex flex-col justify-center items-center bg-teal-600 px-12 text-white">
        <div className="w-full">
          <img
            src="/logo2-1.png"
            alt="Laundry Service"
            className="mb-8 max-w-xs "
          />
        </div>
        <h1
          className="text-2xl font-bold mb-3 text-center cursor-default"
          style={{ fontSize: "5rem" }}
        >
          Manage your Laundry Anywhere
        </h1>
        <p className="text-md mb-2 italic cursor-default">
          Schedule, track, and manage your laundry from anywhere!
        </p>
      </div>
      {/* formcontainer */}
      <div className="w-1/2 flex items-center justify-center ">
        <form
          className="max-w-md mt-5 w-full space-y-[10px] p-10 bg-white rounded-lg shadow"
          onSubmit={handleResetPassword}
        >
          <div className="flex justify-between items-center mb-4">
            <h2
              className="font-bold text-gray-700 text-center"
              style={{ fontSize: "35px" }}
            >
              Reset Password
            </h2>
          </div>
          <div>
            <label htmlFor="newPassword">New Password:</label>
            <input
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-teal-500 focus:ring focus:ring-teal-200"
              style={{
                borderRadius: "10px",
                border: 0,
                outline: 0,
                background: "rgba(0,128,128,0.15)",
              }}
              required
            />
          </div>

          <div>
            <label htmlFor="confirmPassword">Confirm New Password:</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-teal-500 focus:ring focus:ring-teal-200"
              style={{
                borderRadius: "10px",
                border: 0,
                outline: 0,
                background: "rgba(0,128,128,0.15)",
              }}
              required
            />
          </div>
          {error && <div className="text-red-600 text-[13px]">{error}!!!</div>}
          {successMessage && <div>{successMessage}</div>}
          <button type="submit" className="ml-[50px]">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
}

export default ResetPasswordPage;
