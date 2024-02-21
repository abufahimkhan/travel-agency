import React from "react";
import pcards from "../../jsonData/records.json";

export default function PlaceCard() {
  // Calculate the maximum number of cards to show based on the desired row count
  const maxCards = 4 * 2; // 4 columns * 2 rows

  return (
    <div className="flex flex-wrap justify-center mt-5 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {pcards.slice(0, maxCards).map((props) => (
          <a
            href="#"
            className="bg-white border-solid border-3 border-black-500 block rounded-lg p-3 shadow-sm shadow-indigo-100 transition-all duration-200 transform hover:scale-105 active:scale-40"
            key={props.id}
          >
            <img
              alt=""
              src={props.image}
              className="h-56 w-full rounded-md object-cover border-solid border-1 border-black-500"
            />

            <div className="mt-3">
              <dl>
                <div>
                  <dd className="text-sm text-gray-500">{props.rating}</dd>
                </div>
                <div className="mt-3 flex items-center gap-5 text-xs">
                  <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                    🗺️
                    <div className="mt-1.5 sm:mt-0">
                      <p className="text-gray-500">Country</p>
                      <p className="font-medium">{props.country}</p>
                    </div>
                  </div>

                  <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                    🏙️
                    <div className="mt-1.5 sm:mt-0">
                      <p className="text-gray-500">City</p>
                      <p className="font-medium">{props.city}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <dd className="mt-3 text-xs text-gray-500">{props.description}</dd>
                </div>
              </dl>

              <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2 mt-3">
                <div className="mt-1.5 sm:mt-0">
                  <button className="inline-flex items-center gap-1 rounded-md px-0 py-1 text-xs text-blue-500 hover:text-gray-700 focus:relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                      <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* View More button */}
      <div className="mt-5 mx-auto">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none">
          View More
        </button>
      </div>
    </div>
  );
}
