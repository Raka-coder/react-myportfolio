import React from "react";
import { Link } from "react-router-dom";

function NotFound404() {
  return (
    <>
      <main className="flex-auto min-w-0 md:mt-6 flex flex-col px-6 sm:px-4 md:px-0 max-w-[630px] w-full font-atkinson text-zinc-100">
        <div className="flex flex-wrap justify-center md:justify-start lg:justify-start xl:justify-start">
          <div className="w-full md:w-1/2 lg:w-2/3 xl:w-3/4">
            <h1 className="text-4xl font-bold mb-6">404 - Not Found</h1>
            <p className="text-lg mb-6 text-zinc-100">
              The page you are looking for is not found.
            </p>
              <Link to="/" className="text-zinc-100 hover:text-zinc-200 underline">Previous</Link>
          </div>
        </div>
      </main>
    </>
  );
}

export default NotFound404;
