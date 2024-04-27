import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState({});
  const [orders, setOrders] = useState([]);
  const [isloading, setIsloading] = useState(null);

  const [booking, setBooking] = useState({
    clothes: [
    ],
    address: "123, Example Street, Example City, Example Country",
    instructions: "Please wash with care",
    total_price: 0,
    phone: "string",
    pickup_date: "2022-12-31",
    total_quantity: function () {
      return this.clothes.reduce((acc, cuu) => cuu.quantity + acc, 0);
    },
  });

  useEffect(() => {
    setBooking({
      ...booking,
      total_price: booking.clothes.reduce(
        (acc, cuu) => cuu.price * cuu.quantity + acc,
        0
      ).toFixed(2),
      total_quantity: booking.clothes.reduce(
        (acc, cuu) => cuu.quantity + acc,
        0
      ),
    });
  }, [booking.clothes]);

  const value = {
    booking,
    setBooking,
    isloading,
    setIsloading,
    authUser,
    setAuthUser,
    orders,
    setOrders,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
