
import React from "react";
// import { useSelector } from "react-redux";
import Header from "../Home/Header";
import Hero from "../Home/Hero";
import Category from "./Category";
import bgImage from "../../assets/Decore.png";
import Destination from "./Destination";
import Nexttrip from "./Nexttrip";
import BrandScrollar from "./BrandScrollar";
import BrandCarousel from "./BrandCarousel";
import Footer from "./Footer";

// girl
export default function Home() {
//   const data = useSelector((state) => state.auth);
//   console.log(data, "datadatadata");

//   const handleLogout = async () => {
//     try {
//       const res = await axios.post(``);
//     } catch (err) {
//       console.log(err);
//     }
//   };
  return (
  <div className="relative">
  <div className="relative  w-full flex flex-col">
    <div className="absolute z-[-2] w-full h-full"  style={{
          backgroundImage: `url(${bgImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "50%",
          backgroundPosition: "top right",
        }} />
    <Header />
     <Hero />
  </div>
  <Category />
  <Destination/>
  <Nexttrip/>
   <BrandCarousel/>
   <Footer/>
  {/* <BrandScrollar/> */}
 
</div>

  );
}
