import React, { useState } from "react";
import "./Display.css";
import SeElements from "./SeElements";
function Display() {
  const [prodName, setProdName] = useState("");
  const handleInput = (e) => {
    setProdName(e.target.value);
  };
  return (
    <div className="Pages">
      <div className="content">
        <form>
          <div className="searchBar">
            <input
              type="text"
              placeholder="Search anything you want"
              onChange={handleInput}
              value={prodName}
            ></input>
            <button
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Search
            </button>
          </div>
          {prodName!==""&&<SeElements name={prodName}/>}
        </form>
        <div className="slshow">
          <div className="slideshow">
            <div className="slide">
              <img
                className="images"
                src="https://img.wallpapersafari.com/desktop/1680/1050/70/10/VQWxKr.jpg"
                alt="img"
              />
            </div>
            <div className="slide">
              <img
                className="images img2"
                src="https://img.wallpapersafari.com/desktop/1680/1050/2/33/eLN2hs.jpg"
                alt="img"
              />
            </div>
            <div className="slide">
              <img
                className="images"
                src="https://img.wallpapersafari.com/desktop/1680/1050/31/21/sWa4bR.jpg"
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Display;
