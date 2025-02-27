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
      <body className="dark:bg-zinc-950 antialiased flex flex-col items-center justify-center mx-auto mt-2 lg:mt-8 mb-20 lg:mb-40">
        <Navbar />
        <Project />
        <Footer />
      </body>
    </>
  );
}

export default Projectpage;
