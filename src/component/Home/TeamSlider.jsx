import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Pagination } from "swiper/modules"; // Import pagination if needed
import image1 from "../../images/sliders/image 1.png";
import image2 from "../../images/sliders/image 2.png";

const teamMembers = [
  {
    name: "Nabeel Hammudeh",
    role: "Managing Director",
    img: image1,
    link: "https://www.joyaproperties.ae/en/member/domi-sofroniciova/",
  },
  {
    name: "Mohammad Rabie",
    role: "CEO",
    img: image2,
    link: "https://www.joyaproperties.ae/en/member/ruba/",
  },
];

const TeamSlider = () => {
  return (
    <section className="py-16 text-[#EFECE6] mt-10">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Title Section */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold text-[#f1f0ec]">The Team</h2>
            <h3 className="text-[14px] md:text-xl text-[#f0ede6]">
              With unrivaled expertise in the joya market, our advisors will guide
              you on your journey.
            </h3>
          </div>
          <a href="/en/team/" className="text-[#faf8f7] hover:underline text-[10px] md:text-base">
            Meet The Team
          </a>
        </div>

        {/* Swiper Component */}
        <Swiper
          spaceBetween={40}
          slidesPerView={2}
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 1, spaceBetween: 30 },
            1024: { slidesPerView: 2, spaceBetween: 40 },
          }}
          modules={[Pagination]}
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="relative group overflow-hidden rounded-2xl mx-4">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-[600px] md:h-[800px] lg:h-[1000px] object-cover object-top rounded-3xl transition-transform duration-500 group-hover:scale-105 grayscale hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-[#687878] bg-opacity-65 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500 flex flex-col justify-center items-center text-center text-[#f1f0ec]">
                  <h2 className="text-2xl font-semibold mb-2">{member.name}</h2>
                  <h3 className="text-xl mb-4">{member.role}</h3>
                  <a
                    href={member.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#3d6a64] hover:underline"
                  >
                    Find out more
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TeamSlider;
