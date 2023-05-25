import React from "react";
import "./content.css";
import cssicon from "../../assets/images/css-icon 1.png";
import htmlicon from "../../assets/images/html-icon 1.png";
import urlicon from "../../assets/images/url-icon 1.png";

const data = [
  {
    img: cssicon,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet  suscipit accumsan. Aenean consequat condimentum velit ut tempor.  Nam porta massa in metus bibendum congue. Pellentesque ultrices  liquam egestas nunc at",
  },
  {
    img: htmlicon,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet  suscipit accumsan. Aenean consequat condimentum velit ut tempor.  Nam porta massa in metus bibendum congue. Pellentesque ultrices  liquam egestas nunc at",
  },
  {
    img: urlicon,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet  suscipit accumsan. Aenean consequat condimentum velit ut tempor.  Nam porta massa in metus bibendum congue. Pellentesque ultrices  liquam egestas nunc at",
  },
];

function Content(props) {
  return (
    <div className="container">
      <div className="content">
        {data.map((item, index) => {
          return (
            <div className="content-text" key={index}>
              <h3>Lorem ipsum dolor sit amet</h3>
              <div className="img-text">
                <img src={item.img}></img>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  non dui sodales, faucibus libero ut, posuere felis. Donec
                  imperdiet suscipit accumsan. Aenean consequat condimentum
                  velit ut tempor. Nam porta massa in metus bibendum congue.
                  Pellentesque ultrices liquam egestas nunc at{" "}
                </p>
              </div>
              <p className="sub">
                ullamcorper ultricies. Donec feugiat velit nulla, vel sodales
                est ullamcorper id. Aenean consequat condimentum velit ut
                tempor. Nam porta massa in metus bibendum congue. Pellentesque
                ultrices vestibulum mattis.
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Content;
