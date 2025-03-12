import Bg from "../public/Images/Background1.jpg";
import { IoLocationOutline } from "react-icons/io5";

const workspaceData = [
  {
    id: 1,
    title: "Dedicated Desk",
    location: "Indiranagar",
    description:
      "Secure your own dedicated desk in a vibrant coworking space,complete with business address services, storage options, and premium amenities.",
    price: "Starting at ₹6,000/month",
    image: "../public/Images/bg-cards.jpg",
  },
  {
    id: 2,
    title: "Hot Desk",
    location: "Koramangala",
    description:
      " Enjoy a flexible, shared workspace with hot desks available on a first-come, first-served basis, fostering productivity and collaboration whenever you need it.",
    price: "Starting at ₹300/day",
    image: "../public/Images/bg-cards1.jpg",
  },
  {
    id: 3,
    title: "Private Offices",
    location: "MG Road",
    description:
      " Enjoy a fully enclosed private office for individuals or teams,offering a quiet, secure, and professional space to focus,collaborate, and grow your business efficiently.",
    price: "Starting at ₹12,000/month",
    image: "../public/Images/bg-cards2.jpg",
  },
  {
    id: 4,
    title: "Meeting Rooms",
    location: "Whitefield",
    description:
      "Book fully equipped, on-demand conference rooms for meetings, brainstorming, presentations, and team discussions in a professional setting.",
    price: "Starting at ₹500/hour",
    image: "../public/Images/bg-cards3.jpg",
  },
];

export default function WorkspaceSection() {
  return (
    <div
      className="w-full h-[520px] lg:h-[700px] bg-cover bg-center"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      <p className="text-[28px] text-wrap md:text-4xl font-bold pl-6 md:pl-10 py-6  abril md:py-8 text-white">
        Workspaces Built for Your Needs
      </p>

      {/* Mobile: Scrollable Carousel (below md) */}
      <div className="lg:hidden overflow-x-auto flex gap-6 px-6 pb-4 snap-x snap-mandatory scrollbar-hide">
        {workspaceData.map((workspace) => (
          <div
            key={workspace.id}
            className="flex-col space-y-2  flex text-center rounded-2xl w-60 h-84 bg-white p-4 snap-center shrink-0"
          >
            <p className="my-2 font-bold  text-2xl">{workspace.title}</p>
            <div className="flex w-full space-x-2 justify-center items-center">
              <IoLocationOutline className="text-xl text-red-500" />
              <p className="text-lg ">{workspace.location}</p>
            </div>
            <p className="text-gray-400 text-[13px]">{workspace.description}</p>
            <p className="text-lg mt-auto  font-semibold text-[#15155f]">
              {workspace.price}
            </p>
            <button className="p-2 mt-auto hover:bg-[#ca8d1a] mx-auto mb-3 w-36 text-base rounded-full text-white bg-[#f57505]">
              Book Now
            </button>
          </div>
        ))}
      </div>

      {/* Desktop: Grid Layout (above md) */}
      <div className="hidden lg:flex flex-wrap w-full justify-center md:justify-around  space-y-6 md:space-y-0">
        {workspaceData.map((workspace) => (
          <div
            key={workspace.id}
            className="flex-col  card flex text-center rounded-2xl w-72 h-[550px] bg-white overflow-hidden"
          >
            {/* Full-size image without padding */}
            <img
              className="w-full h-52 object-cover"
              src={workspace.image}
              alt={workspace.title}
            />
            <p className="my-3 font-bold text-2xl">{workspace.title}</p>
            <div className="flex w-full space-x-2 justify-center items-center">
              <IoLocationOutline className="text-xl text-red-500" />
              <p className="text-lg">{workspace.location}</p>
            </div>
            <p className="text-gray-400 px-4 text-[16px]">
              {workspace.description}
            </p>
            <p className="text-xl mt-auto font-semibold text-[#15155f]">
              {workspace.price}
            </p>
            <button className="p-2 mt-auto hover:bg-[#ca8d1a] mx-auto mb-4 w-44 text-lg rounded-full text-white bg-[#f57505]">
              Book Now
            </button>
          </div>
        ))}
      </div>

      {/* Hide scrollbar */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
