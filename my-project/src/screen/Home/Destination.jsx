import React from 'react'
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.png"
const destinations = [
  {
    image: img1,
    title: "Rome, Italy",
    price: "$5.42k",
    duration: "10 Days Trip",
  },
  {
    image: img2,
    title: "London, UK",
    price: "$4.2k",
    duration: "12 Days Trip",
  },
  {
    image: img3,
    title: "Full Europe",
    price: "$15k",
    duration: "28 Days Trip",
  },
];
export default function Destination() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-400 uppercase tracking-wide mb-2 text-sm">
          Top Selling
        </p>
        <h2 className="text-4xl font-bold text-gray-900 mb-12">
          Top Destinations
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:-translate-y-1"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-5 flex justify-between items-center">
                <h3 className="text-gray-800 font-medium">{item.title}</h3>
                <p className="text-gray-700 font-semibold">{item.price}</p>
              </div>
              <div className="px-5 pb-5 text-left text-gray-500 text-sm flex items-center gap-2">
                <span className="text-lg">🧭</span>
                {item.duration}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
