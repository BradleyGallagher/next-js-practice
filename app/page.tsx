import HeroImageBottom from "./components/Hero-Image-Bottom/Hero-Image-Bottom";
import HeroImageTop from "./components/Hero-Image-Top/Hero-Image-Top";
import HeroText from "./components/Hero-Text/Hero-Text";

import { getClient } from "@/lib/client";
import { gql } from "@apollo/client";

const query = gql`
query ExampleQuery {
  hello
  resolved
}
`;

export default async function Home() {
  const { data } = await getClient().query({ query });

  console.log(data);

  return (
      <div>
        <h1 text-3xl font-bold underline >{data.hello} Iriwn Mitchell</h1>
        <HeroImageTop />
        <HeroText />
        <HeroImageBottom />
      </div>
  );
}