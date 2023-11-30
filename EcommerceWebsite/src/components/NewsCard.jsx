import React from "react";
const NewsCard = (props) => {
  return (
    <>
      <div className="space-y-2">
        <img
          src={props.ele.img}
          alt=""
          className="w-full object-center hover:scale-105 transform-transition"
        />
        <h3 className="text-sm text-teal-500 font-semibold">
          {props.ele.Date}
        </h3>
        <h1 className="text-base font-bold">{props.ele.text}</h1>
      </div>
    </>
  );
};

export default NewsCard;
