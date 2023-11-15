import HeroImageBottom from "./components/Hero-Image-Bottom/Hero-Image-Bottom";
import HeroImageTop from "./components/Hero-Image-Top/Hero-Image-Top";
import HeroText from "./components/Hero-Text/Hero-Text";

export default function Home() {
  return (
    <div>
      <h1 text-3xl font-bold underline > Iriwn Mitchell</h1>
      <HeroImageTop />
      <HeroText />
      <HeroImageBottom />
    </div>
  );
}
