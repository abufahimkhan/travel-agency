import React from "react";
import service from "../../jsonData/service.json";

export default function ServiceCard() {
  // Calculate the maximum number of cards to show based on the desired row count
  const maxCards = 4 * 2; // 4 columns * 2 rows

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-center tracking-tight text-gray-500 text-5xl font-bold mb-8">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {service.slice(0, maxCards).map((service) => (
          <a
            href="#"
            className="bg-white border-solid border-3 border-black-500 block rounded-lg p-3 shadow-sm shadow-indigo-100"
            key={service.id}
          >
            <img
              alt=""
              src={service.image}
              className="h-56 w-full rounded-md object-cover border-solid border-1 border-black-500"
            />
            <div className="p-0 mt-5">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h2>
              <p className="text-sm text-gray-600 mb-3">{service.description}</p>
            </div>
            <button className="px-3 py-1.5 text-white bg-slate-400 rounded-full transition-all duration-200 transform hover:scale-105 active:scale-50">
                      See More
                    </button>
          </a>
        ))}
      </div>

      {/* View More button */}
      {/* <div className="mt-5 flex justify-center">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none">
          View More
        </button>
      </div> */}
    </div>
  );
}
