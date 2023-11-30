import React from "react";

const Form = () => {
  return (
    <>
      <div className="flex justify-center items-center  h-screen">
        <form
          action=""
          className="w-[400px] h-[500px] rounded-xl bg-green-300 p-[20px] space-y-2"
        >
          <h1 className="text-center font-bold text-2xl">Registration Form</h1>
          <h2 className="font-semibold text">Name:</h2>
          <input
            type="text"
            placeholder="Enter Name..."
            className="bg-white w-full rounded-md px-2 py-1"
          />
          <h2 className="font-semibold text">Branch:</h2>
          <select
            name=""
            id=""
            className="bg-white w-full rounded-md px-2 py-1"
          >
            <option>Select</option>
            <option>MCA</option>
            <option>Btech</option>
          </select>
          <h2 className="font-semibold text">Age:</h2>
          <input
            type="number"
            min="1"
            max="100"
            placeholder="Enter Age..."
            className="bg-white w-full rounded-md px-2 py-1"
          />
          <h2 className="font-semibold text">Image:</h2>
          <input
            type="file"
            min="1"
            max="100"
            placeholder="Enter Age..."
            className="bg-white w-full rounded-md px-2 py-1"
          />
          <button>hgj</button>
        </form>
      </div>
    </>
  );
};

export default Form;
