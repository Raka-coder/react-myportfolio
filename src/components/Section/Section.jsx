import React from "react";
import { Link } from "react-router-dom";

function Section() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <main className="flex-auto min-w-0 md:mt-6 flex flex-col px-6 sm:px-4 md:px-0 max-w-[630px] w-full font-atkinson text-zinc-100">
        <div className="flex flex-wrap justify-center md:justify-start lg:justify-start xl:justify-start">
          <div className="w-full md:w-1/2 lg:w-2/3 xl:w-3/4">
            <Link to="/" target="_blank" rel="noopener noreferrer">
              <img
                src="https://turdif.vercel.app/assets/raka-31P2Tfho.jpg"
                width={120}
                height={120}
                className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 sm:float-right sm:ml-5 sm:mb-5 grayscale-25 hover:grayscale-0 -mr-36 transition duration-150"
                alt=""
                title="Raka Restu Saputra"
              />
            </Link>
            <h1 className="text-3xl font-bold mb-6">Welcome to my profile!</h1>
            <p className="text-lg mb-6 text-zinc-100">
              Hi! my name is Raka Restu Saputra. I am {currentYear - 2005}'s
              years old. I'm student in at Siliwangi University. I'm interested
              in IT field & computer engineering.
            </p>
          </div>

          <p className="text-lg mb-6 text-zinc-100">
            My interests extend to Internet of Things (IoT), computer
            networking, hardware, and web development.
          </p>
          <p className="text-lg mb-6 text-zinc-100">
            If you want to know more about me, you can visit my social media or contact me for more information.
          </p>
        </div>
      </main>
    </>
  );
}

export default Section;
