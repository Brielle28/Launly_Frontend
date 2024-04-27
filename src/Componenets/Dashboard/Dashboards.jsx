
import React, { useState, useEffect} from "react";
import axios from "axios"
import { API_URI } from "../Api/Api";
import { Link } from "react-router-dom";
import { UserContext } from "../context/Userprovider";

const Dashboards = () => {
  const [  orders, setOrders ] = useState([]);
  const token = localStorage.getItem('token');

  // Calculate total orders
  const totalOrders = orders.length;

  // Calculate total amount
  const totalAmount = orders.reduce(
    (total, order) => total + order.total_price,
    0
  ).toFixed(0);

  useEffect(() => {
    axios
      .get(`${API_URI}/bookings/booking`, {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (response) {
        // handle success
        console.log(response.data.data, "response from order page");
        setOrders(response.data.data);
        console.log(orders);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [setOrders, token]); // Ensure dependencies are added to the useEffect dependency array

  return (
    <>
     <div className="flex flex-row items-center justify-center gap-10">
          <div className="max-w-[350px] h-[150px] rounded-[25px] p-6 bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-row items-start justify-start gap-3 w-[230px]">
              <img src="/order1.png" alt="" className="h-8 w-8" />
              <h5 className="font-bold" style={{ fontSize: "25px", paddingTop: "10px" }}>
                Total Order
              </h5>
            </div>
            <p className="font-semibold text-center pt-5 text-[50px]">{totalOrders}</p>
          </div>
          <div className="max-w-[350px] h-[150px] rounded-[25px] p-6 bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-row items-start justify-start gap-3 w-[230px]">
              <img src="/amount.jpeg" alt="" className="h-8 w-8 bg-transparent" />
              <h6 className="font-bold" style={{ fontSize: "25px", paddingTop: "10px" }}>
                Total Amount
              </h6>
            </div>
            <p className="font-semibold text-center pt-5 text-[50px]">₦{totalAmount}</p>
          </div>
          <div className="max-w-[350px] h-[150px] rounded-[25px] p-6 bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-row items-start justify-start gap-3 w-[230px]">
              <img src="/pickup1.png" alt="" className="h-8 w-8" />
              <h5 className="font-bold" style={{ fontSize: "25px", paddingTop: "10px" }}>
                Total Pickup
              </h5>
            </div>
            <p className="font-semibold text-center pt-5 text-[50px]">0</p>
          </div>
        </div>

      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-16">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Home Address
            </th>
            <th scope="col" className="px-6 py-3">
              Date
            </th>
            <th scope="col" className="px-6 py-3">
              Phone Number
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {orders.map((item) => (
            <React.Fragment key={item.id}>
              <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.address}
                </th>
                <td className="px-6 py-4">{item.pickup_date}</td>
                <td className="px-6 py-4">{item.phone}</td>
                <td className="px-6 py-4">₦{item.total_price}</td>
                <td className="px-6 py-4">{item.status}</td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Dashboards;