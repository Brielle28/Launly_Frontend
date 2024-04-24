import React from "react";
import { Link } from "react-router-dom";

const Dashboards = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center px-[30px] gap-[50px]">
        <div className="flex flex-row items-center justify-center gap-10">
          <div className="max-w-[350px] h-[150px] rounded-[25px] p-6 bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-row items-start justify-start gap-3 w-[230px]">
            <img src="/order1.png" alt="" className="h-8 w-8" />
              <h5 className=" font-bold " style={{fontSize: "25px", paddingTop: "10px"}}>
               Total Order
              </h5>
            </div>
            <p className="font-semibold text-center pt-5 text-[50px]">
              0
            </p>
          </div>
          <div className="max-w-[350px] h-[150px] rounded-[25px] p-6 bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-row items-start justify-start gap-3 w-[230px]">
            <img src="/amount.jpeg" alt="" className="h-8 w-8 bg-transparent" />
              <h6 className=" font-bold " style={{fontSize: "25px", paddingTop: "10px"}}>
               Total Amount
              </h6>
            </div>
            <p className="font-semibold text-center pt-5 text-[50px]">
              0
            </p>
          </div>
          <div className="max-w-[350px] h-[150px] rounded-[25px] p-6 bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-row items-start justify-start gap-3 w-[230px]">
            <img src="/pickup1.png" alt="" className="h-8 w-8" />
              <h5 className=" font-bold " style={{fontSize: "25px", paddingTop: "10px"}}>
               Total Pickup
              </h5>
            </div>
            <p className="font-semibold text-center pt-5 text-[50px]">
              0
            </p>
          </div>
        </div>

        {/* Table */}
        <div className=" w-full overflow-x-hidden shadow-2xl sm:rounded-lg bg-white">
          <div className="flex flex-row items-start justify-between my-4 mx-9 text-center">
            <h5 className="text-[10px]">Recent Orders</h5>
            <Link to="/dash/orderhistory">
            <p className="text-[15px] text-black">view more</p>
            </Link>
          </div>
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 z-0">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                 Home Address
                </th>
                <th scope="col" className="px-6 py-3">
                  Order Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Phone Number
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  status
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                   new heaven 
                </th>
                <td className="px-6 py-4"> 22/12/2023 </td>
                <td className="px-6 py-4">091570438</td>
                <td className="px-6 py-4"> ₦15000</td>
                <td className="px-6 py-4"> successful </td>
              </tr>
              <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                   new heaven 
                </th>
                <td className="px-6 py-4"> 22/12/2023 </td>
                <td className="px-6 py-4">091570438</td>
                <td className="px-6 py-4"> ₦15000</td>
                <td className="px-6 py-4"> successful </td>
              </tr>
             <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                   new heaven 
                </th>
                <td className="px-6 py-4"> 22/12/2023 </td>
                <td className="px-6 py-4">091570438</td>
                <td className="px-6 py-4"> ₦15000</td>
                <td className="px-6 py-4"> successful </td>
              </tr>
              <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                   new heaven 
                </th>
                <td className="px-6 py-4"> 22/12/2023 </td>
                <td className="px-6 py-4">091570438</td>
                <td className="px-6 py-4"> ₦15000</td>
                <td className="px-6 py-4"> successful </td>
              </tr>
              <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                   new heaven 
                </th>
                <td className="px-6 py-4"> 22/12/2023 </td>
                <td className="px-6 py-4">091570438</td>
                <td className="px-6 py-4"> ₦15000</td>
                <td className="px-6 py-4"> successful </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Dashboards;
