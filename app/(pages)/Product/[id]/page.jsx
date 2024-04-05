"use client";
import React, { useState, useEffect } from "react";
import { getProductById } from "@/lib/utils/api";
import Link from "next/link";
import { styles } from "@/app/constants";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import ReviewCards from "../../../(components)/ReviewCards";
import usePaginationStore from "@/lib/utils/store";

export default function ProductPage({ params }) {
  const [product, setProduct] = useState(null);
  const [rating, setRating] = useState(0);

  const { addToCart } = usePaginationStore((state) => ({
    addToCart: state.addToCart,
  }));

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await getProductById(params.id);
        setProduct(response.data);
        setRating(response.data.rating);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProduct();
  }, [params.id]);

  const discountedPrice = product?.price - product?.discountedPrice;
  const percentageSaved = ((discountedPrice / product?.price) * 100).toFixed(0);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="flex w-full justify-center min-h-screen px-3 sm:px-5 lg:px-0 ">
        <div className="w-full flex flex-col max-w-7xl ">
          {/*breadCrumps/ */}
          <div className="text-sm breadcrumbs w-full max-w-7xl text-black pl-2 lg:pl-0 lg:pb-5">
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <a>Products</a>
              </li>
              <li>
                <a className=" font-medium">{product.title}</a>
              </li>
            </ul>
          </div>{" "}
          {/* Section 1/ */}
          <section className="flex w-full justify-center max-w-7xl p-2 text-black lg:px-0 ">
            <div className="w-full flex flex-col justify-center items-start  gap-4 lg:flex-row lg:h-[400px] lg:gap-8 ">
              <div className="flex w-full justify-center items-center overflow-hidden ">
                <img
                  className="w-full sm:h-[400px] lg:h-[400px] object-cover rounded"
                  src={product.image.url}
                  alt={product.title}
                />
              </div>

              <div className="flex w-full lg:h-full flex-col gap-4 justify-between ">
                <div className="flex flex-col gap-2">
                  <h2 className="text-4xl font-bold">{product.title}</h2>
                  <span className={`${styles.flexStart} gap-2 pt-2`}>
                    <Rating
                      style={{ maxWidth: 100 }}
                      value={rating}
                      readOnly={true}
                    />{" "}
                    <small className="pt-[2px]">{product.rating}/5</small>
                  </span>
                </div>

                <div className="flex flex-col gap-4 lg:">
                  <div className="flex flex-col gap-3">
                    <p className="w-full md:max-w-[500px] lg:w-[400px]">
                      {product.description}
                    </p>

                    <div className={`${styles.flexStart} gap-2 flex-row pt-2`}>
                      <p className="font-bold text-lg">
                        NOK {product.discountedPrice}
                      </p>
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
                        <span className="bg-red-100 px-2 py-[2px] rounded-full text-red-500 text-sm font-medium">
                          -{percentageSaved}%
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-row w-full justify-start gap-6">
                    <div className="bg-gray-200 flex flex-row rounded-badge text-black w-[120px]  justify-around items-center">
                      <button className=" px-5 cursor-pointer text-xl">
                        {" "}
                        -
                      </button>
                      <small>1</small>
                      <button className=" px-5 cursor-pointer text-xl">
                        +
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => addToCart(product)}
                        className="bg-black text-white py-[10px] px-10 w-[180px] rounded-full"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>{" "}
          <div className="flex w-full py-10 lg:py-20">
            <hr className="flex w-full max-w-7xl" />
          </div>
          {/* Section 2/ */}
          <section className="flex w-full justify-center max-w-7xl p-2 text-black lg:px-0 min-h-screen">
            <div className="flex flex-col w-full max-w-7xl gap-6">
              <div className="flex w-full flex-row justify-between">
                <p className="flex flax-row gap-3 items-center">
                  All reviews{" "}
                  <span className="text-black opacity-50">
                    ( {product.reviews.length} )
                  </span>
                </p>
                <div className="flex flex-row  gap-2 lg:gap-3">
                  <button className="bg-gray-300 text-black font-medium w-[120px] h-[40px] rounded-full">
                    Latest
                  </button>
                  <button className="bg-black text-white text-sm  w-[130px] h-[40px] rounded-full">
                    Write a review
                  </button>
                </div>
              </div>

              <div className="flex  flex-col gap-4  justify-center lg:flex-row md:justify-start md:gap-6 md:flex-wrap max-w-[1280px]">
                {product.reviews && product.reviews.length > 0 ? (
                  product.reviews.map((item) => (
                    <ReviewCards key={item.id} review={item} />
                  ))
                ) : (
                  <p>This product has no reviews yet.</p>
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
