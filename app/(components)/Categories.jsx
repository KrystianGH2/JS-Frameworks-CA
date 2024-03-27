import React, { useState } from "react";
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

  const screenWidth = 768;
  return (
    <div className="relative">
      <button onMouseEnter={handleOnClick} className="pt-2">
        <IoIosArrowDown />
      </button>
      {toggle && (
        <ul
          onMouseLeave={handleMouseLeave}
          className={`flex flex-col transition bg-slate-50 w-[180px] justify-start items-start  absolute ${
            screen.width <= screenWidth
              ? "top-8  bg-gray-50 "
              : "top-10 bg-slate-600"
          }   rounded-sm gap-2`}
        >
          {categories.map((category) => (
            <Link
              className="p-2  hover:bg-slate-100 w-full"
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
