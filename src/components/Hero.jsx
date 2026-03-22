import React from "react";
import assets from "../assets/assets";
import asset from "../asset/assets";
import { motion } from "motion/react";
import { delay } from "motion";

const Hero = () => {
  return (
    <div>
      <div
        id="hero"
        className="flex flex-col items-center gap-6 py-20 px-4 sm:px-12
            lg:px-24 xl:px-40 text-center w-full overflow-hidden text-gray-700 
            dark:text-white"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          viewport={{ once: true }}
          className="inline-flex items-center border border-gray-300 p-1 
                rounded-full gap-2 p-1.5 pr-4"
        >
          <img src={assets.group_profile} alt="" className="w-20" />
          <p className="text-xs font-medium">Trusted by 10k+ people</p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium
                xl:leading-[95px] max-w-5xl"
        >
          Kerala State Wide Area Network,
          <span
            className="bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text 
                text-transparent"
          >
            {" "}
            Kasaragod
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          viewport={{ once: true }}
          className="text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75
                 max-w-4/5 sm:max-w-lg pb-3"
        >
          We provide high-speed, secure, and reliable network solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          viewport={{ once: true }}
          className="relative"
        >
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            viewport={{ once: true }}
            src={asset.kgd_hero}
            alt=""
            className="w-full max-w-6xl rounded-4xl"
          />
          <img
            src={assets.bgImage1}
            alt=""
            className="absolute -top-40 -rihgt-40
                    sm:-top-100 sm:-right-70 -z-1 dark:hidden"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
