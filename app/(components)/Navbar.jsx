"use client";
import { useState } from "react";
import { styles, navigationLinks } from "../constants";
import Link from "next/link";
import {
  HiOutlineShoppingBag,
  HiOutlineSearch,
  HiOutlineMenuAlt2,
  HiOutlineX,
} from "react-icons/hi";
import Categories from "./Categories";
import SearchBar from "./SearchBar";

export default function Navbar() {
  const [toggle, setToggle] = useState(true);

  const handleOnToggle = () => {
    setToggle((prev) => !prev);
  };

  return (
    <>
      <div className={`${styles.flexCenter} w-full flex-col  px-2 lg:px-0`}>
        <div
          className={`flex justify-between w-full max-w-7xl bg-white text-black py-6 relative sm:px-0 px-2`}
        >
          <div className={`${styles.flexStart} gap-8`}>
            <div className="flex flex-row items-center gap-5 font-poppins">
              {" "}
              <div
                className="sm:hidden items-start text-2xl cursor-pointer"
                onClick={handleOnToggle}
              >
                {toggle ? <HiOutlineMenuAlt2 /> : <HiOutlineX />}
              </div>
              <h1 className="font-poppins">Logo</h1>
            </div>
            <div className="md:block hidden">
              <ul className="font-poppins list-none sm:flex sm:pt-1 hidden justify-end items-center flex-1 gap-8">
                {navigationLinks.map((link, index) => (
                  <li key={link.id} className="cursor-pointer ">
                    {index === 0 && navigationLinks[0].name === "Shop" ? (
                      <div className={`${styles.flexCenter} gap-3`}>
                        <Link href={link.href}>{link.name}</Link>

                        <Categories />
                      </div>
                    ) : (
                      <Link href={link.href}>{link.name}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div
            className={`${
              !toggle ? "flex" : "hidden"
            } sm:hidden flex p-6  bg-gray-50 todo absolute top-[89px] left-0 min-w-[50%] rounded-sm sidebar`}
          >
            <ul className="list-none flex flex-col justify-start items-start flex-1">
              {navigationLinks.map((link, index) => (
                <li
                  key={link.id}
                  className={`font-poppins font-normal cursor-pointer text-[16px] text-black ${
                    index === navigationLinks.length - 1 ? "mr-0" : "mb-10"
                  } `}
                >
                  {index === 0 && navigationLinks[0].name === "Shop" ? (
                    <div className={`${styles.flexCenter} gap-3 `}>
                      <Link href={link.href}>{link.name}</Link>

                      <Categories />
                    </div>
                  ) : (
                    <Link href={link.href}>{link.name}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-slate-100 flex-auto rounded-full sm:mx-6 mx-2 p-2">
            <span className="w-full flex flex-row justify-start items-center">
              <HiOutlineSearch className="text-gray-500 mx-[5px] text-lg" />
              <SearchBar />
            </span>{" "}
          </div>

          <div className={`${styles.flexCenter} gap-4 text-2xl sm:pl-4 pl-0`}>
            <span>
              {" "}
              <HiOutlineShoppingBag />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
