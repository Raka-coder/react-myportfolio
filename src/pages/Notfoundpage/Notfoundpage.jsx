import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../components/Navbar/Navbar";
import NotFound404 from "../../components/Section/NotFound404";
import Footer from "../../components/Footer/Footer";

function Notfound() {
  const title = "Not Found";
  return (
    <>
      <Helmet>
        <title>{title} | Raka</title>
      </Helmet>
      <Navbar />
      <NotFound404 />
      <Footer />
    </>
  );
}

export default Notfound;
