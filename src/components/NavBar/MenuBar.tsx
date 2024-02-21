import React, { useState } from "react";
import logo from "../../assets/logo.png";

export default function MenuBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
     <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-10">
        <div className="flex h-15 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <div className="text-center sm:text-left">
              <h1 className="font-mono text-1xl mr-5  font-bold bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 sm:text-3xl">
                Travel Around
              </h1>

              <p className="hidden md:block mt-1.5 text-sm text-gray-500">
                Make Your Journey Spectacular ✈️ 🎉
              </p>
            </div>
          </div>


          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-8 text-sm">
                <li>
                  <a
                    className="text-gray-500 font-semibold transition hover:text-gray-500/75"
                    href="#"
                  >
                    {" "}
                    About{" "}
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-500 font-semibold transition hover:text-gray-500/75"
                    href="#"
                  >
                    {" "}
                    Careers{" "}
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-500 font-semibold transition hover:text-gray-500/75"
                    href="#"
                  >
                    {" "}
                    History{" "}
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-500 font-semibold transition hover:text-gray-500/75"
                    href="#"
                  >
                    {" "}
                    Services{" "}
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-500 font-semibold transition hover:text-gray-500/75"
                    href="#"
                  >
                    {" "}
                    Projects{" "}
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-500 font-semibold transition hover:text-gray-500/75"
                    href="#"
                  >
                    {" "}
                    Blog{" "}
                  </a>
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
            <div className="sm:flex sm:gap-4">
              <a
                className="group inline-block rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75 transition-all duration-200 transform hover:scale-105 active:scale-50"
                href="#"
              >
                <span className="block rounded-full px-6 py-1 text-sm font-medium group-hover:bg-transparent">
                  Register
                </span>
              </a>

              {/* <div className="hidden sm:flex">
                <a
                  className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-black-600 transition duration-300 ease-in-out hover:scale-110"
                  href="#"
                >
                  Register
                </a>
              </div> */}
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
                <a
                  className="text-gray-500 font-semibold transition hover:text-gray-500/75"
                  href="#"
                >
                  {" "}
                  About{" "}
                </a>
              </li>
              <li>
                <a
                  className="text-gray-500 font-semibold transition hover:text-gray-500/75"
                  href="#"
                >
                  {" "}
                  Careers{" "}
                </a>
              </li>
              <li>
                <a
                  className="text-gray-500 font-semibold transition hover:text-gray-500/75"
                  href="#"
                >
                  {" "}
                  History{" "}
                </a>
              </li>
              <li>
                <a
                  className="text-gray-500 font-semibold transition hover:text-gray-500/75"
                  href="#"
                >
                  {" "}
                  Services{" "}
                </a>
              </li>
              <li>
                <a
                  className="text-gray-500 font-semibold transition hover:text-gray-500/75"
                  href="#"
                >
                  {" "}
                  Projects{" "}
                </a>
              </li>
              <li>
                <a
                  className="text-gray-500 font-semibold transition hover:text-gray-500/75"
                  href="#"
                >
                  {" "}
                  Blog{" "}
                </a>
              </li>
              <li>
                <a
                  className="text-gray-500 font-semibold transition hover:text-gray-500/75"
                  href="#"
                >
                  {" "}
                  Login{" "}
                </a>
              </li>
              <li>
                <a
                  className="text-gray-500 font-semibold transition hover:text-gray-500/75"
                  href="#"
                >
                  {" "}
                  Register{" "}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
