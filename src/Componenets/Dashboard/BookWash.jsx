import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import Otherswear from "./Otherswear";
import Mencloth from "./Mencloth";
import WomenWear from "./WomenWear";

import { UserContext } from "../context/Userprovider";
import { bookawash } from "../Api/Api";
const BookWash = () => {
  const [showType, setShowType] = useState("men");
  const {
    formFields,
    updateFormData,
    setBooking,
    booking,
  } = useContext(UserContext);
 

  const handleShowType = (showType) => {
    setShowType(showType);
  };
  const updateBooking = (option, booking) => {
    const { category, name } = option;
    const restBooking = booking.clothes.filter(
      (booking) => booking.category != category || booking.name != name
    );
    return { ...booking, clothes: [...restBooking, option] };
  };
  const handleOptionsSelected = (options) => {
    setBooking(updateBooking(options, booking));
  };

  const submit = async () => {
    try {
      const res = await bookawash(booking);
      console.log(res);
    } catch (errorBooking) {
      console.log({ errorBooking });
    }
  };

  const getTotalForCat = (cat) =>
    booking.clothes.reduce((total, booking) => {
      if (booking.category == cat)
        return booking.price * booking.quantity + total;
      return total;
    }, 0);

  return (
    <>
      <div className="w-[80%] ml-[80px] flex flex-col items-center justify-center rounded-xl shadow-2xl pb-10 bg-white">
        {/* buttons */}
        <div className="w-[90%] flex flex-row items-center justify-around gap-10 py-10 border-b-2 border-[#4e6475]">
          {[
            { name: "male", type: "men" },
            { name: "female", type: "women" },
            { name: "others", type: "other" },
          ].map((item) => (
            <button
              key={item}
              className="btn w-[20%]"
              style={{
                backgroundColor: item.type == showType && "rgb(20 184 166",
              }}
              onClick={() => handleShowType(item.type)}
            >
              <p className="uppercase">{item.name}</p>
            </button>
          ))}
        </div>
        {/* different components for theirs cloths */}
        <div>
          <WomenWear
            onOptionsSelected={(option) => handleOptionsSelected(option)}
            key={showType}
            clothes={booking.clothes}
            type={showType}
          />
        </div>
        {/* total prices */}
        <div className="flex flex-row items-center justify-center mx-14 mt-8">
          <div className="flex flex-col items-center justify-center mt-4 border-t border-gray-200 bg-white w-[150px] h-24 rounded-xl text-white shadow-xl ">
            <h3 style={{ fontSize: "10px" }}> MALE WEAR </h3>
            <p className="text-[13px] text-black font-semibold">
              Total Price: {getTotalForCat("men").toFixed(2)}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center mt-4 border-t border-gray-200 bg-white w-[150px] h-24 rounded-xl text-white shadow-xl ml-6">
            <h3 style={{ fontSize: "10px" }}> FEMALE WEAR </h3>
            <p className="text-[13px] text-black font-semibold">
              Total Price: {getTotalForCat("women").toFixed(2)}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center mt-4 border-t border-gray-200 bg-white w-[150px] h-24 rounded-xl text-white shadow-xl ml-6">
            <h3 style={{ fontSize: "10px" }}> OTHERS </h3>
            <p className="text-[13px] text-black font-semibold">
              Total Price: {getTotalForCat("other").toFixed(2)}
            </p>
          </div>
        </div>
        {/* pick up address and phone number */}
        <div className="flex flex-row items-start justify-center mt-5 w-[80%] gap-3 py-5 pl-3 ml-10">
          <div className="flex flex-col items-start justify-center w-[50%]">
            <h3 style={{ fontSize: "22px", fontStyle: "bold" }}>
              {" "}
              Home Address{" "}
            </h3>
            <input
              type="text"
              name="HomeAddress"
              value={booking.address}
              onChange={(e) => setBooking({...booking,address:e.target.value})}
              placeholder="Type here"
              className="input input-bordered w-[80%]"
            />
          </div>
          <div className="flex flex-col items-start justify-center w-[50%]">
            <h3 style={{ fontSize: "22px", fontStyle: "bold" }}>
              {" "}
              Phone Number{" "}
            </h3>
            <input
              type="text"
              name="PhoneNumber"
              value={booking.phone}
              onChange={(e) => setBooking({...booking,phone:e.target.value})}
              className="input input-bordered w-[80%]"
            />
          </div>
        </div>
        {/* pick up date */}
        <div className="flex flex-row  ml-10 items-start justify-center mt-5 w-[80%] gap-3 py-5 pl-3">
          <div className="flex flex-col items-start justify-center w-[50%]">
            <h3 style={{ fontSize: "22px", fontStyle: "bold" }}>
              {" "}
              Pick Up date{" "}
            </h3>
            <input
              type="date"
              name="date"
              value={booking.pickup_date}
              onChange={(e) => setBooking({...booking,time:e.target.value})}
              placeholder="Type here"
              className="input input-bordered w-[80%]"
            />
          </div>
          <div className="flex flex-col items-start justify-center w-[50%]">
            <h3 style={{ fontSize: "22px", fontStyle: "bold" }}>
              {" "}
              Pick up Time{" "}
            </h3>
            <input
              type="time"
              name="time"
              value={booking.pickup_date}
              onChange={(e) => setBooking({...booking,time:e.target.value})}
              className="input input-bordered w-[80%]"
            />
          </div>
        </div>
        {/* confirm order */}
        <Link to="/dash/bookawash/summary" className="w-[60%]">
          <div className="flex flex-col items-center justify-center mt-7 w-[80%] ml-6">
            <button
              onClick={submit}
              className="btn w-full bg-[#3272a4] text-white text-[20px] hover:text-[#3272A4]"
            >
              {" "}
              Confirm Order (total:{ booking.total_price})
            </button>
          </div>
        </Link>
      </div>
      <div>{JSON.stringify(booking)}</div>
    </>
  );
};

export default BookWash;
