import React from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { FaPastafarianism } from "react-icons/fa";
import {
  GiChickenOven,
  GiDrinkMe,
  GiFlatfish,
  GiFullPizza,
  GiHamburger,
} from "react-icons/gi";

import "./Resturent.scss";

const Specialities = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };
  return (
    <div className="resturent">
      <div>
        <h3>Specialities</h3>
        <button>Show All</button>
      </div>
      <div className="resturent_container">
        <div className="resturent_container_branch" ref={scrollRef}>
          <div className="specialities">
            <GiHamburger size={50} />
          </div>
          <div className="specialities">
            <GiChickenOven size={50} />
          </div>
          <div className="specialities">
            <GiFullPizza size={50} />
          </div>
          <div className="specialities">
            <GiDrinkMe size={50} />
          </div>
          <div className="specialities">
            <GiFlatfish size={50} />
          </div>
          <div className="specialities">
            <GiFlatfish size={50} />
          </div>
          <div className="specialities">
            <GiFlatfish size={50} />
          </div>
          <div className="specialities">
            <GiFlatfish size={50} />
          </div>
          <div className="specialities">
            <GiFlatfish size={50} />
          </div>
          <div className="specialities">
            <GiFlatfish size={50} />
          </div>
          <div className="specialities">
            <GiFlatfish size={50} />
          </div>
          <div className="specialities">
            <GiFlatfish size={50} />
          </div>
          <div className="specialities">
            <FaPastafarianism size={50} />
          </div>
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="gallery__arrow-icon"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Specialities;
