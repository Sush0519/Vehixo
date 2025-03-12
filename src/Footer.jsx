export default function Footer() {
  return (
    <div className="w-full bg-[#15155f] flex flex-col text-white">
      {/* Top Section */}
      <div className="border-[#053747] border-b-2 flex flex-col md:flex-row justify-between px-6 py-6 items-center text-center md:text-left space-y-4 md:space-y-0">
        <p className="font-bold text-4xl">Vehixo</p>
        <ul className="flex flex-wrap justify-center gap-6 md:gap-4">
          <li className="hover:text-[#de9a1c]">
            <a href="#">Home</a>
          </li>
          <li className="hover:text-[#de9a1c]">
            <a href="#">About</a>
          </li>
          <li className="hover:text-[#de9a1c]">
            <a href="#">Service</a>
          </li>
          <li className="hover:text-[#de9a1c]">
            <a href="#">Contact</a>
          </li>
        </ul>
        <p className="hover:text-[#de9a1c] text-sm md:text-base">
          info@vehixo.com
        </p>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between px-6 py-4 items-center text-center md:text-left space-y-3 md:space-y-0">
        <p className="text-sm md:text-base">
          &copy; 2025 Vehixo. All rights reserved.
        </p>
        <ul className="flex flex-wrap justify-center gap-4">
          <li className="hover:text-[#de9a1c]">
            <a href="#">Privacy Policy</a>
          </li>
          <li className="hover:text-[#de9a1c]">
            <a href="#">Terms & Conditions</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
