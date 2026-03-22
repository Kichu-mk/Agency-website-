import React, { useState } from "react";
import assets from "../assets/assets";
import Title from "./Title";
import ServiceCard from "./serviceCard";
import { motion } from "motion/react";

const Services = () => {
  const servicesData = [
    {
      title: "Network Connectivity",
      description:
        "We provide secure and high-speed network connectivity across State, District, and Block level government offices.",
      icon: assets.ads_icon,
    },
    {
      title: "Video Conferencing",
      description:
        "We enable seamless video communication for government meetings, coordination, and remote administration.",
      icon: assets.marketing_icon,
    },
    {
      title: "Data & Application Services",
      description:
        "We support hosting and access to e-Governance applications, ensuring smooth data sharing between departments. ",
      icon: assets.content_icon,
    },
    {
      title: "Network Security",
      description:
        "We ensure a safe and reliable network with advanced security systems, monitoring, and data protection. ",
      icon: assets.social_icon,
    },
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.2 }}
      viewport={{ once: true }}
      id="services"
      className="relative flex flex-col items-center gap-7 px-4
        sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <img
        src={assets.bgImage2}
        alt=""
        className="absolute -top-110 -left-70 -z-z dark:hidden"
      />

      <Title
        title="How can we help?"
        desc="Empowering Kerala Government offices with secure, 
            high-speed connectivity and digital infrastructure through KSWAN."
      />

      <div className="flex flex-col md:grid grid-cols-2">
        {servicesData.map((service, index) => {
          return <ServiceCard key={index} service={service} index={index} />;
        })}
      </div>
    </motion.div>
  );
};

export default Services;
