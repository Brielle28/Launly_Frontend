import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaNairaSign } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { WomenItems } from "../../utils/WomenItems";
import { UserContext } from "../context/Userprovider";
import { API_URI } from "../Api/Api";

const WomenWear = ({ onOptionsSelected }) => {
  const { womenItems, setWomenItems } = useContext(UserContext);

  useEffect(() => {
    axios
      .get(`${API_URI}/cloth/cloth?category=women`)
      .then(function (response) {
        // handle success
        console.log(response);
        setWomenItems(response.data);
        console.log(womenItems);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);

  const handleQuantityChange = (id, increment) => {
    setWomenItems((prevItems) => {
    
      return prevItems.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: Math.max(0, item.quantity + increment) };
        }
        return item;
      });
    });
  };

  const selectedOptions = womenItems.filter((item) => item.quantity > 0);
 
const rry = [
  {
    "category": "women",
    "name": "T-shirt",
    "quantity": 2,
    "price": 1000
  },
  {
    "category": "women",
    "name": "skirt",
    "quantity": 3,
    "price": 2000
  },
  {
    "category": "women",
    "name": "dress",
    "quantity": 4,
    "price": 1000
  }
]

  return (
    <>
      <div className=" flex flex-wrap px-10 w-[100%] items-center justify-evenly gap-y-8 rounded-xl mt-10">

<button onClick={() => onOptionsSelected(rry)}>Test me</button>

        {womenItems.map((item) => (
          <div className="flex flex-row items-center justify-center">
            <div className="flex flex-row items-center justify-center gap-x-8 px-5 rounded-xl shadow-md">
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
                  onClick={() => handleQuantityChange(item.id, -1)}
                >
                  <FaMinus className="h-3 w-3" />
                </span>
                <p className="text-[20px]"> {item.quantity} </p>
                <span
                  className="btn rounded-full border-2 border-[#3272A4]"
                  onClick={() => handleQuantityChange(item.id, 1)}
                >
                  <FaPlus className="h-3 w-3" />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default WomenWear;
