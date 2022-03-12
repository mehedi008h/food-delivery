import React from "react";
import "./Resturent.scss";

const SearchResturent = () => {
  return (
    <div className="search_resturent">
      <div className="search_container">
        <div>
          <h3>Your Nearest Resturent</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non,
            nulla.
          </p>
        </div>
        <div>
          <input placeholder="Enter Delivery address ..." type="text" />
          <button>Search</button>
        </div>
      </div>
    </div>
  );
};

export default SearchResturent;
