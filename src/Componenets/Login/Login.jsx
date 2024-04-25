import React, { useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/Userprovider";
import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API_URI } from "../Api/Api";

// when getting the error message of "422" we use this headers to change the content type from the json type to "application/x-www-form-urlencoded" this is so because the backend sets the content type
const config = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded", // Set the desired content type here
  },
};

const Login = () => {
  const navigate = useNavigate();
  const { authUser, setAuthUser, isloading, setIsloading } =
    useContext(UserContext);

  // setting the input form with a useState and  setting the handling changes made in the input form fields
  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    setFormFields({
      ...formFields,
      [event.target.name]: event.target.value,
    });
  };
  // toastfy
  const notifySuccess = () => {
    toast.success("Login successful!", {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Zoom,
    });
  };
  const notifyError = () => {
    toast.error("Login Not successful please try again!", {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Zoom,
    });
  };
  const LoginAxios = (e) => {
    setIsloading(true)
    e.preventDefault();
 
      setIsloading(true);
    // validation: to prevent the user for submitting an empty folder
    if (formFields.email == "" || formFields.password == "") {
      alert("please enter all fields");
    }
    // posting to axio
    console.log(formFields);
    axios
      .post(
        `${API_URI}/login/oauth`,
        {
          username: formFields.email,
          password: formFields.password,
        },
        config
      )
      .then(function (response) {
        console.log(response);
          console.log(response.data);
          notifySuccess()
          // set the user email and user name
          setAuthUser(response.data);
          const token = response.data.access_token;
          localStorage.setItem("token", token);
          navigate("/dash");
      })
      .catch(function (error) {
        console.log(error);
        notifyError();
      })
      .finally(function () {
        setIsloading(false);
        // always executed
      });
  };

  return (
    <div className="flex min-h-screen bg-blue-50">
      {/* Illustration and Info Container */}
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
      {/* Form Container */}
      <div className="w-1/2 flex items-center justify-center ">
        <form
          className="max-w-md mt-5 w-full space-y-[10px] p-10 bg-white rounded-lg shadow"
          onSubmit={LoginAxios}
        >
          <div className="flex justify-between items-center mb-4">
            <h2
              className="text-[50px] font-bold text-gray-700"
              style={{ text: "15px" }}
            >
              Login !
            </h2>
          </div>
          {/* ... (the rest of your form fields go here) */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formFields.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-teal-500 focus:ring focus:ring-teal-200"
              style={{
                borderRadius: "10px",
                border: 0,
                outline: 0,
                background: "rgba(0,128,128,0.15)",
              }}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formFields.password}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-teal-500 focus:border-[1px] focus:ring focus:ring-teal-200"
              style={{
                borderRadius: "10px",
                border: 0,
                outline: 0,
                background: "rgba(0,128,128,0.15)",
              }}
            />
          </div>
          <div className="flex items-end justify-end py-2">
            <Link to="/forgetpassword">
              <p className="text-teal-600 hover:text-teal-700 font-medium">
                Forget password?
              </p>
            </Link>
          </div>
          {/* create account button */}
          <div className="mt-8">
            {/* <Link> */}
              <button
                type="submit"
                
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent
              text-sm font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2
                        focus:ring-offset-2 focus:ring-orange-500"
              >
                <span
                  class="loader"
                  style={{ display: isloading ? "flex" : "none" }}
                ></span>
                <p
                  className="text-white"
                  style={{ display: isloading ? "none" : "flex" }}
                >
                  {" "}
                  Login{" "}
                </p>
              </button>
              <ToastContainer
                position="top-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Zoom}
                key={Math.random()}
              />
            {/* </Link> */}
          </div>{" "}
          {/* already have an account */}
          <div className="text-center">
            <p className="text-sm">
              Don't have an account?{" "}
              <Link to="/register">
                <p className="text-teal-600 hover:text-teal-700 font-medium">
                  Sign up
                </p>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;