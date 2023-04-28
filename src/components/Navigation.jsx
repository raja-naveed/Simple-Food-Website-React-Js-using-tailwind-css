import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Navigation = () => {
  return (
    <div className="container flex flex-row items-center justify-between m-6">
      <div className="logo">
        <h2 className="text text-5xl font-bold text-orange-500">FOODIE</h2>
      </div>
      <div className="nav font-bold text-lg">
        <ul className="flex flex-row items-center mx-6 ">
          <Link to="place-to-visit" spy={true} smooth={true} offset={50} duration={500}>
            <motion.li
              whileHover={{ scale: 1.2, boxShadow: "0px 0px 8px rgba(255, 165, 0, 0.8)" }}
              className="mx-6 hover:text-orange-300"
            >
              <a href="#">Home</a>
            </motion.li>
          </Link>
          <Link to="about" spy={true} smooth={true} offset={50} duration={500}>
            <motion.li
              whileHover={{ scale: 1.2, boxShadow: "0px 0px 8px rgba(255, 165, 0, 0.8)" }}
              className="mx-6 hover:text-orange-300"
            >
              <a href="#">About</a>
            </motion.li>
          </Link>
          <Link to="testinomail" spy={true} smooth={true} offset={50} duration={500}>
            <motion.li
              whileHover={{ scale: 1.2, boxShadow: "0px 0px 8px rgba(255, 165, 0, 0.8)" }}
              className="mx-6 hover:text-orange-300"
            >
              <a href="#">Testimonial</a>
            </motion.li>
          </Link>
          <Link to="contact" spy={true} smooth={true} offset={50} duration={500}>
            <motion.li
              whileHover={{ scale: 1.2, boxShadow: "0px 0px 8px rgba(255, 165, 0, 0.8)" }}
              className="mx-6 hover:text-orange-300"
            >
              <a href="#">Contact</a>
            </motion.li>
          </Link>
          <li className="mx-6 text-white">
            <button className="bg-orange-400 py-3 px-5 rounded-full ">Booking Now </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
