import React from "react";
import Title from "./Title";
import asset from "../asset/assets";
import { motion } from "motion/react";

const OurWork = () => {
  const workData = [
    {
      title: "District Network Infrastructure",
      description:
        "Designing and maintaining robust network infrastructure for reliable data transfer, supporting e-Governance services in the district.",
      img: asset.networks,
    },
    {
      title: "Data Center & Network Security",
      description:
        "Implementing advanced security systems to protect sensitive government data and ensure uninterrupted network operations.",
      img: asset.security,
    },
    {
      title: "Government Office Connectivity",
      description:
        "We provide secure and high-speed network connectivity to government offices across Kasaragod.",
      img: asset.offices,
    },
  ];
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.2 }}
      viewport={{ once: true }}
      id="our-work"
      className="flex flex-col items-center gap-7 px-4
        sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <Title
        title="Our latest Work"
        desc="We deliver secure, high-speed network solutions to connect government offices, strengthen infrastructure,
             and ensure reliable e-Governance services."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {workData.map((work, index) => (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            key={index}
            className="hover:scale-102 duration-500 
                        transition-all cursor-pointer"
          >
            <img src={work.img} alt="" className="w-full rounded-xl" />
            <h1 className="mt-3 mb-2 text-lg font-semibold">{work.title}</h1>
            <p className="text-sm opacity-60 w-5/6">{work.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default OurWork;
