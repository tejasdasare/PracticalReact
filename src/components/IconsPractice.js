import React from "react";
import { IconContext } from "react-icons";
import { FaBitcoin } from "react-icons/fa";
import { MdExtension } from "react-icons/md";

const IconsPractice = () => {
  return (
    <div>
      In Icons
      <IconContext.Provider value={{ color: "blue", size: "5rem" }}>
        <FaBitcoin />
        <MdExtension />
      </IconContext.Provider>
    </div>
  );
};

export default IconsPractice;
