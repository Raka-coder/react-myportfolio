// CardList.js
import React from "react";

const Card = ({ title, year, description }) => {
  return (
    <div className="flex flex-row md:flex-row justify-between md:items-center items-start mb-4">
      <div className="flex flex-col">
        <div className="w-full flex justify-between items-baseline">
          <h2 className="text-xl font-bold mb-4">{title}</h2>
          <p className="text-sm mb-4">- {year}</p>
        </div>
        <p className="text-lg mb-4">{description}</p>
      </div>
    </div>
  );
};

const list = [
  {
    title: "Turunan Diferensial",
    year: "2024",
    description:
      "The name is turdif website, a website resulting from the final semester exam assignment calculus course 1.",
  },
  {
    title: "Smart Home",
    year: "2024",
    description:
      "Smart Home, This allows users to control smart devices at home using sound through Google Home devices or mobile devices equipped with Google Assistant, this system uses Wemos D1 Mini as a microcontroller, relay as an actuator, Sinric Pro as a cloud service that provides an easy-to-use API (Application Programming Interface) for integrating devices with Google Home applications.",
  },
];

const Project = () => {
  return (
    <main className="flex-auto min-w-0 md:mt-6 flex flex-col px-6 sm:px-4 md:px-0 max-w-[630px] w-full font-atkinson text-zinc-100">
      {list.map((item, index) => (
        <Card
          key={index}
          title={item.title}
          year={item.year}
          description={item.description}
        />
      ))}
    </main>
  );
};

export default Project;
