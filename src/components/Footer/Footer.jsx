import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
function Footer() {
  return (
    <footer className="flex-auto min-w-0 mt-4 md:mt-8 flex flex-col px-6 sm:px-4 md:px-0 max-w-[630px] w-full font-atkinson text-zinc-100">
      <div className="flex flex-row md:flex-row justify-between md:items-center items-start mb-4">
        <p className="text-sm">&copy; 2025 Raka</p>
        <div className="flex items-center space-x-4">
          <Link to="https://instagram.com/rakresptra" className="text-xl text-zinc-100 hover:text-zinc-200">
            <FaInstagram />
          </Link>
          <Link to="https://github.com/Raka-coder" className="text-xl text-zinc-100 hover:text-zinc-200">
            <FaGithub />
          </Link>
          <Link to="https://www.linkedin.com/in/raka-restu-saputra/" className="text-xl text-zinc-100 hover:text-zinc-200">
            <FaLinkedinIn />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
