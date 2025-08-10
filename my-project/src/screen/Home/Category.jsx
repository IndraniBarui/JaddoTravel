import React ,{useState}from "react";
import { FaPlane, FaMicrophone, FaCog } from "react-icons/fa";
import { WiDaySunnyOvercast } from "react-icons/wi";
export default function Category() {
     const [activeIndex, setActiveIndex] = useState(null);
  const services = [
    {
      title: "Calculated Weather",
      description:
        "Built Wicket longer admire do barton vanity itself do in it.",
      icon: <WiDaySunnyOvercast className="text-4xl text-blue-500" />,
    },
    {
      title: "Best Flights",
      description:
        "Engrossed listening. Park gate sell they west hard for the.",
      icon: <FaPlane className="text-3xl text-blue-600" />,
      highlight: true,
    },
    {
      title: "Local Events",
      description:
        "Barton vanity itself do in it. Prefer to men it engrossed listening.",
      icon: <FaMicrophone className="text-2xl text-gray-700" />,
    },
    {
      title: "Customization",
      description:
        "We deliver outsourced aviation services for military customers",
      icon: <FaCog className="text-2xl text-gray-700" />,
    },
  ];
  return (
    <section className="py-16 bg-white text-center">
      <div className="container mx-auto px-4">
        <div className="container pb-10">
          <p className="text-sm text-gray-500 tracking-widest uppercase mb-2">
            {" "}
            Category
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mb-12">
            We Offer Best Services
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((service, index) => (
           <div
          key={index}
          onClick={() => setActiveIndex(index)}
          className={`cursor-pointer rounded-lg p-6 transition-shadow duration-300 ${
            activeIndex === index
              ? "bg-white shadow-xl border-t-4 border-orange-400"
              : "bg-transparent rounded-lg p-6"
          }`}
        >
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
