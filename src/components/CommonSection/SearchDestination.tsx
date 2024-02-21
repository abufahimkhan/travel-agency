import React from 'react';

export default function SearchDestination() {
  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
    <div className="relative isolate overflow-hidden bg-white px-6 py-20 text-center sm:px-16 sm:shadow-sm dark:bg-transparent">
        <div className="mx-auto max-w-3xl text-center">
      <h1
        className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
      >
        Compile Your Travel Ideas

        <span className="sm:block"> Increase Conversion. </span>
      </h1>


      <div className="mt-16 flex flex-wrap justify-center gap-4">
      <a
                className="group inline-block rounded-3xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600  focus:outline-none focus:ring active:text-opacity-75 ml-5"
                href="#"
              >
                <span className="block rounded-3xl bg-white px-14 py-3 text-sm font-medium group-hover:bg-transparent">
                  Compile
                </span>
              </a>
      </div>
      </div>

        {/* <form action="/search">
            <label className="mx-auto mt-8 relative bg-white min-w-sm max-w-3xl flex flex-col md:flex-row items-center justify-center  border rounded-3xl py-5 px-2  gap-6 shadow-2xl focus-within:border-gray-300" htmlFor="search-bar">
            <select 
          id="pricingType" 
          name="pricingType"
          className="w-full md:w-auto h-12  border rounded-2xl border-gray-500 focus:outline-none focus:border-gray-500 text-gray-500 px-3 py-1 md:py-0 tracking-wider"
        >
          <option value="All">  🏁</option>
          <option value="Freemium">Freemium</option>
          <option value="Free">Free</option>
          <option value="Paid">Paid</option>
        </select>
        <select 
          id="pricingType" 
          name="pricingType"
          className="w-full md:w-auto h-12  border rounded-2xl border-gray-500 focus:outline-none focus:border-gray-500 text-gray-500 px-3 py-1 md:py-0 tracking-wider"
        >
          <option value="All">💳💵</option>
          <option value="Freemium">Freemium</option>
          <option value="Free">Free</option>
          <option value="Paid">Paid</option>
        </select>
        <select 
          id="pricingType" 
          name="pricingType"
          className="w-full md:w-auto h-12  border rounded-2xl border-gray-500 focus:outline-none focus:border-gray-500 text-gray-500 px-3 py-1 md:py-0 tracking-wider"
        >
          <option value="All">✈︎</option>
          <option value="Freemium">Freemium</option>
          <option value="Free">Free</option>
          <option value="Paid">Paid</option>
        </select>
        <select 
          id="pricingType" 
          name="pricingType"
          className="w-full md:w-auto h-12  border rounded-2xl border-gray-500 focus:outline-none focus:border-gray-500 text-gray-500 px-3 py-1 md:py-0 tracking-wider"
        >
          <option value="All">🗓</option>
          <option value="Freemium">Freemium</option>
          <option value="Free">Free</option>
          <option value="Paid">Paid</option>
        </select>
        <a
                className="group inline-block rounded-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75 ml-5"
                href="#"
              >
                <span className="block rounded-2xl bg-white px-8 py-3 text-sm font-medium group-hover:bg-transparent">
                  Search
                </span>
              </a>
            </label>
        </form>*/}

        <svg viewBox="0 0 1024 1024" className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"  aria-hidden="true">
            <circle  cx="512" cy="512" r="512" fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)" fillOpacity="0.7" />
            <defs>
                <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                    <stop stopColor="#3b82f6" />
                    <stop offset="1" stopColor="#60a5fa" />
                </radialGradient>
            </defs>
        </svg> 
    </div>
</div>
  );
}
