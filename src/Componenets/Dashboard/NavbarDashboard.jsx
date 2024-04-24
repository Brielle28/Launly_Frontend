import React, { useContext } from "react";
import { FaUser } from "react-icons/fa";
import Profile from "./Profile";
import { UserContext } from "../context/Userprovider";
const NavbarDashboard = () => {
  const { authUser } = useContext(UserContext);
  return (
    <>
      <nav className="navbar fixed items-end justify-end h-[55.5px] pl-[300px] pr-[100px] bg-white shadow-lg">
        <div className=" flex flex-row items-center justify-center gap-3">
          <p className="text-teal-600 pt-3">
          {authUser.full_name}
          </p>
          <label htmlFor="my_modal_7">
          <FaUser className="h-8 w-8 fill-teal-600" />
          </label>
          <Profile/>
        </div>
      </nav>
    </>
  );
};

export default NavbarDashboard;
