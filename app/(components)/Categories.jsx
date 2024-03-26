import React, { useState, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";

const categories = ["Android", "iOS", "Samsung"];

export default function Categories() {
  const [toggle, setToggle] = useState(false);

  const handleOnClick = () => {
    setToggle((prev) => !prev);
  };

  const handleMouseLeave = () => {
    setToggle(false);
  };

  // handleOnClose = () => {
  //   setTimeout(() => {
  //     setToggle(false);
  //   }, 2000);
  // };

  return (
    <div className="relative">
      <button onMouseEnter={handleOnClick} className="pt-2">
        <IoIosArrowDown />
      </button>
      {toggle && (
        <ul
          onMouseLeave={handleMouseLeave}
          className="flex flex-col transition bg-slate-950 w-[150px] justify-start items-start  absolute  top-8 rounded-md gap-2"
        >
          {categories.map((category) => (
            <Link
              className="p-2 hover:bg-slate-500 w-full"
              key={category}
              href={`/${category}`}
            >
              <li>{category}</li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
}
