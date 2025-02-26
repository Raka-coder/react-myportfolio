import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../components/Navbar/Navbar";
import Project from "../../components/Section/Project";
import Footer from "../../components/Footer/Footer";

function Projectpage() {
  const title = "Project";
  return (
    <>
      <Helmet>
        <title>{title} | Raka</title>
      </Helmet>
      <Navbar />
      <Project />
      <Footer />
    </>
  );
}

export default Projectpage;
