import React from "react";

const CardHeader = (props) => {
  return (
    <>
      <div className="space-y-2 sm:flex justify-between items-center ">
        <div>
          <h1 className="font-bold text-lg">{props.item.name}</h1>
          <h1 className="text-sm">{props.item.content}</h1>
        </div>
        <div className="sm:flex">
          <button className="text-sm bg-green-600 text-white px-4 py-1 rounded-full active:bg-green-600 cursor-pointer active:text-white font-bold hover:bg-white hover:text-green-600 border-2 hover:border-green-600">
            {props.item.button}
          </button>
          <button className="  text-sm mx-4 hover:text-green-600 cursor-pointer">
            {props.item.first}
          </button>
          <button className="  text-sm hover:text-green-600 cursor-pointer">
            {props.item.second}
          </button>
        </div>
      </div>
    </>
  );
};

export default CardHeader;
