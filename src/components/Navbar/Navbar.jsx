import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <main className="flex-auto min-w-0 mt-2 md:mt-6 flex flex-col px-6 sm:px-4 md:px-0 max-w-[630px] w-full font-atkinson text-zinc-100">
      <nav className="lg:mb-16 mb-12 py-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-3xl font-semibold tracking-tight">
              Raka
            </Link>
          </div>
          <div className="flex flex-row gap-6 mt-6 md:mt-0 md:ml-auto items-center">
            {/* <Link
              to="/blog"
              className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative"
            >
              Blog
            </Link> */}
            <Link
              to="/project"
              className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative"
            >
              Project
            </Link>
            <Link
              to="/photos"
              className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative"
            >
              Photos
            </Link>
            
          </div>
        </div>
      </nav>
    </main>
  );
}

export default Navbar;
