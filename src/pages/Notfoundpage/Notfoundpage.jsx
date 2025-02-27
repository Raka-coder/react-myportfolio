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
      <body className="dark:bg-zinc-950 antialiased flex flex-col items-center justify-center mx-auto mt-2 lg:mt-8 mb-20 lg:mb-40">
        <Navbar />
        <NotFound404 />
        <Footer />
      </body>
    </>
  );
}

export default Notfound;
