import HeroImageBottom from "./components/Hero-Image-Bottom/Hero-Image-Bottom";
import HeroImageTop from "./components/Hero-Image-Top/Hero-Image-Top";
import HeroText from "./components/Hero-Text/Hero-Text";

export default async function Home() {
  return (
      <div>
        <HeroImageTop />
        <HeroText />
        <HeroImageBottom />
      </div>
  );
}