import React from "react";
import Image from "next/image";
import './Tile.scss';

interface TileProps {
  title: string;
  description: string;
  image: string;
}

const Tile: React.FC<TileProps> = ({ title, description, image }) => {
  return (
    <div className="container">
    <div className="tile">
      <h3>{title}</h3>
      <p>{description}</p>
      <Image src={image} alt={title} width={500} height={300} />
      <button>Learn more...</button>
    </div>
    </div>
  );
};

export default Tile;
