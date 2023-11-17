import React from "react";
import { HiChevronDown } from "react-icons/hi";
import '../../assets/Animation.css'
const Miss = ({ route }) => {
  return (
    <div className="relative">
    <div>
      <div className="">
        <img style={{ height: '100vh', width: '100%' }} src={route.image} className="" alt="" />
      </div>
      <div  className="absolute max-md:hidden  text-white bottom-28 w-full p-4">
        <div  className="absolute pl-10 bottom-14 max-md:left-6">
          <h5 className="text-xl max-md:text-lg pb-4">{route.tophic}</h5>
          <h1 className="text-5xl max-md:text-xl pb-6 ">
            {route.headtophic1} <br /> {route.headtophic2}{" "}
          </h1>
          <button className="uppercase border-4 border-white p-4">{route.missButton}</button>
        </div>
        {/* Additional content at the bottom of each photo */}
        <div className="text-center mt-100">
          <p className="text-8xl mx-auto font-thin w-5"><HiChevronDown /></p>
        </div>
      </div>
    </div>

    <div  className=" py-10 md:hidden bg-black text-white bottom-28 w-full p-4">
        <div  className=" pl-10 bottom-14 ">
          <h5 className="text-xl max-md:text-lg pb-4">{route.tophic}</h5>
          <h1 className="text-5xl max-md:text-3xl pb-6 ">
            {route.headtophic1} <br /> {route.headtophic2}{" "}
          </h1>
          <button className="uppercase border-4 border-white p-4 ">{route.missButton}</button>
        </div>
      </div>
  </div>
  );
};

export default Miss;
