import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Country, State, City } from "country-state-city";

const SearchDestination = () => {
  const [country, setCountry] = useState("");
  // const [city, setCity] = useState("");
  // const [state, setState] = useState("");
  const [price, setPrice] = useState("");
  const [startDate, setStartDate] = useState(null);

  const countries = Country.getAllCountries().map(country => country.name);
  // const states = State.getStatesOfCountry(state).map(state => state.name);
  // const cities = City.getCitiesOfState().map(city => city.name);

  const handleCountryChange = (e) => {
    const selectedCountry = e.target.value;
    setCountry(selectedCountry);
    setState(""); // Clear state when country changes
  };

  // const handleStateChange = (e) => {
  //   const selectedState = e.target.value;
  //   setState(selectedState);
  //   setCity(""); // Clear city when state changes
  // };

  const handleSearch = () => {
    console.log("Searching with country:", country);
    // console.log("Searching with state:", state);
    // console.log("Searching with city:", city);
    console.log("Searching with price:", price);
    console.log("Searching with start date:", startDate);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          Find Your Next Adventure
        </h2>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0 md:space-x-4">
          <div className="w-full md:w-1/3">
            <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
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
                <option key={index} value={country}>{country}</option>
              ))}
            </select>
          </div>
          {/* <div className="w-full md:w-1/3">
            <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
              State
            </label>
            <select
              id="state"
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              value={state}
              onChange={handleStateChange}
            >
              <option value="">Select state</option>
              {states.map((state, index) => (
                <option key={index} value={state}>{state}</option>
              ))}
            </select>
          </div> */}
          {/* <div className="w-full md:w-1/3">
            <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
              City
            </label>
            <select
              id="city"
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            >
              <option value="">Select city</option>
              {cities.map((city, index) => (
                <option key={index} value={city}>{city}</option>
              ))}
            </select>
          </div> */}
          <div className="w-full md:w-1/3">
            <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
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
            <label htmlFor="start-date" className="block text-sm font-medium text-gray-700 mb-1">
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
