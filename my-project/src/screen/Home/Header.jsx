import React, { useState } from "react";
import Jadoo from "../../assets/Jadoo.png";
import { Menu, X } from "lucide-react"; // You can also use any other icon library

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const navItems = ["Home", "Shop", "About", "Services", "Contact"];

  return (
    <>
      {/* Header */}
      <div className="py-3 px-4 bg-transparent absolute w-full z-50">
        <div className="container mx-auto flex justify-between items-center">
          <img src={Jadoo} alt="jadoo" className="h-10" />

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-3 flex-wrap">
            {navItems.map((tab, index) => (
              <button
                key={index}
                className="border border-black text-black px-4 py-1 rounded-md hover:bg-black hover:text-white transition-colors duration-200"
              >
                {tab}
              </button>
            ))}
            <button className="border border-black text-black px-4 py-1 rounded-md hover:bg-black hover:text-white transition-colors duration-200">
              SignUp
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-black"
            onClick={toggleSidebar}
            aria-label="Toggle Menu"
          >
            {isSidebarOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-40 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 space-y-6">
          {navItems.map((item, index) => (
            <button
              key={index}
              className="block w-full text-left text-black py-2 px-3 rounded-md hover:bg-gray-100"
              onClick={toggleSidebar}
            >
              {item}
            </button>
          ))}
          <button
            className="w-full text-left text-black py-2 px-3 rounded-md hover:bg-gray-100"
            onClick={toggleSidebar}
          >
            SignUp
          </button>
        </div>
      </div>

      {/* Overlay when Sidebar is open */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-40 z-30"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
}
