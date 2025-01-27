import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { MdClose, MdMenu } from "react-icons/md";
import logo from "../assets/logo.png";
import { useAuth0 } from "@auth0/auth0-react";
import ProfileMenu from "./ProfileMenu";
import { LuUserRound } from "react-icons/lu";

const Header = () => {

  const [active, setActive] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);
  const toggleMenu = () => setMenuOpened(!menuOpened);
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        // close the menu if open when scrolling occurs
        if (menuOpened) {
          setMenuOpened(false);
        }
      }
      // detect scroll 
      setActive(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    // clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuOpened]); // DEpendency array ensures that the effect runs when menuOpened changes

  return (
    <header className={`${active ? "py-1 bg-white shadow-md" : "py-2"} max-padd-container fixed top-0 w-full left-0 right-0 z-50 transition-all duration-200 px-5`}>
      {/* container */}
      <div >
        <div className="flexBetween">
          {/* logo */}
          <div>
            <Link to={"/"}>
              <img src={logo} alt="" className="h-16" />
            </Link>
          </div>
          {/* navbar */}
          <div className="flexCenter gap-x-4">
            {/* Desktop */}
            <Navbar
              containerStyles={
                "hidden xl:flex gap-x-5 xl:gap-x-12 capitalize medium-15"
              }
            />
            {/* Mobile */}
            <Navbar
              containerStyles={`${menuOpened
                  ? "flex items-start flex-col gap-y-8 capitalize fixed top-20 right-8 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300 z-50"
                  : "flex items-start flex-col gap-y-8 capitalize fixed top-20 -right-[100%] p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300"
                }`}
            />
          </div>
          {/* buttons */}
          <div className="flexBetween gap-x-3 sm:gap-x-5 bold-16">
            {!menuOpened ? (
              <MdMenu
                onClick={toggleMenu}
                className="xl:hidden cursor-pointer text-3xl hover:text-secondary"
              />
            ) : (
              <MdClose
                onClick={toggleMenu}
                className="xl:hidden cursor-pointer text-3xl hover:text-secondary"
              />
            )}
            {!isAuthenticated ? (<button onClick={loginWithRedirect} className="flexCenter gap-x-2 !px-5 btn-dark">
              <LuUserRound className="text-xl"/>
              <span>Log In</span>
            </button>) : (
              <ProfileMenu user={user} logout={logout} />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;