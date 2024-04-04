"use client";
import { useState } from "react";
import Image from "next/image";
import { styles } from "../constants";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

export default function Card({ product }) {
  const [rating, setRating] = useState(product.rating);

  return (
    <div className={`${styles.flexCenter}`}>
      <section className="flex flex-col">
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
          <div className="flex flex-col">
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
              <p className="font-bold">NOK {product.price}</p>
              <s className="font-bold text-black opacity-50">
                {product.discountedPrice}
              </s>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
