import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Country } from "country-state-city";

const SearchDestination: React.FC = () => {
  const [country, setCountry] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [startDate, setStartDate] = useState<Date | null>(null);

  const countries = Country.getAllCountries().map((country) => country.name);

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCountry = e.target.value;
    setCountry(selectedCountry);
  };

  const handleSearch = () => {
    console.log("Searching with country:", country);
    console.log("Searching with price:", price);
    console.log("Searching with start date:", startDate);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-10">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-extrabold text-gray-900 text-center mb-8">
          Find Your Next Adventure
        </h2>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0 md:space-x-4">
          <div className="w-full md:w-1/3">
            <label
              htmlFor="country"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Country
            </label>
            <select
              id="country"
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              value={country}
              onChange={handleCountryChange}
            >
              <option value="">Select country</option>
              {countries.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full md:w-1/3">
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Price Range
            </label>
            <select
              id="price"
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            >
              <option value="">Select price range</option>
              <option value="1">Less than $1000</option>
              <option value="2">$1000 - $5000</option>
              <option value="3">More than $5000</option>
            </select>
          </div>
          <div className="w-full md:w-1/3">
            <label
              htmlFor="start-date"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Start Date
            </label>
            <DatePicker
              id="start-date"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholderText="Select start date"
              dateFormat="MMMM d, yyyy"
              minDate={new Date()}
            />
          </div>
          <div className="w-full md:w-auto">
            <button
              type="button"
              onClick={handleSearch}
              className="mt-6 inline-flex items-center px-4 py-1.5 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchDestination;
