import React from "react";
import { AiFillStar, AiOutlineShopping, AiOutlineStar } from "react-icons/ai";
import { message } from "antd";
const ProductsCard = (props) => {
  const { onData, ele } = props;
  const handleData = () => {
    onData(ele);
    message.success("Added to Cart!");
  };
  return (
    <>
      <div className="border border-gray-300 hover:border-gray-400 hover:scale-105 transition-transform rounded-lg">
        <div>
          <img
            src={props.ele.img}
            alt=""
            className="h-[250px] object-center sm:w-[250px]"
          />
        </div>
        <div className="space-y-4 flex justify-between items-center  relative p-4">
          <div>
            <div className="text-yellow-400 flex gap-[2px] text-[20px]">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <h3 className="font-medium">{props.ele.name}</h3>
            <h3 className="text-2xl font-medium text-red-600">
              {props.ele.price}
            </h3>
          </div>
          <div
            className="p-2 bg-green-500 rounded-full text-white text-[28px] cursor-pointer active:bg-green-600 active:text-white hover:bg-white hover:text-green-600 border-2 hover:border-green-600"
            onClick={handleData}
          >
            <AiOutlineShopping />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsCard;
