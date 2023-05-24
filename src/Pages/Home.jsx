import React from "react";
import TopNavBar from "../Components/TopNavBar/TopNavBar";
import TopBanner from "../Components/TopBanner/TopBanner";
import Services from "../Components/Services/Services";
import Analaycis from "../Components/Analaycis.jsx/Analaycis";
import Summary from "../Components/Summary/Summary";
import RecentProjects from "../Components/RecentProjects/RecentProjects";
import Courses from "../Components/Courses/Courses";
import Video from "../Components/Video/Video";
import ClientReviews from "../Components/ClientReviews/ClientReviews";
import Footer from "../Components/Footer/Footer";

const Home = () => {
  return (
    <>
      <TopNavBar />
      <TopBanner />
      <Services />
      <Analaycis />
      <Summary />
      <RecentProjects />
      <Courses />
      <Video />
      <ClientReviews />
      <Footer />
    </>
  );
};

export default Home;
