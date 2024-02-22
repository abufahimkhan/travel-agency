import React from 'react';
import BannerSection from '../components/CommonSection/BannerSection';
import PlaceCard from '../components/PlaceCards/PlaceCard';
import ServiceCard from '../components/ServiceCards/ServiceCard';
import SearchBar from '../components/Searchsection/SearchBar';
import Footer from '../components/FooterSection/Footer';
import MenuBar from '../components/NavBar/MenuBar';
import SearchDestination from '../components/CommonSection/SearchDestination';
import TestimonialSlider from '../components/CommonSection/TestimonialsSection';

export default function Home() {
  return (
    <div className="bg-gray-150 min-h-screen">
      <MenuBar />
      <div className="container mx-auto px-4 py-8">
        <BannerSection />
      </div>
      <SearchDestination />
      <div className="container mx-auto px-4 py-8">
        <PlaceCard />
      </div>
      <div className="container mx-auto px-4 py-8">
        <ServiceCard />
      </div>
      <TestimonialSlider />
      <Footer />
    </div>
  );
}
