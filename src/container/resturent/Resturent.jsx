import React, { useEffect, useState } from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import Rating from "react-rating";

import "./Resturent.scss";

const Resturent = () => {
  const scrollRef = React.useRef(null);
  const [resturent, setResturent] = useState([]);
  console.log(resturent);

  // load data
  useEffect(() => {
    fetch("./resturent.json")
      .then((res) => res.json())
      .then((data) => {
        setResturent(data);
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
    <div className="resturent">
      <div>
        <h3>Resturent</h3>
        <button>Show All</button>
      </div>
      <div className="resturent_container">
        <div className="resturent_container_branch" ref={scrollRef}>
          {resturent?.map((branch) => (
            <div>
              <img src={branch?.image} alt="" />
              <div>
                <div>
                  <h4>{branch?.name}</h4>
                  <p>{branch?.address}</p>
                </div>
                <span>
                  <AiFillStar />
                  {branch?.rating}
                </span>
              </div>
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

export default Resturent;
