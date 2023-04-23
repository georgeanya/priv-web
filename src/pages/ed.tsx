import React from 'react'
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Section4 from "../../components/section4";
import Section5 from "../../components/section5";
import Faq from "../../components/faq";
import Ed from '../../components/ed';

const EdPage = () => {
  return (
    <div>
      <Navbar />
      <Ed />
      <Section4 />
      <Section5 />
      <Faq />
      <Footer />
    </div>
  )
}

export default EdPage
