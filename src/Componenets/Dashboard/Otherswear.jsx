import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { FaNairaSign } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { UserContext } from "../context/Userprovider";
import { OthersItems } from "../../utils/OthersItems";


export const Otherswear = () => {
  const navigate = useNavigate();
  const {
    otherItems,
    setOtherItems,
  } = useContext(UserContext);

  const handleQuantityChange = (id, increment) => {
    setOtherItems((prevItems) => {
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
      <div className="flex flex-wrap px-10 w-[100%] items-start justify-evenly gap-y-8 rounded-xl mt-10 ">
          {otherItems.map((item) => (
            <div className="flex flex-row items-center justify-between gap-x-8 px-5 rounded-xl shadow-md">
              <div className="flex flex-row items-center gap-3 p-1">
                <div
                  className="w-24 h-24 rounded-xl bg-cover bg-center"
                  style={{ backgroundImage: `url('${item.image}')` }}
                ></div>
                <div className="flex flex-col gap-1 items-start justify-start">
                  <h2 style={{fontSize: "13px"}}>
                    {item.name}
                  </h2>
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
          ))}
      </div>
    </>
  );
};
export default Otherswear 


















