import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Data from "../components/Data";
import fruits from "../images/Fruit.jpg";
import FruitsData from "../components/FruitsData";
import ProductsCard from "../components/ProductsCard";
import CardHeader from "../components/CardHeader";
import Fdata from "../components/FData";
import SData from "../components/SData";
import BreakFastData from "../components/BreakFastData";
import oats from "../images/oats.jpg";
import float from "../images/flour.jpg";
import vital from "../images/vital.jpg";
import NewsCard from "../components/NewsCard";
import NewsData from "./../components/NewsData";
import { LuMailOpen } from "react-icons/lu";
import FeatureData from "./../components/FeatureData";
import FeatureCard from "../components/FeatureCard";
import { AiOutlineClose } from "react-icons/ai";
import CartCard from "../components/CartCard";
import { message } from "antd";
const Home = () => {
  const [data, setData] = useState([]);
  const controlData = (e) => {
    setData((preValue) => {
      return [...preValue, e];
    });
  };
  const deleteItem = (e) => {
    // console.log(e);
    setData(data.filter((item, index) => e !== index));
    message.error("Product Removed!");
  };
  const [product, setProduct] = useState(false);
  return (
    <>
      <div
        className={
          product
            ? " w-full h-screen fixed z-20 left-0 top-0 bg-[#0000007d] "
            : "hidden"
        }
      >
        <div className="  max-w-[400px] w-full h-full  bg-white top-0 p-6 absolute right-0">
          <div className="text-[24px] flex justify-end ">
            <AiOutlineClose
              onClick={() => setProduct(!product)}
              className="active:text-red-500"
            />
          </div>

          <h1 className="font-medium">YOUR CART</h1>

          <div className="">
            {data.map((item, index) => {
              return (
                <CartCard
                  ele={item}
                  index={index}
                  key={index}
                  deleteEle={deleteItem}
                />
              );
            })}
          </div>
        </div>
      </div>
      <Navbar size={data.length} css={setProduct} />
      <Hero />
      <div className="w-4/5 mx-auto my-2 grid sm:grid-cols-3 xl:grid-cols-4 gap-4">
        {Data.map((item, index) => {
          return <Card key={index} ele={item} />;
        })}
      </div>
      <div className="w-4/5 mx-auto my-2">
        <CardHeader item={Fdata} />
        <div className="grid sm:grid-cols-3 xl:grid-cols-5 gap-4 my-4">
          <div className="w-full h-full">
            <img
              src={fruits}
              alt=""
              className="w-full h-full object-center rounded-lg"
            />
          </div>
          {FruitsData.map((item, index) => {
            return <ProductsCard key={index} ele={item} onData={controlData} />;
          })}
        </div>
      </div>
      <div className="w-4/5 mx-auto my-2 ">
        <CardHeader item={SData} />
        <div className="grid sm:grid-cols-3 xl:grid-cols-5 gap-4 my-4">
          <div className="w-full h-full ">
            <img
              src={oats}
              alt=""
              className="w-full h-full  object-center rounded-lg"
            />
          </div>
          {BreakFastData.map((item, index) => {
            return <ProductsCard key={index} ele={item} onData={controlData} />;
          })}
        </div>
      </div>
      <div className="w-4/5 mx-auto grid sm:grid-cols-2 gap-4 sm:gap-8 my-4">
        <div className="rounded-lg overflow-hidden">
          <img
            src={float}
            alt=""
            className=" hover:scale-105 transform-transition w-full  object-center "
          />
        </div>
        <div className="rounded-lg overflow-hidden">
          <img
            src={vital}
            alt=""
            className="hover:scale-105 transform-transition w-full  object-center"
          />
        </div>
      </div>
      <div className="w-4/5 mx-auto my-4">
        <h1 className="font-bold text-lg">Latest News</h1>
        <h1 className="text-sm">
          Present posts in a best way to highlight interesting moments of your
          blog
        </h1>
        <div className="grid sm:grid-cols-3 gap-8 my-4">
          {NewsData.map((item, index) => {
            return <NewsCard ele={item} key={index} />;
          })}
        </div>
      </div>
      <div className="bg-emerald-950 my-8">
        <div className="w-4/5 mx-auto text-white py-8 sm:flex justify-between items-center ">
          <div className="flex items-center gap-4 flex-shrink-0 ">
            <LuMailOpen className="text-[60px]" />
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold">
                Sign up To Our Newsletters
              </h3>
              <p>...and receive $20 coupon for first shopping</p>
            </div>
          </div>
          <div className="lg:w-[50%] relative mt-2 sm:mt-0  ">
            <input
              type="text"
              placeholder="Your Email Address..."
              className="py-4 px-6 rounded-full text-black w-full "
            />
            <button className=" absolute right-2 top-[50%] translate-y-[-50%] bg-emerald-950 text-white px-4 py-1 rounded-full active:bg-emerald-950 cursor-pointer active:text-white font-bold hover:bg-white hover:text-emerald-950 border-2 hover:border-emerald-950">
              Subscribe!
            </button>
          </div>
        </div>
      </div>
      <div className="w-4/5 mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-4">
        {FeatureData.map((item, index) => {
          return <FeatureCard ele={item} key={index} />;
        })}
      </div>
      <div className="border-t border-gray-300 mt-8">
        <div className="w-4/5 mx-auto text-center text-gray-500 py-4">
          @Copyright Biswajeet
        </div>
      </div>
    </>
  );
};

export default Home;
