import Price from "../public/Images/best-price.png";
import Wifi from "../public/Images/wifi.png";
import Location from "../public/Images/location.png";
import Demand from "../public/Images/demand.png";

export default function FeatureSection() {
  return (
    <div className="w-full py-10 flex items-center justify-center">
      <div className="grid grid-cols-2 gap-4 md:flex md:flex-wrap md:justify-around w-full px-4">
        {/* Feature Cards */}
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
        ].map((feature, index) => (
          <div
            key={index}
            className="flex flex-col bg border border-[#e9e9f7] bg-white p-3 md:p-4 rounded-xl items-center justify-center w-40 h-48 md:w-56 md:h-64 shadow-md text-center"
          >
            <img
              className="w-12 h-12 md:w-16 md:h-16"
              src={feature.img}
              alt={feature.title}
            />
            <p className="text-sm md:text-lg font-bold mt-2">{feature.title}</p>
            <p className="text-[10px] md:text-sm text-gray-400 px-2 mt-1">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
