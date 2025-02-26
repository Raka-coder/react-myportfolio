import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../components/Navbar/Navbar";
import Photos from "../../components/Section/Photos";
import Footer from "../../components/Footer/Footer";

function Photospage() {
  const title = "Photos";
  return (
    <>
      <Helmet>
        <title>{title} | Raka</title>
      </Helmet>
      <Navbar />
      <Photos />
      <Footer />
    </>
  );
}

export default Photospage;
