import React from "react";
interface PricingProps {}

const Pricing: React.FC = () => {
  return (
    <div bg-zinc-500>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center tracking-tight text-gray-500 text-4xl font-bold mb-8">
          Popular Plans
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-8p-28 pt-1  md:gap-8">
          <div className="divide-y divide-gray-200 rounded-2xl bg-white border-solid border-3 border-black-500 block p-4 shadow-sm shadow-indigo-100 transition-all duration-200 transform hover:scale-105 active:scale-40 relative">
            <div className="p-6 sm:px-8">
              <h2 className="text-md font-medium text-gray-600">
                Basic Package
                <span className="sr-only">Plan</span>
              </h2>

              <p className="text-sm mt-2 text-gray-500">
                Explore Bangladesh with our Basic Package.
              </p>

              <p className="mt-2 sm:mt-4">
                <strong className="text-2xl font-bold text-gray-600 sm:text-2xl">
                  {" "}
                  ৳1000{" "}
                </strong>

                <span className="text-sm font-medium text-gray-500">
                  /person
                </span>
              </p>

              <a
                className="mt-4 block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-xs font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 sm:mt-6"
                href="#"
              >
                Book Now
              </a>
            </div>

            <div className="p-6 sm:px-8">
              <p className="text-md font-medium text-gray-600 sm:text-md">
                What's included:
              </p>

              <ul className="mt-2 space-y-2 sm:mt-4">
                <li className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-indigo-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>

                   <span className="text-sm text-gray-500">
                    {" "}
                    Transportation included{" "}
                  </span>
                </li>

                <li className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-indigo-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>

                                    <span className="text-sm text-gray-500">
                    {" "}
                    Accommodation for 2 nights{" "}
                  </span>
                </li>

                <li className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-indigo-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>

                                    <span className="text-sm text-gray-500"> Guided tours </span>
                </li>

                <li className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-red-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>

                                    <span className="text-sm text-gray-500"> Meals not included </span>
                </li>

                <li className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-red-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>

                                    <span className="text-sm text-gray-500">
                    {" "}
                    Entry fees not included{" "}
                  </span>
                </li>

                <li className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-red-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>

                                    <span className="text-sm text-gray-500">
                    {" "}
                    Personal expenses not included{" "}
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="divide-y divide-gray-200 rounded-2xl bg-white border-solid border-3 border-black-500 block p-4 shadow-sm shadow-indigo-100 transition-all duration-200 transform hover:scale-105 active:scale-40 relative">
            <div className="p-6 sm:px-8">
              <h2 className="text-md font-medium text-gray-600">
                Adventure Seeker
                <span className="sr-only">Plan</span>
              </h2>

              <p className="text-sm mt-2 text-gray-500">
                Embark on thrilling adventures with our Adventure plan.
              </p>

              <p className="mt-2 sm:mt-4">
                <strong className="text-2xl font-bold text-gray-600 sm:text-2xl">
                  {" "}
                  ৳2000{" "}
                </strong>

                <span className="text-sm font-medium text-gray-500">
                  /month
                </span>
              </p>

              <a
                className="mt-4 block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-xs font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 sm:mt-6"
                href="#"
              >
                Get Started
              </a>
            </div>

            <div className="p-6 sm:px-8">
              <p className="text-md font-medium text-gray-600 sm:text-md">
                What's included:
              </p>

              <ul className="mt-2 space-y-2 sm:mt-4">
                <li className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-indigo-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>

                                    <span className="text-sm text-gray-500">
                    {" "}
                    Unlimited adventure trips{" "}
                  </span>
                </li>

                <li className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-indigo-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>

                                    <span className="text-sm text-gray-500">
                    {" "}
                    Personalized tour guide{" "}
                  </span>
                </li>

                <li className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-indigo-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>

                                    <span className="text-sm text-gray-500">
                    {" "}
                    Photography sessions included{" "}
                  </span>
                </li>

                <li className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-indigo-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>

                                    <span className="text-sm text-gray-500"> Deluxe accommodations </span>
                </li>

                <li className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-red-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>

                                    <span className="text-sm text-gray-500">
                    {" "}
                    Meals and snacks included{" "}
                  </span>
                </li>

                <li className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-red-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>

                                    <span className="text-sm text-gray-500">
                    {" "}
                    Adventure gear rental included{" "}
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="divide-y divide-gray-300 rounded-2xl bg-white border-solid border-3 border-black-500 block p-4 shadow-sm shadow-indigo-100 transition-all duration-200 transform hover:scale-105 active:scale-40 relative">
            <div className="p-6 sm:px-8">
              <h2 className="text-md font-medium text-gray-600">
                Corporate Explorer
                <span className="sr-only">Plan</span>
              </h2>

              <p className="text-sm mt-2 text-gray-500">
                For corporate travelers seeking luxury and convenience.
              </p>

              <p className="mt-2 sm:mt-4">
                <strong className="text-2xl font-bold text-gray-600 sm:text-2xl">
                  {" "}
                  ৳3500{" "}
                </strong>

                <span className="text-sm font-medium text-gray-500">
                  /month
                </span>
              </p>

              <a
                className="mt-4 block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-xs font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 sm:mt-6"
                href="#"
              >
                Get Started
              </a>
            </div>

            <div className="p-6 sm:px-8">
              <p className="text-md font-medium text-gray-600 sm:text-md">
                What's included:
              </p>

              <ul className="mt-2 space-y-2 sm:mt-4">
                <li className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-indigo-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>

                                    <span className="text-sm text-gray-500">
                    {" "}
                    Priority booking for 100 users{" "}
                  </span>
                </li>

                <li className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-indigo-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>

                                    <span className="text-sm text-gray-500">
                    {" "}
                    Dedicated corporate travel specialist{" "}
                  </span>
                </li>

                <li className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-indigo-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>

                                    <span className="text-sm text-gray-500">
                    {" "}
                    Access to corporate travel discounts{" "}
                  </span>
                </li>

                <li className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-indigo-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>

                                    <span className="text-sm text-gray-500">
                    {" "}
                    24/7 corporate travel support{" "}
                  </span>
                </li>
                <li className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-indigo-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>

                                    <span className="text-sm text-gray-500">
                    {" "}
                    Meals and snacks included{" "}
                  </span>
                </li>
                <li className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-indigo-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>

                                    <span className="text-sm text-gray-500">
                    {" "}
                    Access to exclusive corporate travel events{" "}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Pricing;
