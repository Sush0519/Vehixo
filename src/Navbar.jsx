import { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full z-20 fixed px-4 flex items-center justify-between h-18 bg-white shadow-md">
      {/* Logo */}
      <h2 className="text-[#de9a1c] text-4xl font-bold">Vehixo</h2>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex py-2 text-xl font-semibold text-[#de9a1c] space-x-3">
        {["Home", "About", "Service", "Contact"].map((item) => (
          <li
            key={item}
            className="hover:bg-[#15155f] transition-all rounded-full hover:text-white px-4 py-1 hover:scale-105"
          >
            <a href="#">{item}</a>
          </li>
        ))}
      </ul>

      {/* Right Section: Search + Icons */}
      <div className="flex items-center space-x-3">
        {/* Searchbar */}
        <div className="relative hidden md:flex items-center">
          <input
            placeholder="Search here.."
            className="bg-white border-2 border-[#15155f] text-center pb-1 placeholder:text-xs w-56 rounded-full focus:outline-none"
            type="text"
          />
          <button className="absolute right-2 text-xl top-1.5">
            <IoMdSearch />
          </button>
        </div>

        {/* User Icon */}
        <button>
          <FaUserAlt className="text-xl text-[#15155f]" />
        </button>

        {/* Hamburger Menu (Hidden on md and above) */}
        <button
          className="lg:hidden text-2xl text-[#15155f]"
          onClick={() => setIsOpen(!isOpen)}
        >
          <GiHamburgerMenu />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="absolute top-16 right-4 bg-blue-300/10 backdrop-blur-md shadow-lg rounded-lg p-3 w-40 flex flex-col space-y-2 text-[#15155f] font-semibold border border-white/30">
          {["Home", "About", "Service", "Contact"].map((item) => (
            <li
              key={item}
              className="hover:bg-[#de9a1c]/80 transition-all hover:text-white  rounded-md p-2 text-center border-b border-white/20 last:border-b-0"
            >
              <a href="#" className=" transition-all">
                {item}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
