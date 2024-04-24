import React from "react";
import { FaNairaSign } from "react-icons/fa6";
import { CiCalendarDate } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/Userprovider";


const Summary = () => {
  const {
    formFields,
    TotalPrice

  } = useContext(UserContext);
  return (
    <>
      <div className="flex flex-col items-start justify-center bg-white w-[40%] border-4 border-red shadow-xl rounded-xl ml-[300px] pb-5 pl-10">
        <div className=" flex flex-col items-start justify-center gap-2">
          <div className="flex flex-row items-start pt-8 justify-center">
            
          </div>
          <h1 style={{fontSize: "30px"}}>ORDER SUMMARY </h1>
        </div>
          <hr class="border border-gray-300 w-[80%] my-4" />
        <div className=" flex flex-col items-start justify-center gap-2">
          <div className=" flex flex-row items-start justify-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-4 mt-1 text-black"
            >
              <rect x="3" y="11" width="18" height="10" rx="2" ry="2" />
              <line x1="3" y1="15" x2="21" y2="15" />
              <path d="M16 11V7a4 4 0 0 0-4-4H4" />
            </svg>
            <p className="text-[18px] text-black"> Amount </p>
          </div>
          <div className="flex flex-row items-center justify-center pl-7 gap-1">
            <FaNairaSign className="flex-shrink-0 w-4 h-4 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
            <p className="text-black"> {TotalPrice()}</p>
          </div>
        </div>
        <hr class="border border-gray-300 w-[80%] my-4" />
        <div className=" flex flex-col items-start justify-center gap-2">
          <div className=" flex flex-row items-start justify-center gap-1">
          <CiCalendarDate className="w-5 h-4 mt-1 text-black"/>
            <p className="text-[18px] text-black"> Date </p>
          </div>
          <div className="flex flex-row items-center justify-center pl-7 gap-1">
            <p className="text-black"> {formFields.date} </p>
          </div>
        </div>
        <hr class="border border-gray-300 w-[80%] my-4" />
        <div className=" flex flex-col items-start justify-center gap-2">
          <div className=" flex flex-row items-start justify-center gap-1">
          <IoMdTime className="w-5 h-4 mt-1 text-black"/>
            <p className="text-[18px] text-black"> Time </p>
          </div>
          <div className="flex flex-row items-center justify-center pl-7 gap-1">
            <p className="text-black"> {formFields.time} </p>
          </div>
        </div>
        <hr class="border border-gray-300 w-[80%] my-4" />
        <button className="btn w-[80%] mt-3">
        <Link to="/dash/bookawash/summary/paystack" className="w-[100%]">
           Book 
        </Link>
           </button>
      </div>
    </>
  );
};

export default Summary;
