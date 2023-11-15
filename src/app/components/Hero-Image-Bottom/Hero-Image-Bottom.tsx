import React from "react";
import "./Hero-Image-Bottom.css";
import Image from "next/image";

const HeroImageBottom = () => {
  return (
    <div className="hero-container">
      <div className="hero-image">
        <Image
          className="image"
          src="/Bird.jpg"
          alt=""
          width={600}
          height={600}
        />
      </div>
      <div className="hero-text">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          venenatis orci pharetra ipsum tincidunt egestas. Nulla semper bibendum
          augue sed malesuada. Duis nisl justo, consectetur ac gravida et,
          fringilla ut mi. Aenean eget nibh nec ex volutpat aliquam. Maecenas at
          tellus ac justo mattis rutrum. Integer id leo at arcu faucibus
          ultrices. Donec pulvinar lectus purus, sit amet semper tortor dictum
          et. Donec vehicula malesuada nibh, at semper orci pellentesque a.
          Aliquam sollicitudin, lorem vitae scelerisque suscipit, libero arcu
          vulputate tortor, ac egestas elit eros id ligula.
        </p>
      </div>
    </div>
  );
};

export default HeroImageBottom;
