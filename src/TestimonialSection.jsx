import { useRef } from "react";

import T1 from "../public/Images/T1.png";
import T2 from "../public/Images/T2.png";
import T3 from "../public/Images/T3.png";
import Rating from "../public/Images/Rating.png";
import Rating1 from "../public/Images/Rating1.png";

const testimonials = [
  {
    id: 1,
    img: T1,
    name: "Elena Carter",
    text: "This platform has transformed the way I work! The flexibility to choose between hot desks, dedicated spaces, or private offices fits my dynamic schedule. With high-speed WiFi and premium locations, staying productive is effortless. Highly recommended!",
    rating: Rating,
  },
  {
    id: 2,
    img: T2,
    name: "Liam Mitchell",
    text: "I never realized how much my work routine needed a change until I joined this platform. The energy, the people, and the overall vibe make every workday feel fresh and motivating. It’s not just a space—it’s an experience!",
    rating: Rating1,
  },
  {
    id: 3,
    img: T3,
    name: "Sophia Reynolds",
    text: "Working here feels effortless. It’s the perfect balance of focus and community—no distractions, no isolation. I love the vibrant atmosphere and the chance to connect with like-minded professionals. It’s a space that actually makes work enjoyable!",
    rating: Rating,
  },
];

export default function TestimonialSection() {
  const scrollRef = useRef(null);
  let isDragging = false;
  let startX, scrollLeft;

  const startDrag = (e) => {
    isDragging = true;
    startX = e.pageX || e.touches[0].pageX;
    scrollLeft = scrollRef.current.scrollLeft;
  };

  const onDrag = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX || e.touches[0].pageX;
    const walk = (x - startX) * 2; // Adjust scrolling speed
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const stopDrag = () => {
    isDragging = false;
  };

  return (
    <div className="flex-col w-full">
      <p className="text-[28px] md:text-4xl abril font-bold pl-8 md:pl-13 py-8">
        Let's See What Our Happy Members Have to Say!
      </p>

      {/* Desktop View (Grid) */}
      <div className="hidden lg:flex flex-wrap justify-center md:justify-around mt-15">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="flex-col relative Test-bg px-3 flex items-center bg-[#e7e7f0] text-center rounded-2xl w-96  h-72  mb-20"
          >
            <img
              className="w-32 absolute -top-14"
              src={testimonial.img}
              alt={testimonial.name}
            />
            <div className="flex-col flex items-center mt-22">
              <p className="font-bold text-xl">{testimonial.name}</p>
              <p className="text-gray-400 text-sm ">{testimonial.text}</p>
              <img
                className="w-32 mt-4"
                src={testimonial.rating}
                alt="Rating"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Mobile View (Scrollable) */}
      <div
        ref={scrollRef}
        className="lg:hidden flex overflow-x-auto space-x-6 px-8 py-6 scroll-smooth"
        onMouseDown={startDrag}
        onMouseMove={onDrag}
        onMouseUp={stopDrag}
        onMouseLeave={stopDrag}
        onTouchStart={startDrag}
        onTouchMove={onDrag}
        onTouchEnd={stopDrag}
      >
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="flex-col relative mt-5 Test-bg px-3 flex items-center bg-[#e7e7f0] text-center rounded-xl w-72 h-60 mb-10 flex-shrink-0"
          >
            <img
              className="w-20 absolute -top-10"
              src={testimonial.img}
              alt={testimonial.name}
            />
            <div className="flex-col flex items-center mt-12 px-2">
              <p className="font-semibold text-lg">{testimonial.name}</p>
              <p className="text-gray-500 text-[11.5px] leading-tight">
                {testimonial.text}
              </p>
              <img
                className="w-24 mt-3"
                src={testimonial.rating}
                alt="Rating"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
