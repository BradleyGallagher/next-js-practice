import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./Tile.scss";

interface TileProps {
  title: string;
  description: string;
  image: string;
  pageLink: string;
}

const Tile: React.FC<TileProps> = ({ title, description, image, pageLink }) => {
  return (
    <div className="container">
      <div className="tile">
        <h3>{title}</h3>
        <p>{description}</p>
        <Image src={image} alt={title} width={500} height={300} />
          <div className="button-like">
            <Link href={pageLink}>
              <p> Test </p>
            </Link>
          </div>
      </div>
    </div>
  );
};

export default Tile;