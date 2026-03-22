import React from "react";

const Gradient = ({ title }) => {
  return (
    <>
      <span
        className="bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text 
            text-transparent"
      >
        {title}
      </span>
    </>
  );
};

export default Gradient;
