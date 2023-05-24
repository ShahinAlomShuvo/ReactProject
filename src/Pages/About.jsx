import React from "react";
import TopNavBar from "../Components/TopNavBar/TopNavBar";
import PageTop from "../SectionalComponents/PageTop";
import AboutDesc from "../SectionalComponents/AboutDesc";
import Footer from "../Components/Footer/Footer";

const About = () => {
  return (
    <>
      <TopNavBar />
      <PageTop title='About' />
      <AboutDesc />
      <Footer />
    </>
  );
};

export default About;
