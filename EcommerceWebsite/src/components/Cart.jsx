import React from "react";

const Cart = (props) => {
  return (
    <>
      <div className="absolute left-6 bottom-6 bg-red-600 text-white text-[14px] w-[25px] h-[25px] rounded-full grid place-items-center">
        {props.length}
      </div>
    </>
  );
};

export default Cart;
