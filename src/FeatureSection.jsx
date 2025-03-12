import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import Price from "../public/Images/best-price.png";
import Wifi from "../public/Images/wifi.png";
import Location from "../public/Images/location.png";
import Demand from "../public/Images/demand.png";

export default function FeatureSection() {
  const [animate, setAnimate] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // lg and above
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!isLargeScreen) return; // No animation for screens below lg

      const section = document.getElementById("feature-section");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 1.3 && !animate) {
          setAnimate(true);
        }
      }
    };

    if (isLargeScreen) {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [animate, isLargeScreen]);

  return (
    <div id="feature-section" className="w-full flex-col py-14 flex  ">
      <p className=" text-[28px] text-wrap md:text-4xl font-bold md:pl-10  abril pb-8 ">
        Enhancing Your Workspace Experience With
      </p>
      <div className="grid grid-cols-2 gap-4 md:flex md:flex-wrap md:justify-around w-full px-4 relative">
        {[
          {
            img: Price,
            title: "Flexible Pricing",
            description:
              "Pay only for what you need—day, week, or month—saving costs while enjoying a professional workspace.",
          },
          {
            img: Wifi,
            title: "High-Speed Wifi",
            description:
              "Stay connected with high-speed WiFi, ensuring seamless work, video calls, and collaboration.",
          },
          {
            img: Location,
            title: "Premium Location",
            description:
              "Work from premium locations in the city center, near business hubs and essential amenities.",
          },
          {
            img: Demand,
            title: "On-Demand Booking",
            description:
              "Instantly book a workspace with no long-term commitments, offering complete flexibility.",
          },
        ].map((feature, index) => {
          const featureContent = (
            <div className="bg flex flex-col border border-[#e9e9f7] bg-white p-3 md:p-4 rounded-xl items-center justify-center w-40 h-48 md:w-56 md:h-64 shadow-md text-center">
              <img
                className="w-12 h-12 md:w-16 md:h-16"
                src={feature.img}
                alt={feature.title}
              />
              <p className="text-sm md:text-lg font-bold mt-2">
                {feature.title}
              </p>
              <p className="text-[10px] md:text-sm text-gray-400 px-2 mt-1">
                {feature.description}
              </p>
            </div>
          );

          return isLargeScreen ? (
            <motion.div
              key={index}
              initial={{ x: 50, y: -60 * (5 - index), opacity: 0 }}
              animate={animate ? { x: 0, y: 0, opacity: 1 } : {}}
              transition={{
                delay: index * 0.5,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="absolute md:relative"
            >
              {featureContent}
            </motion.div>
          ) : (
            <div key={index} className="relative">
              {featureContent}
            </div>
          );
        })}
      </div>
    </div>
  );
}
