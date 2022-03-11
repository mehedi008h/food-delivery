import React from "react";
import { MdAvTimer, MdOutlineDeliveryDining } from "react-icons/md";
import { GiSelfLove } from "react-icons/gi";

import banner_img from "../../assets/banner-img.png";
import "./Banner.scss";

const Banner = () => {
  return (
    <div className="app__header">
      <div className="banner_container">
        <div>
          <h1>Enjoy Food all over the world</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            accusantium, quidem voluptatum vero in perferendis mollitia quia
            exercitationem maxime atque?
          </p>
          <div className="button">
            <button>Delivery</button>
            <button>Takeout</button>
          </div>
        </div>
        <div>
          <img src={banner_img} alt="" />
        </div>
      </div>
      <div className="service">
        <div>
          <MdAvTimer size={60} />
          <p>Delivery in all paris in less than 30 minutes</p>
        </div>
        <div>
          <MdOutlineDeliveryDining size={60} />
          <p>Free delivery from 29 euros</p>
        </div>
        <div>
          <GiSelfLove size={60} />
          <p>Only fresh and French products</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
