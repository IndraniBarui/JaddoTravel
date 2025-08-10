import React from "react";

import girlImage from "../../assets/Traveller 1.png";

export default function Hero() {
  return (
    <div
      className="flex"

    >
      <div className="max-w-7xl mx-auto flex justify-center md:items-start mt-28">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Content */}
          <div className="w-full md:w-1/2 text-left md:p-20 pl-[10%]">
            <h6 className="text-orange-500 font-bold uppercase text-sm tracking-wide">
              BEST DESTINATIONS AROUND THE WORLD
            </h6>
            <h1 className="text-xl md:text-5xl lg:text-7xl font-bold mt-4 leading-tight">
              Travel, <span className="underline">enjoy</span> <br />
              and live a new <br />
              and full life
            </h1>
            <p className="text-gray-500 mt-4">
              Built Wicket longer admire do barton vanity itself do in it.
              Preferred to sportsmen it engrossed listening. Park gate sell they
              west hard for the.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-6 py-2 rounded shadow">
                Find out more
              </button>
              <button className="bg-white border border-gray-300 flex items-center px-4 py-2 rounded shadow hover:shadow-md">
                <i className="bi bi-play-circle-fill text-red-500 mr-2"></i> Play Demo
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2 flex justify-center  md:mt-0">
            <img
              src={girlImage}
              alt="Traveler"
              className="max-h-[650px] w-auto object-contain animate-float"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
