"use client";
import { useState } from "react";
import { styles, navigationLinks } from "../constants";
import Link from "next/link";
import { FaBeer } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

export default function Navbar() {
  return (
    <div className={`${styles.flexCenter} w-full  `}>
      <div className={`flex justify-between w-full max-w-7xl bg-slate-700 p-6`}>
        <div className={`${styles.flexStart} gap-16`}>
          <div className="flex flex-row items-center gap-5">
            {" "}
            <div className="sm:hidden items-start">
              {" "}
              <FaBeer />
            </div>
            <h1>Logo</h1>
          </div>
          <div className="sm:block hidden">
            <ul className={`${styles.flexStart} gap-8`}>
              {navigationLinks.map((link) => (
                <li key={link.id} className="cursor-pointer">
                  <Link href={link.href}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={`${styles.flexCenter} gap-4`}>
          <span>
            <FaBeer />
          </span>
          <span>
            {" "}
            <CiSearch />
          </span>
        </div>
      </div>
    </div>
  );
}
