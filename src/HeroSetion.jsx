import Bg from "../public/Images/Background.jpg";
import { IoMdSearch } from "react-icons/io";

export default function HeroSection() {
  return (
    <div
      className="flex-col px-2  flex items-center justify-center text-white"
      style={{
        height: "600px",
        backgroundImage: `url(${Bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <p className="text-white font-bold text-center text-lg md:text-2xl ">
        Your workspace, your rules—choose a private desk or go flexible.
      </p>
      <p className="text-white font-bold my-4 text-center text-4xl md:text-6xl ">
        <span className="text-[#15155f]">Coworking</span> that fits your
        lifestyle<span className="text-[#15155f]">.</span>
      </p>
      <div className="w-[380px] md:w-[750px] lg:w-[900px] shadow-lg flex items-center justify-center mt-4 rounded-lg h-24 md:h-28 bg-white">
        <input
          placeholder="Enter city or workspace name"
          className="rounded-l-lg focus:outline-none  text-center h-10 md:h-14 w-[200px] md:w-[500px] lg:w-[600px] text-black placeholder:text-sm md:placeholder:text-xl border-gray-200  border-2"
          type="text"
        />

        <div className="bg-[#15155f] flex items-center justify-center shadow-md  rounded-r-lg text-center  w-32 md:w-44 h-10 md:h-14">
          <p className="text-[0.8rem] md:text-[1.1rem]  lg:text-[1.20rem]">
            Find a Workspace
          </p>
        </div>
      </div>
    </div>
  );
}
