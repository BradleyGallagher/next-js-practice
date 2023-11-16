import Tile from "../components/Tile/Tile";

// Backend and Database implemetation to replace the tileData array
const tileData = [
  { title: "Tile 1", description: "Description for Tile 1.", image: "/path/to/image1.jpg" },
  { title: "Tile 2", description: "Description for Tile 2.", image: "/path/to/image2.jpg" },
  { title: "Tile 3", description: "Description for Tile 3.", image: "/path/to/image3.jpg" },
  { title: "Tile 4", description: "Description for Tile 4.", image: "/path/to/image4.jpg" },
];

export default function List() {
  return (
    <div>
      {tileData.map((tile, index) => (
        <Tile
          key={index}
          title={tile.title}
          description={tile.description}
          image={tile.image}
        />
      ))}
    </div>
  );
}