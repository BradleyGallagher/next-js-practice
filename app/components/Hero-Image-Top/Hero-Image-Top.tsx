import React from "react";
import './Hero-Image-Top.scss';
import Image from "next/image";

const HeroImageTop = () => {
  return (
    <div>
      <div className="hero">
        <Image
          className="image"
          src="/Laughing.jpg"
          alt=""
          width={600}
          height={600}
        />
      </div>
    </div>
  );
};

export default HeroImageTop;
