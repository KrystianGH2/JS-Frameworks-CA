import React from "react";
import Products from "@/app/(components)/Products";
import { styles } from "@/app/constants";
import Link from "next/link";

export default function ProductPage() {
  return (
    <>
      <div className={`${styles.flexCenter} w-full text-black`}>
        <section className={`${styles.flexCenter}  flex-col w-full max-w-7xl`}>
          <div className="flex w-full justify-start">
            <div className="text-sm breadcrumbs w-full max-w-7xl text-black pl-2 lg:pl-0">
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <a>Products</a>
                </li>
              </ul>
            </div>{" "}
          </div>
          <Products />
        </section>
      </div>
    </>
  );
}
