import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import { FaNairaSign } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { UserContext } from "../context/Userprovider";
import { MenItems } from "../../utils/MenItems";
import { API_URI } from "../Api/Api";
const Mencloth = ({ onOptionsSelected }) => {
  const [items, setItems] = useState({});
  // const navigate = useNavigate();
  const { menItems, setMenItems } = useContext(UserContext);

  useEffect(() => {
    axios
      .get(`${API_URI}/cloth/cloth?category=men`)
      .then(function (response) {
        // handle success
        console.log(response);
        setMenItems(response.data);
        console.log(menItems);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);

  const updatePayLoad = (id, increment) => {};

  useEffect(() => {}, [items]);

  const handleQuantityChange = (item, increment) => {
    setItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: Math.max(0, item.quantity + increment) };
        }
        return item;
      });
    });
  };
  return (
    <>
      <div className="flex flex-wrap px-10 w-[100%] items-center justify-evenly gap-y-8 rounded-xl mt-10">
        {menItems.map((item) => (
          <div className="flex flex-row items-center justify-between gap-x-8 px-5 shadow-md rounded-xl">
            <div className="flex flex-row items-center gap-3 p-1">
              <div
                className="w-24 h-24 rounded-xl bg-cover bg-center"
                style={{ backgroundImage: `url('${item.image}')` }}
              ></div>
              <div className="flex flex-col gap-1 items-start justify-start">
                <h2 style={{ fontSize: "15px" }}>{item.name}</h2>
                <div className="flex items-center justify-center">
                  <FaNairaSign className="flex-shrink-0 w-2 h-2 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                  <p className="text-gray-500 text-[10px]">{item.price}</p>
                  <p className="text-gray-500 text-[10px]">/Item</p>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center gap-2">
              <span
                className="btn rounded-full border-2 border-[#3272A4]"
                onClick={() => handleQuantityChange(item, false)}
              >
                <FaMinus className="h-3 w-3" />
              </span>
              <p className="text-[20px]"> {item.quantity} </p>
              <span
                className="btn rounded-full border-2 border-[#3272A4]"
                onClick={() => handleQuantityChange(item, true)}
              >
                <FaPlus className="h-3 w-3" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Mencloth;
