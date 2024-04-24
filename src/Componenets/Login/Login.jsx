import React, { useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/Userprovider";
import { UserProvider } from "../context/Userprovider";
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
        {/* Additional content or testimonials can be added here */}
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

// import React, { useState, useContext } from "react";
// import axios from "axios";
// import { ToastContainer, toast, Zoom } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { FcGoogle } from "react-icons/fc";
// import { FaFacebook } from "react-icons/fa6";
// import { Link } from "react-router-dom";
// import { API_URI } from "../Apis/Api";
// import { COVENE_URL } from "../Apis/Api1";
// import { UserContext } from "../components/Context/UserProvider";
// import { useNavigate } from "react-router-dom";
// import Layout from "../components/Dashboard/Layout";
// // when getting the error message of "422" we use this headers to change the content type from the json type to "application/x-www-form-urlencoded" this is so because the backend sets the content type
// const config = {
//   headers: {
//     "Content-Type": "application/x-www-form-urlencoded", // Set the desired content type here
//   },
// };

// const Login = () => {
//   const navigate = useNavigate()
//   const { authUser,setAuthUser, isloading, setIsloading } =
//     useContext(UserContext);

//   // sucess and error toastify
//   const notifySuccess = () => {
//     toast.success("login successful!", {
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
//     toast.error("login Not successful please try again!", {
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
//   // setting the input form with a useState and  setting the handling changes made in the input form fields
//   const [formFields, setFormFields] = useState({
//     username: "",
//     password: "",
//   });
//   const handleChange = (event) => {
//     setFormFields({
//       ...formFields,
//       [event.target.name]: event.target.value,
//     });
//   };

//   // calling the api
//   const Login = (e) => {
//     {
//       setIsloading(true);
//     }
//     e.preventDefault();
//     // validation: to prevent the user for submitting an empty folder
//     if (formFields.username == "" || formFields.password == "") {
//       alert("please enter all fields");
//     }
//     // posting to axio
//     console.log(formFields);
//     axios
//       .post(
//         `${API_URI}/login/oauth`,
//         {
//           ...formFields,
//         },
//         config
//       )
//       .then(function (response) {
//         console.log(response);
//         if (response.status === 200) {
//           // If successful, call the notify function to display success toast
//           notifySuccess();
//           console.log(response.data)
//           // set the user email and user name
//           setAuthUser(response.data)
//           const token = response.data.access_token;
//           localStorage.setItem('token',token)
//           navigate('/dash')
//           // console.log(token);
//         } else {
//           // If not successful, display error toast with the error message
//           notifyError();
//         }
//       })
//       .catch(function (error) {
//         console.log(error);
//         notifyError();
//       })
//       .finally(function () {
//         setIsloading(false);
//         // always executed
//       });
//   };
//   // console.log(authUser,'auth user here')
//   return (
//     <>
//       <div className="flex flex-row h-screen w-full">
//         <div className="w-[45%]">
//           <div className="flex flex-row justify-center items-center pt-10 pr-[350px] gap-3">
//             <img
//               src="/logo.jpg"
//               alt="logo"
//               className="h-[50px] w-[50px] rounded-3xl object-fill"
//             />
//           </div>
//           <div className="flex flex-col justify-center pt-5 ">
//             <h1 className="text-[#3272A4] font-extrabold text-[40px] pl-28">
//               Welcome
//             </h1>
//             <p className="text-[40px] leading-5 pl-28 text-[#121749] font-light">
//               {" "}
//               Login to wash{" "}
//             </p>
//           </div>
//           <form className="flex flex-col pt-7 pl-28 gap-5" onSubmit={Login}>
//             <div className="flex flex-col">
//               <span>Email</span>
//               <input
//                 type="username"
//                 className="border-0 outline-0 focus:border-red-900 border-b-2 border-[#3272A4] w-[350px] leading-3"
//                 value={formFields.username}
//                 onChange={handleChange}
//                 name="username"
//               />
//             </div>
//             <div class="relative">
//               <input
//                 type="password"
//                 class="peer border-0 outline-none placeholder:text-transparent border-b-2 w-[350px] leading-7 border-[#3272A4]"
//                 placeholder="Password"
//                 value={formFields.password}
//                 onChange={handleChange}
//                 name="password"
//               />
//               <label class="absolute left-0 -top-1/2 translate-y-1/2 peer-focus:-top-8 transition-all duration-100 peer-placeholder-shown:-top-1/2">
//                 Password
//               </label>
//             </div>
//             <div className="flex flex-row justify-between w-[350px]">
//               <div className="flex flex-row items-start ">
//                 <input type="checkbox" className="h-[15px] " />
//                 <p className="pl-[10px] text-[11px]">Remember Me</p>
//               </div>
//               <div>
//                 <p className="text-[11px]">
//                   <Link to="/forget">Forgot Password ?</Link>
//                 </p>
//               </div>
//             </div>
//             <div className="pt-8">
//               <button className="w-[350px] h-[40px] rounded-xl bg-[#3272A4]">
//                 <p
//                   className="block pl-[150px] text-white "
//                   style={{ display: isloading ? "flex" : "none" }}
//                 >
//                   loading......
//                 </p>
//                 <p className="text-white pl-[150px]"
//                 style={{ display: isloading ? "none" : "flex" }}
//                 >LOGIN</p>
//               </button>
//               <ToastContainer
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
//               />
//             </div>
//             <div className="flex flex-row items-center ml-3 mt-5 gap-1">
//               <hr className="h-[2px] w-[100px] bg-[#3272A4]" />
//               <p className="pb"> or login with </p>
//               <hr className="h-[2px] w-[100px] bg-[#3272A4]" />
//             </div>
//             <div className="flex flex-row items-center gap-7 ml-[110px]">
//               <FcGoogle className="size-full max-w-[35px]" />
//               <FaFacebook className="size-full max-w-[35px] fill-blue-800" />
//             </div>
//             <div>
//               <p className="text-[#3272A4] text-[11px] font-light">
//                 Don't have an account?{" "}
//                 <b className="font-semibold">
//                   <Link to="/register">Sign up </Link>
//                 </b>
//               </p>
//             </div>
//           </form>
//         </div>
//         <div
//           className="w-[55%] h-screen bg-cover bg-center"
//           style={{ backgroundImage: "url('/login.jpg')" }}
//         ></div>
//       </div>
//     </>
//   );
// };

// export default Login;

{
  /* <div className="relative">
              <input type="password" 
              className="peer border-0 outline-none placeholder:text-transparent border-b-2 w-[350px] leading-7 border-[#3272A4]"
              placeholder="Password"
              />
              <label 
              className="absolute left-0 -top-4 translate-y-1/2 peer-focus:-top-8 transition-all duration-500 peer-placeholder-shown:-top-1/2"> Password </label>
            </div> */
}
