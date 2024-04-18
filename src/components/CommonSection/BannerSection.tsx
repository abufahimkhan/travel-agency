import React from "react";
import ocen from "../../assets/cover2.jpg";
import dessert from "../../assets/dessertcar.jpg";
import plane from "../../assets/plane.png";

interface BannerSectionProps {}

const BannerSection: React.FC<BannerSectionProps> = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <section className="section-cover relative">
        {/* Only show the plane image on larger screens */}
        <img
          src={plane}
          className="hidden sm:block w-full overly-image absolute inset-24 object-cover"
          alt="plane"
        />
        <section className="section-cover-container flex p-0">
          <section className="w-full sm:w-1/2 m-1">
            <h1 className="text-3xl sm:text-4xl font-normal text-gray-600">
              Plan easy, Pay less
            </h1>
            <h1 className="text-3xl sm:text-4xl font-normal text-gray-600">
              and Experience more
            </h1>
            <p className="text-lg sm:text-1xl text-gray-500 mt-8 mb-8 break-words">
              Unleash the possibilities of enchanting destinations, ensuring
              your holiday is wrapped in comfort and convenience.
            </p>
            {/* <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-full mt-4">
              Learn More
            </button> */}

            <img
              className="object-scale-down max-w-full mt-4 rounded-lg-custom"
              src={ocen}
              alt="ocean"
            />
          </section>

          {/* Show dessert image on all screens */}
          <section className="hidden sm:block w-1/2">
            <img
              className="sm:block w-full h-full mt-0 rounded-lg-custom"
              src={dessert}
              alt="dessert"
            />
          </section>
        </section>
      </section>
    </div>
  );
};

export default BannerSection;
