import React from "react";
import TopNavBar from "../Components/TopNavBar/TopNavBar";
import PageTop from "../SectionalComponents/PageTop";
import AllCourses from "../SectionalComponents/AllCourses";
import Footer from "../Components/Footer/Footer";

const CoursePage = () => {
  return (
    <>
      <TopNavBar />
      <PageTop title='My Courses' />
      <AllCourses />
      <Footer />
    </>
  );
};

export default CoursePage;
