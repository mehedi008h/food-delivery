import React, { useEffect, useState } from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import "./Instagram.scss";

const Instagram = () => {
  const scrollRef = React.useRef(null);
  const [instagram, setInstagram] = useState([]);

  // load data
  useEffect(() => {
    fetch("./resturent.json")
      .then((res) => res.json())
      .then((data) => {
        setInstagram(data);
      });
  }, []);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };
  return (
    <div className="instagram">
      <h2>Yellow Kitchen in Instagram</h2>
      <div className="resturent_container">
        <div className="resturent_container_branch" ref={scrollRef}>
          {instagram?.map((pic) => (
            <div>
              <img src={pic.image} alt="" />
              <AiOutlineInstagram
                color="pink"
                size={40}
                className="insta_icon"
              />
            </div>
          ))}
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

export default Instagram;
