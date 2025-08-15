import React from "react";
import java from "../../public/java.png";
import python from "../../public/python.webp";
import mongoDB from "../../public/mongodb.jpg";
import express from "../../public/express.png";
import reactjs from "../../public/reactjs.png";
import nodejs from "../../public/node.png";
import Typescript from "../../public/Typescript.png";

function PortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: Typescript,
      name: "Typescript",
    },
    {
      id: 2,
      logo: reactjs,
      name: "Reactjs",
    },
    {
      id: 3,
      logo: nodejs,
      name: "NodeJS",
    },
  ];
  return (
    <div className="max-w-screen-2xl mx-auto px-4 md:px-20 mt-10">
      <h1 className="text-3xl font-bold mb-5">PortFolio</h1>
      <span className="underline font-semibold">Featured Projects</span>

      {/* Grille fluide */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-5">
        {cardItem.map(({ id, logo, name }) => (
          <div
            key={id}
            className="group h-full overflow-hidden rounded-2xl border shadow-lg bg-white"
          >
            {/* wrapper qui zoome (la carte ne bouge pas) */}
            <div className="p-6 flex flex-col h-full transition-transform duration-300 group-hover:scale-[1.02]">
              <img
                src={logo}
                alt={name}
                className="w-24 h-24 mx-auto rounded-full border object-contain"
              />
              <h3 className="mt-3 px-2 font-bold text-xl">{name}</h3>

              {/* pousse les boutons en bas pour des hauteurs alignées */}
              <div className="mt-auto px-2 pt-4 flex gap-3">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">
                  Video
                </button>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                  Source code
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PortFolio;
