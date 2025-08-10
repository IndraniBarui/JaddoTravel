import React from "react";
import Brand1 from "../../assets/image.png";
import Brand2 from "../../assets/image.png";
import Brand3 from "../../assets/image.png";
import Brand4 from "../../assets/image.png";

const logos = [
  { src: Brand1, alt: "Axon Airlines" },
  { src: Brand2, alt: "Jetstar" },
  { src: Brand3, alt: "Expedia", highlight: true },
  { src: Brand4, alt: "Qantas" },
];

export default function BrandScrollar() {
  return (
    <div className="overflow-hidden py-8 relative">
      <div className="animate-scroll flex items-center gap-16 w-max px-5">
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className={`flex items-center justify-center`}
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-40 w-40 object-contain grayscale hover:grayscale-0 transition"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
