import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API_URI } from "../Api/Api";
import { UserContext } from "../context/Userprovider";
import "../../index.css"
const RegisterPage = () => {
  const navigate = useNavigate();
  const {isloading, setIsloading} = useContext(UserContext)

  // const { LoginEmail, LoginName } = useContext(AuthContext);
  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
    name: "",
  });
  const handleChange = (event) => {
    setFormFields({
      ...formFields,
      [event.target.name]: event.target.value,
    });
  };
  // toastify
  const notifySuccess = () => {
    toast.success("Registration successful!", {
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
    toast.error("Registration Not successful please try again!", {
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
  const Post = (e) => {
    setIsloading(true)
    e.preventDefault();
    // validation: to prevent the user for submitting an empty folder
    if (
      formFields.name == "" ||
      formFields.email == "" ||
      formFields.password == ""
    ) {
      alert("please enter all fields");
    }
    axios
      .post(`${API_URI}/users`, {
        full_name: formFields.name,
        email: formFields.email,
        password: formFields.password,
      })
      .then(function (response) {
        console.log(response);
        notifySuccess();
        setIsloading(false)
        alert("A verification link has been sent to your Email")
        // navigate("/login");
      })
      .catch(function (error) {
        setIsloading(false)
        console.log(error);
        notifyError();
        setIsloading(false)
      })
  };
  
  return (
    <>
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
        {/* Additional content or testimonials can be added here */}
      </div>
      {/* Form Container */}
      <div className="w-1/2 flex items-center justify-center ">
        <form className="max-w-md mt-5 w-full space-y-[10px] p-10 bg-white rounded-lg shadow" onSubmit={Post}>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-[50px] font-bold text-gray-700">
              Create an account
            </h2>
          </div>
          {/* ... (the rest of your form fields go here) */}
          {/* <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formFields.name}
              required
              className="mt-1 w-full rounded-[30px] border-gray-300 shadow-sm focus:border-teal-500 focus:ring focus:ring-teal-200"
              onChange={handleChange}
              style={{
                borderRadius: "10px",
                border: 0,
                outline: 0,
                background: "rgba(0,128,128,0.15)",
              }}
            />
          </div> */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Fullname
            </label>
            <input
              type="name"
              name="name"
              value={formFields.name}
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
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formFields.email}
              required
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-teal-500 focus:ring focus:ring-teal-200"
              onChange={handleChange}
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
          {/* create account button */}
          <div className="mt-8">
            <button
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent
                        text-sm font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2
                        focus:ring-offset-2 focus:ring-orange-500"
            >
              <span
                  class="loader"
                  style={{ display: isloading ? "flex" : "none" }}
                ></span>
                <p className="text-white"
                  style={{ display: isloading ? "none" : "flex" }}
                 >
              Create an Account
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
          </div>{" "}
          {/* already have an account */}
          <div className="text-center">
            <p className="text-sm">
              Already have an account?{" "}
              <Link to="/login">
              <p className="text-teal-600 hover:text-teal-700 font-medium" >
                Log In
              </p>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default RegisterPage;







// import React, { useState, useContext} from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { FcGoogle } from "react-icons/fc";
// import { FaFacebook } from "react-icons/fa6";
// import { Link } from "react-router-dom";
// import { API_URI } from "../Apis/Api";
// import { COVENE_URL } from "../Apis/Api1";
// import { ToastContainer, toast, Zoom } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// // import { AuthContext } from "../components/Context/AuthProvider";

// const Register2 = () => {
//   const navigate = useNavigate();

//   // const { LoginEmail, LoginName } = useContext(AuthContext);
//   const [formFields, setFormFields] = useState({
//     email: "",
//     password: "",
//     name: "",
//     // phoneNumber: "",
//   });
//   const handleChange = (event) => {
//     setFormFields({
//       ...formFields,
//       [event.target.name]: event.target.value,
//     });
//   };
//   const notifySuccess = () => {
//     toast.success("Registration successful!", {
//       position: "top-left",
//       autoClose: 5000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "light",
//       transition: Zoom,
//     });
//   };
//   const notifyError = () => {
//     toast.error("Registration Not successful please try again!", {
//       position: "top-left",
//       autoClose: 5000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "light",
//       transition: Zoom,
//     });
//   };

//   const Post = (e) => {
//     e.preventDefault();
//     // validation: to prevent the user for submitting an empty folder
//     if (
//       formFields.name == "" ||
//       formFields.email == "" ||
//       formFields.password == ""
//     ) {
//       alert("please enter all fields");
//     }
//     // posting to axio
//     //
//     axios
//       .post(`${API_URI}/users`, {
//         full_name: formFields.name,
//         email: formFields.email,
//         password: formFields.password,
//         // phone: formFields.phoneNumber,
//       })
//       .then(function (response) {
//         console.log(response);
//         // notifySuccess();
//         navigate("/login");

//         // const userEmail = response.data.data[0].email;
//         // const userName = response.data.data[0].name;
//         // LoginName(userName);
//         // LoginEmail(userEmail);
//         // console.log(userEmail, userName);
//       })
//       .catch(function (error) {
//         console.log(error);
//         // notifyError();
//       });
//   };
//   return (
//     <>
//       <div className="flex flex-row h-screen w-full">
//         <div className="w-[45%] pt-10">
//           <div className="flex flex-row justify-center items-center pt-1 pr-[300px] gap-3">
//             <img
//               src="/logo.jpg"
//               alt="logo"
//               className="h-[50px] w-[50px] rounded-3xl object-fill"
//             />
//           </div>
//           <div className="flex flex-col justify-center pt-5 ">
//             <h1 className="text-[#3272A4] font-extrabold text-[35px] pl-28">
//               New to Laundrex ?
//             </h1>
//           </div>
//           <form className="flex flex-col pt-7 pl-28 gap-5" onSubmit={Post}>
//             <div className="flex flex-col">
//               <span> Full Name </span>
//               <input
//                 type="text"
//                 className="border-0 outline-0 focus:border-red-900 border-b-2 border-[#3272A4] w-[350px] leading-3"
//                 value={formFields.name}
//                 onChange={handleChange}
//                 name="name"
//               />
//             </div>

//             <div className="flex flex-col">
//               <span>Email</span>
//               <input
//                 type="email"
//                 className="border-0 outline-0 focus:border-red-900 border-b-2 border-[#3272A4] w-[350px] leading-3"
//                 value={formFields.email}
//                 onChange={handleChange}
//                 name="email"
//               />
//             </div>
//             <div className="flex flex-col">
//               <span>Password</span>
//               <input
//                 type="password"
//                 className="border-0 outline-0 focus:border-red-900 border-b-2 border-[#3272A4] w-[350px] leading-3"
//                 value={formFields.password}
//                 onChange={handleChange}
//                 name="password"
//               />
//             </div>
//             {/* <div className="flex flex-col">
//               <span>Phone number </span>
//               <input
//                 type="phoneNumber"
//                 className="border-0 outline-0 focus:border-red-900 border-b-2 border-[#3272A4] w-[350px] leading-3"
//                 value={formFields.phoneNumber}
//                 onChange={handleChange}
//                 name="phoneNumber"
//               />
//             </div> */}
//             <div className="flex flex-row justify-between w-[350px]">
//               <div className="flex flex-row items-start ">
//                 <input type="checkbox" className="h-[15px] " />
//                 <p className="pl-[10px] text-[11px]">
//                   Accept Terms and Conditions
//                 </p>
//               </div>
//             </div>
//             <div className="pt-8">
//               <button className="w-[350px] h-[40px] rounded-xl bg-[#3272A4]">
//                 <p className="text-white">
//                   <button type="button">
//                     CREATE ACCOUNT{" "}
//                   </button>
//                 </p>
//               </button>
//               {/* <ToastContainer
//                 position="top-left"
//                 autoClose={5000}
//                 hideProgressBar={false}
//                 newestOnTop={false}
//                 closeOnClick
//                 rtl={false}
//                 pauseOnFocusLoss
//                 draggable
//                 pauseOnHover
//                 theme="light"
//                 transition={Zoom}
//                 key={Math.random()}
//               /> */}
//             </div>
//             <div className="flex flex-row items-center ml-3 mt-5 gap-1">
//               <hr className="h-[2px] w-[100px] bg-[#3272A4]" />
//               <p className="pb"> or sign up with </p>
//               <hr className="h-[2px] w-[100px] bg-[#3272A4]" />
//             </div>
//             <div className="flex flex-row items-center gap-7 ml-[110px]">
//               <FcGoogle className="size-full max-w-[35px]" />
//               <FaFacebook className="size-full max-w-[35px] fill-blue-800" />
//             </div>
//             <div className="-mt-3">
//               <p className="text-[#3272A4] text-[11px] font-light">
//                 Already have an account?{" "}
//                 <b className="font-semibold">
//                   {" "}
//                   <Link to="/login">Login</Link>{" "}
//                 </b>
//               </p>
//             </div>
//           </form>
//         </div>
//         <div
//           className="w-[55%] h-screen bg-cover bg-center"
//           style={{ backgroundImage: "url('/register.jpg')" }}
//         ></div>
//       </div>
//     </>
//   );
// };

// export default Register2;
