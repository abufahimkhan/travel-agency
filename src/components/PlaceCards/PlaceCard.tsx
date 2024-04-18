import React from "react";
import pcards from "../../jsonData/records.json";
import { Link } from "react-router-dom";
import { FcLike } from "react-icons/fc";
import { FcHome } from "react-icons/fc";
import { FcNightPortrait } from "react-icons/fc";
import { FcMoneyTransfer } from "react-icons/fc";
import { FcGlobe } from "react-icons/fc";
const PlaceCard: React.FC = () => {
  // Calculate the maximum number of cards to show based on the desired row count
  const maxCards = 4 * 2; // 4 columns * 2 rows

  return (
    <div bg-zinc-100>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center tracking-tight text-gray-500 text-4xl font-bold mb-8">
          Popular Destinations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {pcards.slice(0, maxCards).map((props) => (
            <div
              key={props.id}
              className="bg-white border-solid border-3 border-black-500 block rounded-lg p-3 shadow-sm shadow-indigo-100 transition-all duration-200 transform hover:scale-105 active:scale-40 relative"
            >
              <img
                alt=""
                src={props.image}
                className="h-56 w-full rounded-md object-cover border-solid border-1 border-black-500"
              />

              <div className="mt-3">
                <dl>
                  <div className="flex items-center gap-2 text-sm">
                    <FcLike className="text-4xl sm:text-2xl" />
                    <dd className="text-sm text-gray-500">{props.rating}</dd>
                  </div>
                  <div className="mt-3 flex items-center gap-7 text-sm">
                    <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                      <FcGlobe className="text-4xl sm:text-2xl" />
                      <div className="mt-1.5 sm:mt-0">
                        <p className="text-gray-500 text-xs">Country</p>
                        <p className="text-xs">{props.country}</p>
                      </div>
                    </div>

                    <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                    <FcHome className="text-4xl sm:text-2xl" />
                      <div className="mt-1.5 sm:mt-0">
                        <p className="text-gray-500 text-xs">City</p>
                        <p className="text-xs">{props.city}</p>
                      </div>
                    </div>
                  </div>
                </dl>
              </div>
              <div className="mt-3">
                <dl>
                  <div className="mt-3 flex items-center gap-5 text-xs">
                    <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                      <FcNightPortrait className="text-4xl sm:text-2xl" />
                      <div className="mt-1.5 sm:mt-0">
                        <p className="text-gray-500 text-xs">Hotel</p>
                        <p className="text-xs">{props.hotel.name}</p>
                      </div>
                    </div>

                    <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                      <FcMoneyTransfer className="text-4xl sm:text-2xl" />
                      <div className="mt-1.5 sm:mt-0">
                        <p className="text-gray-500 text-xs">Price</p>
                        <p className="text-xs">{props.hotel.price}</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <dd className="mt-3 text-xs text-gray-400">
                      {props.description}
                    </dd>
                  </div>
                </dl>
              </div>

              {/* Read More button */}
              <div className="mt-3 flex justify-center">
                <div className="group relative inline-block overflow-hidden border  px-8 py-3 focus:outline-none focus:ring w-full text-center rounded-b-lg">
                  <span className="absolute inset-y-0 left-0 w-[2px] bg-indigo-600 transition-all group-hover:w-full group-active:bg-indigo-500"></span>

                  <Link
                    to="/booking"
                    className="relative text-xs font-bold text-indigo-600 transition-colors group-hover:text-white"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default PlaceCard;
