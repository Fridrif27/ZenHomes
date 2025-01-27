import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdAddHome, MdHomeWork, MdPermContactCalendar } from "react-icons/md";
import { RiCheckboxMultipleBlankFill } from "react-icons/ri";
import AddPropertyModal from "./AddPropertyModal";
import useAuthCheck from "../hooks/useAuthCheck";

const Navbar = ({ containerStyles }) => {
  const [modalOpened, setModalOpened] = useState(false);
  const { validateLogin } = useAuthCheck()
  const handleAddPropertyClick = ()=> {
    if(validateLogin()){
      setModalOpened(true)
    }
  }

  return (
    <nav className={`${containerStyles}`}>
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive
            ? "active-link flexCenter gap-x-1 rounded-full py-1"
            : "flexCenter gap-x-1 rounded-full py-1"
        }
      >
        <div>Home</div>
      </NavLink>
      <NavLink
        to={"/listing"}
        className={({ isActive }) =>
          isActive
            ? "active-link flexCenter gap-x-1 rounded-full py-1"
            : "flexCenter gap-x-1 rounded-full py-1"
        }
      >
        <div>listing</div>
      </NavLink>
      <NavLink
        to={"mailto:inquiries.fridrifd3554@gmail.com"}
        className={"flexCenter gap-x-1 rounded-full py-1 cursor-pointer"}
      >
        <div>Contact</div>
      </NavLink>
      <div
        onClick={handleAddPropertyClick}
        className={"flexCenter gap-x-1 rounded-full py-1 cursor-pointer"}
      >
        <div>add property</div>
      </div>
      <AddPropertyModal opened={modalOpened} setOpened={setModalOpened} />
    </nav>
  );
};

export default Navbar;