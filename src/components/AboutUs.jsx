import React from "react";
import Title from "./Title";
import { motion } from "motion/react";
import Gradient from "./Gradient";
import asset from "../asset/assets";

const AboutUs = ({ theme }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.2 }}
      viewport={{ once: true }}
      id="aboutus"
      className="flex flex-col items-center gap-7 px-4
        sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <Title
        title="About Us"
        desc="KSWAN is a secure, high-speed network that connects government offices and enables efficient e-Governance services across Kerala."
      />

      <div className="flex max-sm:flex-col  justify-center px-2 gap-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-5"
        >
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-gray-600 dark:text-gray-300  sm:text-lg leading-relaxed sm:text-justify mb-3 sm:mb-6"
          >
            <Gradient title={"Kerala State Wide Area Network (KSWAN)"} />{" "}
            Kasaragod is a vital part of Kerala’s core digital infrastructure,
            designed to provide secure, reliable, and high-speed connectivity to
            government offices across the Kasaragod district. It plays a key
            role in enabling seamless communication and efficient delivery of
            e-Governance services to citizens.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-gray-600 dark:text-gray-300  sm:text-lg leading-relaxed sm:text-justify mb-3 sm:mb-6"
          >
            The KSWAN project is implemented under the guidance of{" "}
            <Gradient title={"Kerala State IT Mission (KSITM)"} />
            , which is the nodal agency for ICT initiatives in the state. The
            execution, operation, and maintenance of the network are entrusted
            to <Gradient title={"RailTel Corporation of India Ltd."} />, a
            Government of India enterprise known for its robust telecom and
            network infrastructure services.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-gray-600 dark:text-gray-300  sm:text-lg leading-relaxed sm:text-justify mb-3 sm:mb-6"
          >
            <Gradient title={"KSWAN Kasaragod"} /> connects various levels of
            government offices including district headquarters, block offices,
            and other administrative institutions through a secure and scalable
            network architecture. The infrastructure is built using advanced
            technologies such as <Gradient title={"fiber-optic"} />{" "}
            communication and modern networking equipment to ensure
            uninterrupted connectivity.
          </motion.p>
        </motion.div>
        <div className="flex flex-col items-center justify-center gap-10">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            key="index"
            className="flex items-center gap-3 p-3
                       rounded-xl border border-gray-100 dark:border-gray-900 bg-white
                     dark:bg-gray-900 shadow-xl shadow-gray-300 dark:shadow-black
                       hover:scale-103 transition-all duration-400 -mt-5"
          >
            <img src={asset.ksitm} alt="" className="w-30 h-auto rounded-md" />
            <div className="">
              <h3 className="font-bold text-lg">KSITM</h3>
              <p className="text-sm opacity-60">
                Kerala State IT Mission (KSITM) is the nodal agency of the
                Government of Kerala responsible for implementing Information
                and Communication Technology (ICT) initiatives across the state.
                Established to drive digital transformation, KSITM plays a
                crucial role in developing and managing key e-Governance
                projects and infrastructure.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            key="index"
            className="flex items-center gap-3 p-3
                       rounded-xl border border-gray-100 dark:border-gray-900 bg-white
                     dark:bg-gray-900 shadow-xl shadow-gray-300 dark:shadow-black
                       hover:scale-103 transition-all duration-400"
          >
            <div className="">
              <h3 className="font-bold text-lg">RailTel</h3>
              <p className="text-sm opacity-60">
                RailTel Corporation of India Ltd. is a Government of India
                enterprise under the Ministry of Railways and one of the largest
                neutral telecom infrastructure providers in the
                country.Established to modernize the existing telecom system for
                Indian Railways, RailTel has grown into a leading provider of
                broadband and VPN services across India.
              </p>
            </div>
            <img
              src={theme === "dark" ? asset.railtail_d : asset.railtail_l}
              alt=""
              className="w-30 h-auto rounded-md"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutUs;
