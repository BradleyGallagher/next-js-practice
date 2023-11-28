import React from "react";
import Image, { ImageProps } from "next/image";
import Link from "next/link";
import "./Tile.scss";
interface TileProps {
  title: string;
  description: string;
  image: string;
  pageLink: string; // Define as array of strings
  index: any;
}
// This function is not needed if you are passing pageLinks as props
// const pageLinks: any = () => {
//   const pageLinks = [
//     '/business',
//     '/international;',
//     '/personal',
//     '/wealth',
//   ];
// };
const Tile: React.FC<TileProps> = ({ title, description, image, pageLink, index}) => {
  return (
    <div className="container">
      <div className="tile">
        <h3>{title}</h3>
        <p>{description}</p>
        <Image src={image} alt={title} width={500} height={300} objectFit="cover" as="image" /> {/* Example of using ImageProps */}
          <div key={index} className="button-like">
            <Link href={pageLink}>
              <p> Test </p>
            </Link>
          </div>
      </div>
    </div>
  );
};
export default Tile;