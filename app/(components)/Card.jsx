"use client";
import { useState } from "react";
import Image from "next/image";
import { styles } from "../constants";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import Link from "next/link";

export default function Card({ product }) {
  const [rating, setRating] = useState(product.rating);

  const discountedPrice = product.price - product.discountedPrice;
  const percentageSaved = ((discountedPrice / product.price) * 100).toFixed(0);

  const initialPrice = product.price;

  return (
    <div className={`${styles.flexCenter}`}>
      <section className="flex flex-col ">
        <div>
          <Image
            className="object-cover w-64 h-64"
            src={product.image.url}
            alt={product.title}
            width={200}
            height={200}
            loading="lazy"
          />
        </div>

        <div>
          <Link href={`/Product/${product.id}?title=${product.title}`}>
            <div className="flex flex-col cursor-pointer  hover:shadow-md transition ease-linear py-2">
              <h2 className="card-title pt-2">{product.title}</h2>
              <div className={`${styles.flexStart} gap-2 pt-2`}>
                <Rating
                  style={{ maxWidth: 100 }}
                  value={rating}
                  readOnly={true}
                />{" "}
                <small className="pt-[2px]">{product.rating}/5</small>
              </div>

              <div className={`${styles.flexStart} gap-2 flex-row pt-2`}>
                <p className="font-bold">NOK {product.discountedPrice}</p>
                {discountedPrice !== 0 ? (
                  <>
                    <s className="font-bold text-black opacity-50">
                      {product.price}
                    </s>
                  </>
                ) : null}

                {percentageSaved <= 0 ? (
                  <span></span>
                ) : (
                  <span className="bg-red-100 px-2 py-[2px] rounded-full text-red-500 text-sm font-medium">-{percentageSaved}%</span>
                )}
              </div>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
