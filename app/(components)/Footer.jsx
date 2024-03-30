"use client";
import React from "react";
import { styles } from "../constants";
import { FaXTwitter, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa6";
import { company, help, faq, resources } from "../constants";
import visa from "../../public/visa.png";
import master from "../../public/master.png";
import paypal from "../../public/paypal.png";
import apple from "../../public/apple.png";
import gpay from "../../public/gpay.png";
import Link from "next/link";
import Image from "next/image";
import Newsletter from "./Newsletter";

export default function Footer() {
  return (
    <>
      <main className="flex flex-col bg-[#F0F0F0] ">
        <div className="flex justify-center items-center relative ">
          <div id="newsLetter" className="w-full absolute -top-50 px-2">
            <Newsletter  />
          </div>
        </div>
        <div
          className={`${styles.flexCenter} w-full px-3 text-black  pt-60 lg:pt-40 pb-10`}
        >
          <section className="flex flex-col w-full justify-between  max-w-7xl  md:px-0 lg:flex-row  ">
            <section className="flex flex-col w-full pb-[px] md:w-[60%]">
              <div className="flex w-full flex-col gap-8">
                <h1 className="text-3xl 10 text-black font-black sm:mb-1">
                  ECOM.co
                </h1>
                <p className="w-full max-w-[390px]  text-sm text-black opacity-60">
                  You can also update CSS variables dynamically using inline
                  styles or by manipulating the stylesheet with JavaScript
                </p>
                <div className={`${styles.flexStart} gap-4 text-xl`}>
                  <span>
                    <FaXTwitter />
                  </span>
                  <span>
                    <FaFacebook />
                  </span>
                  <span>
                    <FaInstagram />
                  </span>
                  <span>
                    <FaGithub />
                  </span>
                </div>
              </div>
            </section>

            <hr className="my-10 xl:hidden" />

            <section className="flex flex-row gap-20 w-full justify-start  md:justify-between  ">
              <div className=" flex flex-col gap-6 md:flex-row md:justify-around md:w-full">
                <div className="flex flex-col justify-start items-start gap-3">
                  <h3 className="text-md font-semibold">COMPANY</h3>
                  <ul className="list-none flex flex-col">
                    {company.map((link) => (
                      <li
                        className="py-1 text-black opacity-60 text-sm"
                        key={link.id}
                      >
                        <Link
                          className="hover:underline transition-all"
                          href={link.href}
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col justify-start items-start gap-3">
                  <h3 className="text-md font-semibold">HELP</h3>
                  <ul className="list-none flex flex-col">
                    {help.map((link) => (
                      <li
                        className="py-1 text-black opacity-60 text-sm"
                        key={link.id}
                      >
                        <Link
                          className="hover:underline transition-all"
                          href={link.href}
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className=" flex flex-col gap-6 md:flex-row md:justify-around md:w-full ">
                <div className="flex flex-col justify-start items-start gap-3">
                  <h3 className="text-md font-semibold">FAQ</h3>
                  <ul className="list-none flex flex-col">
                    {faq.map((link) => (
                      <li
                        className="py-1 text-black opacity-60 text-sm"
                        key={link.id}
                      >
                        <Link
                          className="hover:underline transition-all"
                          href={link.href}
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col justify-start items-start gap-3">
                  <h3 className="text-md font-semibold">RESOURCES</h3>
                  <ul className="list-none flex flex-col">
                    {resources.map((link) => (
                      <li
                        className="py-1 text-black opacity-60 text-sm"
                        key={link.id}
                      >
                        <Link
                          className="hover:underline transition-all"
                          href={link.href}
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          </section>
        </div>
        <div className="flex w-full justify-center items-center">
          <hr className=" w-full max-w-7xl" />
        </div>

        <section className="flex flex-col justify-center items-center w-full text-black  ">
          <div className="flex  flex-col items-center justify-between w-full max-w-7xl py-10 gap-5 sm:flex-row px-3 lg:px-2 ">
            <p className="text-sm font-medium text-gray-500">
              ECOM.co © 2000-2023, All Rights Reserved
            </p>

            <div className="flex gap-2">
              <span className="p-1 rounded border border-gray-200 bg-white h-10 flex justify-center items-center w-14">
                <Image src={visa} alt="visa" width={40} height={40}></Image>
              </span>

              <span className="p-1 rounded border border-gray-200 bg-white h-10 flex justify-center items-center w-14">
                <Image
                  src={master}
                  alt="master card"
                  width={40}
                  height={40}
                ></Image>
              </span>

              <span className="p-1 rounded border border-gray-200 bg-white h-10 flex justify-center items-center w-14">
                <Image src={paypal} alt="PayPal" width={40} height={40}></Image>
              </span>

              <span className="p-1 rounded border border-gray-200 bg-white h-10 flex justify-center items-center w-14">
                <Image src={apple} alt="apple" width={40} height={40}></Image>
              </span>

              <span className="p-1 rounded border border-gray-200 bg-white h-10 flex justify-center items-center w-14">
                <Image
                  src={gpay}
                  alt="Google Pay"
                  width={40}
                  height={40}
                ></Image>
              </span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
