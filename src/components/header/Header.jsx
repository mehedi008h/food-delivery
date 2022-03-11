import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { motion } from "framer-motion";

import "./Header.scss";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <h3>yellowKitchen</h3>
        {/* <img src={images.logo} alt="logo" /> */}
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "work", "skills", "contact"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <div className="resume">
        <a
          href="https://drive.google.com/file/d/19CS-4gf6mtoXn9bv_xlUedCWySlJS4vx/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineShoppingCart size={25} />
        </a>
      </div>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["home", "about", "work", "skills", "contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Header;
