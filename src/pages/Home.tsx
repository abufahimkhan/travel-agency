import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BannerSection from "../components/CommonSection/BannerSection";
import PlaceCard from "../components/PlaceCards/PlaceCard";
import ServiceCard from "../components/ServiceCards/ServiceCard";
import Footer from "../components/FooterSection/Footer";
import MenuBar from "../components/NavBar/MenuBar";
import SearchDestination from "../components/CommonSection/SearchDestination";
import TestimonialSlider from "../components/CommonSection/TestimonialsSection";
import Pricing from "../components/CommonSection/PricingSection";

export default function Home() {
  return (
    <div className="bg-zinc-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <BannerSection />
      </div>
      <div className="container mx-auto px-4 py-8">
        <hr className="border-t border-gray-300 my-8" />
        <SearchDestination />
        <hr className="border-t border-gray-300 my-8" />
      </div>
      <div className="container mx-auto px-4 py-8">
        <PlaceCard />
        <hr className="border-t border-gray-300 my-8" />
      </div>
      <div className="container mx-auto px-4 py-8">
        <ServiceCard />
        <hr className="border-t border-gray-300 my-8" />
      </div>
      <div className="container mx-auto px-4 py-8">
        <Pricing />
        <hr className="border-t border-gray-300 my-8" />
      </div>
      <div className="container mx-auto px-4 py-8">
        <TestimonialSlider />
        <hr className="border-t border-gray-300 my-8" />
      </div>
    </div>
  );
}
