import React, { useState } from "react";

// Dummy testimonial data
const testimonials = [
  {
    name: "Mike Taylor",
    location: "Lahore, Pakistan",
    position: "",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    quote:
      "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
  },
  {
    name: "Chris Thomas",
    location: "CEO of Red Button",
    position: "",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    quote:
      "I’ve had the best experience. The support team is amazing. Everything works seamlessly!",
  },
  {
    name: "Sarah Lee",
    location: "Marketing Head, Blue Inc.",
    position: "",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    quote:
      "An absolutely stunning experience. I feel supported every step of the way!",
  },
];

export default function BrandCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const current = testimonials[activeIndex];

  return (
    <div className="max-w-7xl mx-auto lg:px-[10%] py-16 flex flex-col md:flex-row items-center justify-between relative px-5">
 
      <div className="md:w-1/2 mb-10 md:mb-0">
        <p className="text-sm text-gray-500 uppercase tracking-widest mb-2">
          Testimonials
        </p>
        <h2 className="text-4xl font-bold text-[#091133]">
          What People Say<br />About Us.
        </h2>

       
        <div className="flex mt-10 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeIndex === index ? "bg-[#091133]" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>

    
      <div className="md:w-1/2 relative">
      
        <img
          src={current.avatar}
          alt={current.name}
          className="w-16 h-16 rounded-full absolute -left-8 -top-8 border-4 border-white shadow-lg z-10 ml-[10%]"
        />

        
        <div className="bg-white shadow-lg rounded-xl p-6 md:p-10 ml-6 relative z-0">
          <p className="text-gray-600 mb-6 text-lg leading-relaxed">“{current.quote}”</p>
          <div>
            <h4 className="font-bold text-[#091133]">{current.name}</h4>
            <p className="text-sm text-gray-500">{current.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
