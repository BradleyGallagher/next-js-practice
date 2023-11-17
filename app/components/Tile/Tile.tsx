import React from "react";
import Image from "next/image";
import './Tile.css';

interface TileProps {
  title: string;
  description: string;
  image: string;
}

const Tile: React.FC<TileProps> = ({ title, description, image }) => {
  return (
    <div className="tile">
      <h2>{title}</h2>
      <p>{description}</p>
      {/* <Image src={image} alt={title} width={100} height={100} /> */}
      <button>Learn more...</button>
    </div>
  );
};

export default Tile;
