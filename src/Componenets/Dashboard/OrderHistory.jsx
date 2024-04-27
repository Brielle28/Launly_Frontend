import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { API_URI } from "../Api/Api";
import { UserProvider } from "../context/Userprovider";
import { UserContext } from "../context/Userprovider";


const OrderHistory = () => {
  const [  orders, setOrders ] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    axios
      .get(`${API_URI}/bookings/booking`, {
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${token}`
        }
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
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
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
          {orders.map((item)=> (
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

export default OrderHistory;
