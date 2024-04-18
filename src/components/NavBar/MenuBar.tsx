import React, { useState } from "react";
import { Link } from "react-router-dom";
import UserCard from "./UserMenu";
import { FcBinoculars } from "react-icons/fc";
const MenuBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="bg-zinc-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-14 ">
        <div className="flex h-32 items-center justify-between ">
          <div className="md:flex md:items-center">
            <FcBinoculars className="text-4xl sm:text-5xl" />
            <div className="text-center sm:text-left ml-3">
              <h1 className="font-mono text-1xl mr-5 sm:text-3xl font-bold bg-gradient-to-r text-transparent bg-clip-text from-purple-400 to-pink-600">
                <span className="text-2xl sm:text-2xl">Travel Around</span>
              </h1>
              <p className="md:block mt-1.5 text-xs text-gray-500">
                Make Your Journey Spectacular
              </p>
            </div>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-7 text-xs">
                <li>
                  <Link
                    to="/Home"
                    className="text-gray-500 font-semibold transition hover:text-gray-500/75"
                    onClick={closeMenu}
                  >
                    {" "}
                    Home{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/travels"
                    className="text-gray-500 font-semibold transition hover:text-gray-500/75"
                    onClick={closeMenu}
                  >
                    {" "}
                    Travels{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/destinations"
                    className="text-gray-500 font-semibold transition hover:text-gray-500/75"
                    onClick={closeMenu}
                  >
                    {" "}
                    Destinations{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="text-gray-500 font-semibold transition hover:text-gray-500/75"
                    onClick={closeMenu}
                  >
                    {" "}
                    Services{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-gray-500 font-semibold transition hover:text-gray-500/75"
                    onClick={closeMenu}
                  >
                    {" "}
                    About Us{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/home"
                    className="text-gray-500 font-semibold transition hover:text-gray-500/75"
                    onClick={closeMenu}
                  >
                    {" "}
                    Contact Us{" "}
                  </Link>
                </li>
                <div className="flex items-center">
                  <div className="flex space-x-1">
                    <input
                      type="text"
                      className="block w-full px-2 py-1 text-blue-500 bg-white border rounded-full focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                      placeholder="Search..."
                    />
                    <button className="px-4 text-white bg-slate-500 rounded-full transition-all duration-200 transform hover:scale-105 active:scale-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4 relative z-50">
              {/* bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] */}
              <div className="hidden md:flex md:gap-4 relative z-50">
                <UserCard name="Shanto Khan" />
              </div>
            </div>

            <div className="block md:hidden" onClick={toggleMenu}>
              <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={
                      menuOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white w-full absolute top-21 left-0 z-50">
          <nav aria-label="Mobile Global" className="p-4">
            <ul className="flex flex-col items-start gap-4 text-xs">
              <li>
                <Link
                  to="/Home"
                  className="text-gray-500 font-semibold transition hover:text-gray-500/75"
                  onClick={closeMenu}
                >
                  {" "}
                  Home{" "}
                </Link>
              </li>
              <li>
                <Link
                  to="/travels"
                  className="text-gray-500 font-semibold transition hover:text-gray-500/75"
                  onClick={closeMenu}
                >
                  {" "}
                  Travels{" "}
                </Link>
              </li>
              <li>
                <Link
                  to="/destinations"
                  className="text-gray-500 font-semibold transition hover:text-gray-500/75"
                  onClick={closeMenu}
                >
                  {" "}
                  Destinations{" "}
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-500 font-semibold transition hover:text-gray-500/75"
                  onClick={closeMenu}
                >
                  {" "}
                  Services{" "}
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-500 font-semibold transition hover:text-gray-500/75"
                  onClick={closeMenu}
                >
                  {" "}
                  About Us{" "}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-500 font-semibold transition hover:text-gray-500/75"
                  onClick={closeMenu}
                >
                  {" "}
                  Contact Us{" "}
                </Link>
              </li>
              <li>
                <UserCard name="Shanto Khan" />
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default MenuBar;
