"use client";
import { useState } from "react";
import { styles, navigationLinks } from "../constants";
import Link from "next/link";
import { BsSearch } from "react-icons/bs";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { CgClose } from "react-icons/cg";

export default function Navbar() {
  const [toggle, setToggle] = useState(true);

  const handleOnToggle = () => {
    setToggle((prev) => !prev);
  };

  return (
    <div className={`${styles.flexCenter} w-full  `}>
      <div className={`flex justify-between w-full max-w-7xl bg-slate-700 p-6`}>
        <div className={`${styles.flexStart} gap-16`}>
          <div className="flex flex-row items-center gap-5 font-poppins">
            {" "}
            <div
              className="sm:hidden items-start text-2xl cursor-pointer"
              onClick={handleOnToggle}
            >
              {toggle ? <HiBars3BottomLeft /> : <CgClose />}
            </div>
            <h1>Logo</h1>
          </div>
          <div className="sm:block hidden">
            <ul className="font-poppins list-none sm:flex hidden justify-end items-center flex-1 gap-8">
              {navigationLinks.map((link) => (
                <li key={link.id} className="cursor-pointer">
                  <Link href={link.href}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className={`${
            !toggle ? "flex" : "hidden"
          } sm:hidden flex p-6 bg-slate-300 absolute top-20 left-0 min-w-[50%] rounded-sm h- sidebar`}
        >
          <ul className="list-none flex flex-col justify-start items-start flex-1">
            {navigationLinks.map((link, index) => (
              <li
                key={link.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  index === navigationLinks.length - 1 ? "mr-0" : "mb-10"
                } text-white`}
              >
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={`${styles.flexCenter} gap-4 text-2xl`}>
          <span className="text-xl">
            <BsSearch />
          </span>{" "}
          <span className="border-[0.1px] border-black h-[30px]"></span>
          <span>
            {" "}
            <HiOutlineShoppingBag />
          </span>
        </div>
      </div>
    </div>
  );
}
