import React from "react";
// import { HiChevronDown } from "react-icons/hi";
// <HiChevronDown />
import '../assets/Animation.css'

const Upcoming = () => {
  return (
    <div>
      <div className="relative w-full h-screen -z-50 uppercase ">
        <video
          className="object-cover w-full h-full relative"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="https://sxcontent9668.azureedge.us/cms-assets/assets/Starship_Website_Page_2023_Half_Quality_cc86c19c82.mp4"
            type="video/mp4"
          />
          
        </video>
      </div>
      <div style={{left:'10%'}} className="absolute max-md:hidden bottom-28 text-white ">
        <div className="pl-10">
          <h5 className="text-xl pb-4 max-md:text-lg">Upcomming Launch</h5>
          <h1 className="text-6xl pb-4 max-md:text-2xl">
            Starship's second <br /> flight test{" "}
          </h1>
          <button className="uppercase border-4   border-white p-4">
            learn more
          </button>
        </div>
      </div>
      <div style={{left:'10%'}} className="md:hidden py-10 bottom-28 bg-black text-white ">
        <div className="pl-10">
          <h5 className="text-xl pb-4 max-md:text-lg">Upcomming Launch</h5>
          <h1 className="text-6xl pb-4 max-md:text-3xl">
            Starship's second <br /> flight test{" "}
          </h1>
          <button className="uppercase border-4 relative  border-white p-4">
            learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
