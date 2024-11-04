import React, { useEffect, useState } from "react";
import FeaturesVisualImage from "./FeaturesVisualImage";
import FeaturesProperties from "./FeaturesProperties";
import FeatureTitle from "./FeaturesTitle";


function Features() {
  const [featureProperties, setFeatureProperties] = useState([]);

  useEffect(() => {
    async function getFeatureProperties() {
      try {
        const data = await fetch(
          "https://joya-backend-deploy-test.vercel.app/property/get-all-properties",
          {
            cache: "force-cache",
          }
        );
        const res = await data.json();
        setFeatureProperties(res.properties);
      } catch (error) {
        console.error("Failed to fetch properties:", error);
      }
    }

    getFeatureProperties();
  }, []);

  return (
    <div className="bg-[#111612] overflow-hidden">
      <div>
        <FeaturesVisualImage />
      </div>

      <div>
        <FeatureTitle />

      </div>

      <div>
        <FeaturesProperties featureProperties={featureProperties} />
      </div>
    </div>
  );
}

export default Features;
  