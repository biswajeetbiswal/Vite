import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="flex justify-between items-center border border-gray-300 hover:border-gray-400 hover:scale-105 transition-transform rounded-lg px-4 py-4">
        <div>
          <h1 className="font-bold">{props.ele.name}</h1>
          <h1> {props.ele.count}</h1>
        </div>
        <div>
          <img
            src={props.ele.img}
            alt=""
            className="w-[70px] h-[70px] rounded-full"
          />
        </div>
      </div>
    </>
  );
};

export default Card;
