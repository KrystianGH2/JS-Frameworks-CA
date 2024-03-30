import React from "react";
import { styles } from "../constants";
import Image from "next/image";
import pic from "../../public/headsets.png";

export default function Hero() {
  return (
    <div className={`${styles.flexCenter} `}>
      <div className="flex justify-between items-center md:items-start w-full md:flex md:flex-row sm:p-0 px-3 flex-col ">
        <div className="py-10 flex flex-col justify-around  gap-8 sm:gap-5 p-2 lg:px-0">
          <div className="max-w-xl  flex flex-col gap-5 pb-5">
            <h1 className="text-6xl text-black font-black sm:mb-1">
              FIND ITEMS THAT MATCHES YOUR STYLE
            </h1>
            <p className="text-gray-500 font-light ">
              Updating Variables Dynamically: You can also update CSS variables
              dynamically using inline styles or by manipulating the stylesheet
              with JavaScript
            </p>
          </div>

          <div className="flex flex-col gap-8">
            <button className=" bg-black py-3  md:max-w-[300px] rounded-full cursor-pointer mb-2">
              SHOP NOW
            </button>

            <div className="flex flex-wrap sm:max-w-xl w-full justify-between">
              <div className="flex flex-col ">
                <p className="heroParagraph">200+</p>
                <small className="heroSmall">International Brands</small>
              </div>{" "}
              <span className="border-gray-400 border"></span>
              <div className="flex flex-col">
                <p className="heroParagraph">2,000+</p>
                <small className="heroSmall">High Quality Products</small>
              </div>
              <span className="border-gray-400 border"></span>
              <div className="flex flex-col">
                <p className="heroParagraph">10,000+</p>
                <small className="heroSmall">Happy Customers</small>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <Image
            priority="false"
            src={pic}
            alt="hero image"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}
