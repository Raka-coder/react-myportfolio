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
      <body className="dark:bg-zinc-950 antialiased flex flex-col items-center justify-center mx-auto mt-2 lg:mt-8 mb-20 lg:mb-40">
        <Navbar />
        <Section />
        <Footer />
      </body>
    </>
  );
}

export default Homepage;
