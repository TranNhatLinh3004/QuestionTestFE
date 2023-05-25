import React from "react";
import logo from "../../assets/images/logoNCC 1.png";
import Content from "../../components/content/Content";
import "./home.css";

function Home(props) {
  return (
    <section className="hero__section" id="home">
      <div className="logo">
        <img src={logo} alt="" />
      </div>

      <div className="hero__content">
        <p className="title">Lorem ipsum dolor sit asmet?</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique
          consequat placerat. Vestibulum auctor pellentesque sem, eu posuere
          erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis,
          ligula in mattis sodales, augue justo tristique nulla, sed lacinia
          ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh
          auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque
          suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet
          luctus augue tristique eu. Donec vulputate odio neque, sed semper
          turpis pellentesque a.
        </p>
      </div>
      <Content />
    </section>
  );
}

export default Home;
