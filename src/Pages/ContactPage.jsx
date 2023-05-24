import React from "react";
import TopNavBar from "../Components/TopNavBar/TopNavBar";
import PageTop from "../SectionalComponents/PageTop";
import ContactSection from "../SectionalComponents/ContactSection";
import Footer from "../Components/Footer/Footer";

const ContactPage = () => {
  return (
    <>
      <TopNavBar />
      <PageTop title='Contact' />
      <ContactSection />
      <Footer />
    </>
  );
};

export default ContactPage;
