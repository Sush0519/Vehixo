import { useState } from "react";
import Bg from "../public/Images/Background.jpg";
import { IoMdSearch } from "react-icons/io";
import cities from "../src/City.json";

export default function HeroSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCities, setFilteredCities] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.trim() === "") {
      setFilteredCities([]);
      return;
    }

    const filtered = cities.filter((city) =>
      city.toLowerCase().startsWith(value.toLowerCase())
    );
    setFilteredCities(filtered);
  };

  const handleSelectCity = (city) => {
    setSearchTerm(city);
    setFilteredCities([]);
  };

  return (
    <div
      className="flex-col px-2 flex items-center justify-center text-white"
      style={{
        height: "600px",
        backgroundImage: `url(${Bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <p className="text-white font-bold asap-bold text-center text-lg md:text-2xl">
        Your workspace, your rules—choose a private desk or go flexible.
      </p>
      <p className="text-white abril font-bold my-4 text-center text-4xl md:text-6xl">
        <span className="text-[#f57505]">Coworking</span> that fits your
        lifestyle<span className="text-[#f57505]">.</span>
      </p>
      <div className="relative w-[380px] md:w-[750px] lg:w-[900px] shadow-lg flex flex-col items-center mt-4 rounded-lg bg-white">
        <div className="flex items-center justify-center w-full h-24 md:h-28">
          <input
            placeholder="Enter city or workspace name"
            className="rounded-l-lg focus:outline-none text-center h-10 md:h-14 w-[200px] md:w-[500px] lg:w-[600px] text-black placeholder:text-sm md:placeholder:text-xl border-gray-200 border-2"
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
          />
          <div className="bg-[#15155f] flex items-center justify-center shadow-md rounded-r-lg text-center w-32 md:w-44 h-10 md:h-14">
            <p className="text-[0.8rem] md:text-[1.1rem] lg:text-[1.20rem]">
              Find a Workspace
            </p>
          </div>
        </div>
        {filteredCities.length > 0 && (
          <ul className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-b-lg shadow-md max-h-40 overflow-y-auto">
            {filteredCities.map((city, index) => (
              <li
                key={index}
                className="px-4 py-2 cursor-pointer hover:bg-gray-200 text-black"
                onClick={() => handleSelectCity(city)}
              >
                {city}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
