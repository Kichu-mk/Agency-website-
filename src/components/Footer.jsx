import React from "react";
import assets from "../assets/assets";
import asset from "../asset/assets";
import { motion } from "motion/react";

const Footer = ({ theme }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="flex flex-col items-center"
    >
      <motion.div
        className="bg-slate-100 sm:w-[95%] rounded-t-lg dark:bg-gray-900 pt-10 sm:pt-10 mt-20 sm:mt-40 px-4
        sm:px-10 lg:px-24 xl:px-40 "
      >
        <div className="flex justify-between lg:items-center max-lg:flex-col gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-5 text-sm text-gray-700 dark:text-gray-400"
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
            <p className="max-w-md">
              Empowering Kasaragod with seamless connectivity and efficient
              e-Governance services.
            </p>
            <ul className="flex gap-8">
              <li>
                <a href="#hero" className="hover:text-primary">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary">
                  Services
                </a>
              </li>
              <li>
                <a href="#our-work" className="hover:text-primary">
                  Our Work
                </a>
              </li>
              <li>
                <a href="#aboutus" className="hover:text-primary">
                  About Us
                </a>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-600 dark:text-gray-400"
          >
            <h3 className="font-semibold">Keep in touch</h3>
            <p className="text-sm mt-2 mb-6">
              The latest news, articles, and resources, sent to your inbox
              weekly.
            </p>
            <div className="flex gap-2 text-sm">
              <input
                type="email"
                placeholder="Enter your E-mail"
                className="
                        w-full p-3 text-sm outline-none rounded dark:text-gray-200 bg-transparent border
                        border-gray-300 dark:border-gray-500"
              />
              <button className="bg-primary text-white rounded px-6">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
        <hr className="border-gray-300 dark:border-gray-600 my-6" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="pb-6 text-sm text-gray-500 flex justify-center
            sm:justify-between gap-4 flex-wrap"
        >
          <p className="">copyright 2026 © All rights reserved</p>
          <div className="flex items-center justify-between gap-4">
            <img src={assets.facebook_icon} alt="" />
            <a href="https://www.instagram.com/kichu._.mk/" target="_blank">
              <img src={assets.instagram_icon} alt="" />
            </a>
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Footer;
