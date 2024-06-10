import Hero from "@/components/hero.component";
import HomeProperties from "@/components/home-properties.components";
import InfoBoxes from "@/components/info-boxes.component";

const HomePage = async () => {
  return (
    <>
      <Hero />
      <InfoBoxes />
      <HomeProperties />
    </>
  );
};

export default HomePage;
