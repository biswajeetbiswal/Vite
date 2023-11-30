import React from "react";
import { AiOutlineClose } from "react-icons/ai";
const CartCard = (props) => {
  const { deleteEle, index } = props;
  const removeItem = () => {
    deleteEle(index);
  };
  return (
    <>
      <div className="flex items-center gap-4 my-4 relative">
        <div className="w-[65px] h-[65px]">
          <img src={props.ele.img} alt="" className="w-full h-full" />
        </div>
        <div className="space-y-1">
          <h1 className="font-semibold text-sm">{props.ele.name}</h1>
          <p className="text-xs">1 * {props.ele.price}</p>
        </div>
        <button
          className="absolute right-0 cursor-pointer active:text-red-500"
          onClick={removeItem}
        >
          {<AiOutlineClose />}
        </button>
      </div>
    </>
  );
};

export default CartCard;
