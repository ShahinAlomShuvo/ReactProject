import React from "react";
import TopNavBar from "../Components/TopNavBar/TopNavBar";
import PageTop from "../SectionalComponents/PageTop";
import Services from "../Components/Services/Services";
import ContactSection from "../SectionalComponents/ContactSection";
import Footer from "../Components/Footer/Footer";

const ServicePage = () => {
  return (
    <>
      <TopNavBar />
      <PageTop title='My Services' />
      <Services />
      <ContactSection />
      <Footer />
    </>
  );
};

export default ServicePage;
