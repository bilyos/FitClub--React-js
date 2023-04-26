import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import hero_image from "../../assets/hero_image.png";
import hero_image_black from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import { motion } from "framer-motion";

const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="hero">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        {/* the best ad */}
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? "165px" : "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>The best fitness club in the town</span>
        </div>
        {/* hero Heading */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
              cumque, laboriosam
            </span>
          </div>
        </div>
        {/* figures */}
        <div className="figures">
          <div>
            <span>+140 </span>
            <span>Expertd coachs</span>
          </div>
          <div>
            <span>+978 </span>
            <span>Members joined</span>
          </div>
          <div>
            <span>+50 </span>
            <span>fitness programs</span>
          </div>
        </div>
        {/* Hero boutton */}
        <div className="hero-button">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>

        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className="heart-rate"
        >
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>
        {/* hero images */}
        <img src={hero_image} alt="" className="hero-image" />
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={transition}
          src={hero_image_black}
          alt=""
          className="hero-image-black"
        />
        {/* calories */}
        <motion.div
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
          className="calories"
        >
          <img src={Calories} alt="" />
          <div>
            <span>Calories burned </span>
            <span>22O kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
