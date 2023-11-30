import React from "react";
import { BsSearch } from "react-icons/bs";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import Cart from "./Cart";
const Navbar = (props) => {
  const { css } = props;
  return (
    <>
      <div className=" py-5 shadow-lg sticky top-0 z-10 bg-white">
        <div className="flex gap-2 justify-between items-center w-4/5 mx-auto ">
          <div>
            <h1 className="text-4xl font-medium ">Logo</h1>
          </div>
          <div className="relative w-full max-w-[500px]">
            <input
              type="text"
              className="bg-[#f2f3f5] border-none  outline-none px-6 py-2 w-full rounded-[30px]"
              placeholder="Search Product..."
            />
            <BsSearch
              className="absolute top-0 right-0 mt-3 mr-5  text-gray-500"
              size={15}
            />
          </div>
          <div className="flex gap-2">
            <div>
              <AiOutlineUser className="border border-gray-600 rounded-full w-[40px] h-[40px] place-items-center p-2" />
            </div>
            <div
              className="relative"
              onClick={() => css((prevalue) => !prevalue)}
            >
              <AiOutlineShoppingCart className="border border-gray-600 rounded-full w-[40px] h-[40px] place-items-center p-2" />
              <Cart length={props.size} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
