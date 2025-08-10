import React from "react";
import greeceImg from "../../assets/Rectangle.jpg";
import taxi from "../../assets/taxi 1.png";
import Traveller from "../../assets/Traveller 1.png";
import water from "../../assets/water-sport 1.png";
export default function Nexttrip() {
  const steps = [
    {
      icon: taxi, // Replace with your actual icon paths
      title: "Choose Destination",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
      color: "bg-yellow-300",
    },
    {
      icon: Traveller,
      title: "Make Payment",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
      color: "bg-orange-100",
    },
    {
      icon: water,
      title: "Reach Airport on Selected Date",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
      color: "bg-purple-100",
    },
  ];
  return (
    <section className="py-16 bg-white flex flex-col-reverse items-center">
      <div className="mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <div className="w-full lg:w-1/2">
          <p className="text-sm text-gray-400 font-semibold mb-2">
            Easy and Fast
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Book Your Next Trip <br className="hidden md:block" /> In 3 Easy
            Steps
          </h2>
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start gap-4">
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-xl ${step.color}`}
                >
                  <img
                    src={step.icon}
                    alt={step.title}
                    className="w-6 h-6 object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    {step.title}
                  </h4>
                  <p className="text-gray-500 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative w-full max-w-sm mx-auto">
          <div className="absolute -top-10 -right-10 w-80 h-80 bg-blue-400 opacity-30 blur-[100px] rounded-full z-0"></div>
          <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-blue-400 opacity-30 blur-[100px] rounded-full z-0"></div>

          <div className="relative z-10 bg-white rounded-[30px] overflow-hidden shadow-lg p-4">
            <img
              src={greeceImg}
              alt="Trip to Greece"
              className="rounded-[20px] w-full h-52 object-cover"
            />

            <div className="mt-4">
              <h3 className="text-gray-800 font-semibold text-lg">
                Trip To Greece
              </h3>
              <p className="text-gray-400 text-sm">
                14–29 June | by Robbin Joseph
              </p>

              <div className="flex items-center gap-4 mt-3 text-gray-400 text-lg">
                <span>🍃</span>
                <span>🗺</span>
                <span>✈️</span>
              </div>

              <div className="flex items-center justify-between mt-3 text-sm text-gray-500">
                <span>🏙 24 people going</span>
                <button className="text-purple-500">♡</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
