import React from "react";

const HeroAbout = () => {
  return (
    <div className="relative">
      {/* Hero Title Section */}
      <div className="flex w-full h-20 md:h-32 lg:h-32 bg-[#041d1a]">
        <h1 className="text-2xl lg:text-5xl font-bold text-center text-[#f1f0ec] my-auto mx-auto">
          About Us
        </h1>
      </div>

      {/* Hero Image Section */}
      <div className="relative flex flex-col">
        {/* Background Decoration */}
        <div className="hidden lg:w-full h-64 md:h-64 lg:h-72 bg-[#041d1a] lg:relative lg:flex"></div>

        {/* Background Image */}
        <div
          className="w-full bg-no-repeat bg-cover bg-fixed min-h-[400px] md:min-h-[550px]"
          style={{
            backgroundImage: "url('https://i.imgur.com/2hmtY4W.jpeg')",
          }}
        ></div>

        {/* Content Section */}
        <div className="relative">
          <div className="absolute bottom-1/2 md:bottom-1/2 lg:bottom-40 lg:left-1/2 transform lg:-translate-x-3/4 -translate-y-1/2 md:-translate-y-1/2 lg:-translate-y-1/2 lg:flex lg:flex-row lg:justify-start lg:items-start flex flex-col-reverse ">
            <div className="text-center mx-2 md:mx-8 lg:mx-0">
              <div className="bg-[#354948] px-2 py-2 lg:px-10 lg:py-10 shadow-md flex flex-col justify-start items-start rounded-md transition-all duration-300 ease-in-out transform hover:md:scale-105 hover:shadow-lg">
                {/* Subheading */}
                <h2 className="text-base md:text-lg lg:text-xl font-semibold mb-2 text-[#f0ede6]">
                  JOYA IN DUBAI
                </h2>

                {/* Main Heading */}
                <h3 className="font-bold text-[#faf8f7] text-base md:text-2xl lg:text-4xl mb-1 md:mb-3 lg:mb-4">
                  WHO WE ARE?
                </h3>

                {/* Description */}
                <p className="text-[#f1f0ec] my-2 md:my-4 text-xs md:text-sm lg:text-base text-start">
                  We are a boutique real estate agency focused on more than just property transactions. Our mission is to empower clients to achieve financial freedom through personalized, bespoke real estate solutions. We are committed to building lasting relationships based on trust, transparency, and market expertise. Partnered with Dubai’s leading developers, we offer deep market knowledge to help clients make informed, confident decisions. Our vision is to be a globally recognized agency known for fostering enduring relationships, success, and loyalty, while empowering both clients and team members to thrive financially.
                </p>

                {/* Call to Action Button */}
                <button className="bg-[#687878] text-white px-6 md:px-10 py-2 md:py-3 rounded-md text-xs md:text-sm lg:text-base transition-all duration-300 ease-in-out transform hover:bg-[#3d6a64] hover:md:scale-110">
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroAbout;
