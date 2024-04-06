import React from "react";
import AboutCards from "../../(components)/AboutCards";
import ContactForm from "@/app/(components)/ContactForm";
import phone from "../../../public/phone.jpg";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <main className="flex w-full justify-center items-center flex-col text-black  pt-12 gap-10">
        <div className="flex w-full justify-center items-center max-w-7xl flex-col gap-8 p-5">
          <div className="flex flex-col w-full max-w-7xl gap-8  lg:max-w-7xl lg:flex-row justify-center items-center lg:items-start">
            <div className=" flex flex-col w-full gap-5">
              <h1 className="text-xl font-bold ">How It Started</h1>
              <h2 className="text-5xl leading-tight font-semibold max-w-xl xl:text-6xl">
                Our Dream Is Redefine Shopping, Curated, Seamless Satisfaction.
              </h2>
            </div>
            <Image
              className="rounded-2xl md:px-5 lg:p-0 lg:max-w-xl"
              src={phone}
              alt="Phone"
            />
          </div>

          <div className="flex flex-col w-full gap-8">
            <section className="flex justify-center items-center w-full">
              <div className="flex w-full flex-col-reverse justify-between max-w-7xl items-center lg:items-start gap-8 pt-10 pb-10 lg:flex-row">
                <p className="flex w-full px-5 lg:max-w-[500px] lg:px-0 text-base lg:text-lg font-medium">
                  Welcome to Ecom, your one-stop destination for all your
                  shopping needs! With an impressive array of over 10,000
                  products sourced from 200 renowned brands, we pride ourselves
                  on offering quality and variety to our customers. Our
                  commitment to excellence is reflected in the glowing reviews
                  from our satisfied base of over 30,000 happy shoppers. At
                  Ecom, we strive to provide an unparalleled shopping
                  experience, ensuring that each customer finds exactly what
                  they`re looking for.
                </p>
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
            </section>
          </div>

          <div className=" flex justify-start w-full">
            <h2 className="text-xl font-bold ">Customer Reviews</h2>
          </div>
          <div className="flex justify-center items-center w-full">
            <AboutCards />
          </div>
        </div>
        <div className=" flex justify-start max-w-7xl  w-full ">
          <h2 className="text-2xl font-bold pl-5">Connect With Us</h2>
        </div>

        <section className="flex justify-center  w-full bg-black mx-0 my-0">
          <div className="flex flex-col w-full max-w-7xl">
            <div className="flex w-full justify-center xl:justify-start">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
