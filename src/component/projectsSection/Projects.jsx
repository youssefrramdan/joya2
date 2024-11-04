import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import VisualImage from "./VisualImage";
import PresentationSection from "./PresentationSection";
import FiltersSection from "./FiltersSection";
import PropertiesToBuy from "./PropertiesToBuy";
import PropertySlider from "./PropertySlider";
import PropertiesOffPlan from "./PropertiesOffPlan";
import ConnectWithUs from "./ConnectWithUs";
import OffPlan from "./offplan";

function Projects() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return (
    <div className="bg-[#111612] overflow-hidden">
      <div data-aos="fade-up">
        <VisualImage />
      </div>
      <div data-aos="fade-left">
        <PresentationSection />
        <FiltersSection />
      </div>

      <div data-aos="fade-up">
        <PropertiesToBuy />
        <PropertySlider />
      </div>

      {/* Optional sections with AOS animations */}
      {/* <div data-aos="fade-right">
        <PrivateListings />
        <PropertiesSlider />
      </div> */}

      <div data-aos="fade-up">
        <OffPlan />
        <PropertiesOffPlan />
      </div>

      <div data-aos="fade-up">
        <ConnectWithUs />
      </div>
    </div>
  );
}

export default Projects;
