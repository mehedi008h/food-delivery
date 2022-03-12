import React from "react";
import CountUp from "react-countup";

import "./Resturent.scss";

const WeHave = () => {
  return (
    <div className="we_have">
      <div className="we_have_container">
        <div>
          <h2>We Have Our Best</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
            earum!
          </p>
          <button>See All</button>
        </div>
        <div className="best_container">
          <h1>
            <CountUp start={0} end={10} duration={0.5} />
          </h1>
          <h3>Resturent</h3>
        </div>
        <div className="best_container">
          <h1>
            <CountUp start={0} end={5} duration={0.5} />
          </h1>
          <h3>Kitchen</h3>
        </div>
        <div className="best_container">
          <h1>
            <CountUp start={0} end={7} duration={0.5} />
          </h1>
          <h3>Specialities</h3>
        </div>
        <div className="best_container">
          <h1>
            $
            <CountUp start={0} end={1} duration={0.5} />
          </h1>
          <h3>Cost</h3>
        </div>
      </div>
    </div>
  );
};

export default WeHave;
