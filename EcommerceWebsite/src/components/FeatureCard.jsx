import React from "react";

const FeatureCard = (props) => {
  return (
    <>
      <div className="flex gap-4 items-center ">
        <div className="bg-gray-300 w-[50px] h-[50px] text-[24px] text-emerald-700 grid place-items-center rounded-full">
          {props.ele.img}
        </div>
        <div>
          <h1 className="text-emerald-700 font-bold text-base">
            {props.ele.text}
          </h1>
          <p className="text-xs">Lorem, ipsum dolor.</p>
        </div>
      </div>
    </>
  );
};

export default FeatureCard;
