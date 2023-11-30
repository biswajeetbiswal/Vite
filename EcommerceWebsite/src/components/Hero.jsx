import React from "react";
import dry from "../images/DryFruits.jpg";
import pizza from "../images/pizza.jpg";
import chips from "../images/chips.jpg";
const Hero = () => {
  return (
    <>
      <div className="py-8">
        <div className="grid sm:grid-cols-3 sm:grid-rows-2 gap-2 lg:gap-8 w-4/5 mx-auto">
          <div className=" relative sm:col-span-2 sm:row-start-1 sm:row-end-3 ">
            <img
              src={dry}
              alt=""
              className=" w-full h-full shadow-xl object-cover rounded-xl"
            />
            <div className="absolute max-w-[370px] top-[50%] ml-4 sm:ml-16 space-y-1.5 sm:space-y-4 -translate-y-[50%]">
              <p className="text-2xl sm:text-base">100% Original Dry Fruits</p>
              <h2 className="text-2xl  lg:text-4xl font-bold">
                Dried Fruits Best Quality
              </h2>
              <p className="text-gray-500 text-xl ">Starting At</p>
              <div className="text-medium text-red-600 text-2xl lg:text-4xl  font-bold">
                $18.36
              </div>
              <button className="bg-blue-700 text-white px-3 py-1 rounded-md active:bg-blue-800 cursor-pointer active:text-white font-bold hover:bg-white hover:text-blue-900 border-2 hover:border-blue-900">
                Shop Now
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              src={pizza}
              alt=""
              className=" w-full h-full object-cover shadow-xl rounded-xl"
            />
            <div className="absolute top-[50%] ml-4 xl:ml-10 space-y-1.5 sm:space-y-2 -translate-y-[50%]">
              <h2 className="text-2xl sm:text-lg lg:text-2xl font-bold">
                Best Yummy Pizza
              </h2>
              <p className="text-gray-500 text-xl sm:text-base ">Starting At</p>
              <div className=" text-red-600  lg:text-2xl font-bold">$25</div>
              <button className="bg-blue-700 text-white px-3 py-1 rounded-md   active:bg-blue-800 cursor-pointer active:text-white font-bold hover:bg-white hover:text-blue-900 border-2 hover:border-blue-900">
                Shop Now
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              src={chips}
              alt=""
              className="w-full h-full object-cover shadow-xl rounded-xl"
            />
            <div className="absolute top-[50%] ml-4 xl:ml-10 space-y-1.5 sm:space-y-0.5 lg:space-y-2 -translate-y-[50%]">
              <h2 className="text-2xl sm:text-lg lg:text-2xl  font-bold">
                Best Yummy Chips
              </h2>
              <p className="text-gray-500 text-xl sm:text-base">Starting At</p>
              <div className=" text-red-600  lg:text-2xl font-bold">$10</div>
              <button className="bg-blue-700 text-white px-3 py-1 rounded-md active:bg-blue-800 cursor-pointer active:text-white font-bold hover:bg-white hover:text-blue-900 border-2 hover:border-blue-900">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
