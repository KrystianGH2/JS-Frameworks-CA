"use client";
import Link from "next/link";
import React, { useState } from "react";
import { HiOutlineX } from "react-icons/hi";
import { styles } from "../constants";

export default function TopBanner() {
  const [toggleClose, setToggleClose] = useState(false);

  const handleOnToggle = () => {
    setToggleClose((prev) => !prev);
  };
  return (
    <div
      className={`${styles.flexCenter} w-full bg-black py-1 text-sm ${
        toggleClose ? "hidden" : "block"
      }`}
    >
      <div className="flex  justify-between items-center w-full max-w-7xl">
        <div className="flex flex-row justify-center items-center w-full">
          {" "}
          <p>
            Subscribe to our{" "}
            <b className="underline cursor-pointer">
              <Link href="#newsLetter">Newsletter</Link>{" "}
            </b>{" "}
            <br className="sm:hidden block" />
            and get 20% off to your first order.
          </p>
        </div>
        <span onClick={handleOnToggle} className="sm:mr-0 mr-8">
          {" "}
          <HiOutlineX className="cursor-pointer" />
        </span>
      </div>
    </div>
  );
}
