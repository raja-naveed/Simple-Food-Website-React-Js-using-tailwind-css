import React from "react";
import { motion } from "framer-motion";
import HomeImg from "../Assets/home-banner-image.png";

const First = () => {
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };

  const imageVariants = {
    hidden: {
      x: -200,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const textVariants = {
    hidden: {
      x: 200,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.1,
      textShadow: "0px 0px 8px rgb(255,255,255)",
      boxShadow: "0px 0px 8px rgb(255,255,255)",
      transition: {
        duration: 0.3,
        yoyo: Infinity,
      },
    },
  };

  return (
    <div>
      <motion.div
        className="flex flex-row items-center justify-around px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="container w-1/2 mx-8" variants={textVariants}>
          <div className="heading text-6xl font-medium my-1">
            <h2>Your Favourite</h2>
            <h2 className="py-5">Food Delivered </h2>
            <h2>Hot & Fresh</h2>
          </div>
          <div className="paragraph text-lg font-semibold my-4">
            <p>Healthy switcher chefs do all the prep work, like </p>
            <p>peeding, chopping & marinating, so you can cook a fresh food.</p>
          </div>
          <motion.div
            className="button font-extrabold"
            variants={buttonVariants}
            whileHover="hover"
          >
            <button className="bg-orange-600 py-3 px-5 rounded-full ">
              Order Now
            </button>
          </motion.div>
        </motion.div>
        <motion.div className="img w-2/5" variants={imageVariants}>
          <motion.img
            className=""
            src={HomeImg}
            alt=""
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { duration: 1 } }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default First;
