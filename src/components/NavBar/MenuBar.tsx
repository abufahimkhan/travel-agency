import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
export default function MenuBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-zinc-100 p-5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex h-15 items-center justify-between ">
          <div className="md:flex md:items-center md:gap-12">
            <div className="text-center sm:text-left ml-5">
            <h1 className="font-mono text-1xl mr-5  font-bold bg-gradient-to-r sm:text-3x1  text-transparent text-3xl bg-clip-text from-purple-400 to-pink-600">
                Travel Around
              </h1>

              <p className="hidden md:block mt-1.5 text-sm text-gray-500">
                Make Your Journey Spectacular ✈️ 🎉
              </p>
            </div>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-10 text-sm">
                <li>
                  <Link
                    to="/"
                    className="text-gray-500 font-semibold transition hover:text-gray-500/75"
                  >
                    {" "}
                    Home{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/travels"
                    className="text-gray-500 font-semibold transition hover:text-gray-500/75"
                  >
                    {" "}
                    Travels{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-gray-500 font-semibold transition hover:text-gray-500/75"
                  >
                    {" "}
                    Destinations{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="text-gray-500 font-semibold transition hover:text-gray-500/75"
                  >
                    {" "}
                    Services{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-gray-500 font-semibold transition hover:text-gray-500/75"
                  >
                    {" "}
                    About Us{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-gray-500 font-semibold transition hover:text-gray-500/75"
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
                        className="w-5 h-5"
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
              <div className="group inline-block rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75 transition-all duration-200 transform hover:scale-105 ">
                <button
                  className="block rounded-full px-5 py-1 text-sm font-medium group-hover:bg-transparent"
                  onClick={toggleMenu}
                >
                  Register
                </button>
                {/* Dropdown Menu */}
                {menuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg z-50">
                    <Link
                      to="/login"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    >
                      Login
                    </Link>
                    <Link
                      to="/signup"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    >
                      Signup
                    </Link>
                  </div>
                )}
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

      {/* Collapsible Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white w-full absolute top-16 left-0 z-50">
          <nav aria-label="Mobile Global" className="p-4">
            <ul className="flex flex-col items-start gap-4 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-gray-500 font-semibold transition hover:text-gray-500/75"
                >
                  {" "}
                  Home{" "}
                </Link>
              </li>
              <li>
                <Link
                  to="/travels"
                  className="text-gray-500 font-semibold transition hover:text-gray-500/75"
                >
                  {" "}
                  Travels{" "}
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-500 font-semibold transition hover:text-gray-500/75"
                >
                  {" "}
                  Destinations{" "}
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-500 font-semibold transition hover:text-gray-500/75"
                >
                  {" "}
                  Services{" "}
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-500 font-semibold transition hover:text-gray-500/75"
                >
                  {" "}
                  About Us{" "}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-500 font-semibold transition hover:text-gray-500/75"
                >
                  {" "}
                  Contact Us{" "}
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-500 font-semibold transition hover:text-gray-500/75"
                >
                  {" "}
                  Register{" "}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
