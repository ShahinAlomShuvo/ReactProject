import React from "react";
import TopNavBar from "../Components/TopNavBar/TopNavBar";
import PageTop from "../SectionalComponents/PageTop";
import AllProjects from "../SectionalComponents/AllProjects";
import Footer from "../Components/Footer/Footer";

const Portfolio = () => {
  return (
    <>
      <TopNavBar />
      <PageTop title='Portfolio' />
      <AllProjects />
      <Footer />
    </>
  );
};

export default Portfolio;
