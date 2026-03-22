import React, { useState } from "react";
import assets from "../assets/assets";
import asset from "../asset/assets";
import ThemeToggleBtn from "./ThemeToggleBtn";
import { motion } from "motion/react";

const NavBar = ({ theme, setTheme }) => {
  const [sideBar, setSideBar] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 
        py-3 sticky top-0 z-20 backdrop-blur-xl bg-white/50  font-medium dark:bg-gray-900/70"
    >
      <div className="flex items-center ">
        <img src={asset.logo} alt="" className="w-13 sm:w-20" />
        <div>
          <h1 className="text-xl sm:text-2xl font-bold dark:text-white">
            K S W A N
          </h1>
          <p
            className="bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text 
                text-transparent text-xs sm:text-sm font-medium -mt-1"
          >
            Kasaragod
          </p>
        </div>
      </div>

      <div
        className={`text-gray-700 dark:text-white sm:text-sm ${!sideBar ? "max-sm:w-0" : "max-sm:w-50 max-sm:pl-10"}
            max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col
            max-sm:bg-primary max-sm:text-white max-sm:pt-20 flex sm:items-center gap-5 transition-all`}
      >
        <img
          src={assets.close_icon}
          alt=""
          onClick={() => {
            sideBar === true ? setSideBar(false) : setSideBar(true);
          }}
          className="w-5 absolute right-4 top-4 sm:hidden"
        />

        <a
          href="#"
          className="sm:hover:border-b"
          onClick={() => setSideBar(false)}
        >
          Home
        </a>
        <a
          href="#services"
          className="sm:hover:border-b"
          onClick={() => setSideBar(false)}
        >
          Services
        </a>
        <a
          href="#our-work"
          className="sm:hover:border-b"
          onClick={() => setSideBar(false)}
        >
          Our Work
        </a>
        <a
          href="#aboutus"
          className="sm:hover:border-b"
          onClick={() => setSideBar(false)}
        >
          About Us
        </a>
      </div>
      <div className="flex items-center gap-2 sm:gap-4">
        <ThemeToggleBtn theme={theme} setTheme={setTheme} />

        <img
          src={theme === "dark" ? assets.menu_icon_dark : assets.menu_icon}
          alt=""
          className="w-8 sm:hidden cursor-pointer"
          onClick={() => setSideBar(true)}
        />

        <a
          href="#contact"
          className="text-sm max-sm:hidden flex items-center gap-2 bg-primary
                text-white px-6 py-2 rounded-full cursor-pointer hover:scale-103 ransition-allt"
        >
          Connect <img src={assets.arrow_icon} width={14} alt="" />
        </a>
      </div>
    </motion.div>
  );
};

export default NavBar;
