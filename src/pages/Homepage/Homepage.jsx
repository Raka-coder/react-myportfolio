import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../components/Navbar/Navbar";
import Section from "../../components/Section/Section";
import Footer from "../../components/Footer/Footer";

function Homepage() {
  const title = "Portfolio";
  return (
    <>
      <Helmet>
        <title>{title} | Raka</title>
      </Helmet>
      <Navbar />
      <Section />
      <Footer />
    </>
  );
}

export default Homepage;
