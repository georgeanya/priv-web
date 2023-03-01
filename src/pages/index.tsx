import type { NextPage } from "next";
import Hero from "../../components/hero";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Section4 from "../../components/section4";
import Section5 from "../../components/section5";
import Faq from "../../components/faq";


const Home: NextPage = () => {


  return (
    <div>
      <Navbar/>
      <Hero />
      <Section4 />
      <Section5 />
      <Faq />
      <Footer/>
    </div>
  );
};

export default Home;
