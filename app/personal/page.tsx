import Tile from "../components/Tile/Tile";
import { getClient } from "@/lib/client";
import { gql } from "@apollo/client";
import { Key } from "react";
import HeroImageTop from "@/components/Hero-Image-Top/Hero-Image-Top";

// Define your GraphQL query
const GET_ALL_SERVICES = gql`
query Services {
  services {
    id
    title
    description
    image
  }
}
`;


const pageLinks = [
  '/business',
  '/international',
  '/personal',
  '/wealth', 
];

export default async function List() {
  // Execute the query
  const { data } = await getClient().query({ query: GET_ALL_SERVICES });

  console.log(data);

  // Check if data is loaded and has the allServices field
  if (!data || !data.services) {
    return <div>Loading...</div>; // Or handle the loading state appropriately
  }

  // Render your tiles based on the fetched data
  return (
    <div>
    <HeroImageTop />
    <h1> Personal </h1>
    <div className="Tile_container">
      {data.services.map((service: { id: string; title: string; description: string; image: string;}, index) => (
        <Tile
          key={service.id}
          title={service.title}
          description={service.description}
          image={service.image}
          pageLink={pageLinks[index]}
        />
      ))}
    </div>
    </div>
  );
}
