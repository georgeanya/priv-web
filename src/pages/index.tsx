import type { NextPage } from "next";
import Hero from "../../components/hero";
import Section4 from "../../components/section4";
import Section5 from "../../components/section5";
import Faq from "../../components/faq";


const Home: NextPage = () => {


  return (
    <div>
      <Hero />
      <Section4 />
      <Section5 />
      <Faq />
    </div>
  );
};

export default Home;
