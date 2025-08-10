import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white text-[#5E6282] px-5">
     
      <div className="bg-[#fef4f4] rounded-3xl max-w-6xl mx-auto px-6 py-12 md:py-20 mt-16 relative overflow-hidden">
       
        <div className="absolute top-0 right-0 z-0">
          <img src="/path-to-top-right-bg.svg" alt="Design" />
        </div>

        <h2 className="text-center text-2xl md:text-3xl font-semibold text-[#5E6282] max-w-2xl mx-auto z-10 relative">
          Subscribe to get information, latest news and other interesting offers about Jadoo
        </h2>

        
        <div className="mt-10 flex flex-col md:flex-row justify-center items-center gap-4 z-10 relative">
          <div className="flex items-center bg-white rounded-full px-4 py-3 w-full max-w-md shadow-md">
            <span className="text-gray-400 mr-2">
              📧 
            </span>
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 outline-none text-sm text-[#5E6282] bg-transparent"
            />
          </div>
          <button className="bg-orange-400 hover:bg-orange-500 transition text-white font-semibold px-6 py-3 rounded-xl">
            Subscribe
          </button>
        </div>

       
        <div className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-tr from-[#747DEF] to-[#5E6282] rounded-full flex items-center justify-center text-white text-xl shadow-md z-10">
          ✈️
        </div>
      </div>

     
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-5 gap-10">
     
        <div className="md:col-span-1">
          <h3 className="text-2xl font-bold text-[#181E4B] mb-4">Jadoo.</h3>
          <p className="text-sm leading-relaxed">
            Book your trip in minute, get full Control for much longer.
          </p>
        </div>

       
        <div>
          <h4 className="font-bold text-[#181E4B] mb-3">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#">About</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Mobile</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-[#181E4B] mb-3">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Help/FAQ</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Affiliates</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-[#181E4B] mb-3">More</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Airlinefees</a></li>
            <li><a href="#">Airline</a></li>
            <li><a href="#">Low fare tips</a></li>
          </ul>
        </div>

       
        <div className="flex flex-col items-start space-y-4">
          <div className="flex items-center space-x-3">
            <a href="#" className="w-8 h-8 rounded-full bg-[#eeeeee] flex items-center justify-center text-[#5E6282] hover:text-[#181E4B]">
              f
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-[#eeeeee] flex items-center justify-center text-[#5E6282] hover:text-[#181E4B]">
              i
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-[#eeeeee] flex items-center justify-center text-[#5E6282] hover:text-[#181E4B]">
              t
            </a>
          </div>
          <div>
            <p className="font-semibold text-[#181E4B] mb-2">Discover our app</p>
            <div className="flex gap-2">
              <img src="/images/playstore.png" alt="Play Store" className="h-10" />
              <img src="/images/appstore.png" alt="App Store" className="h-10" />
            </div>
          </div>
        </div>
      </div>

      
      <div className="text-center text-sm text-gray-400 pb-6">
        All rights reserved @jadoo.co
      </div>
    </footer>
  );
}
