"use client";
import React from "react";
import usePaginationStore from "@/lib/utils/store";
import Link from "next/link";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline";

export default function CheckOut() {
  const {
    total,
    products,
    removeItemMaxQuantity,
    clearCart,
    addToCart,
    removeItem,
  } = usePaginationStore((state) => ({
    total: state.total,
    products: state.items,
    removeItemMaxQuantity: state.removeItemMaxQuantity,
    clearCart: state.clearCart,
    addToCart: state.addToCart,
    removeItem: state.removeItem,
  }));

  const totalDiscount = products.reduce((total, product) => {
    const itemDiscount =
      (product.price - product.discountedPrice) * product.quantity;
    return total + itemDiscount;
  }, 0);

  const totalPrice = total - totalDiscount;

  return (
    <main className="flex justify-center flex-col gap-6 items-center w-full text-black overflow-hidden p-5 mb-40">
      <section className="w-full max-w-7xl">
        <div className="text-sm breadcrumbs w-full max-w-7xl text-black pl-2 lg:pl-0">
          <ul>
            <li>
              <Link href="/Product">Products</Link>
            </li>
            <li>
              <a className="font-medium underline">Cart</a>
            </li>
            <li>
              <a className="text-gray-400">Check Out</a>
            </li>
          </ul>
        </div>
      </section>
      <h1 className="flex w-full justify-start max-w-7xl font-black text-4xl">
        YOUR CART
      </h1>
      <div className="w-full flex flex-col justify-center items-center gap-5 max-w-7xl lg:flex-row lg:items-start">
        <section className="flex flex-col justify-center items-center w-full">
          <div className="flex flex-col justify-center items-center w-full max-w-7xl lg:items-start">
            <div className="flex flex-col w-full max-w-2xl border rounded-md overflow-hidden scrollable-container">
              <ul className="my-8 flex flex-col justify-center w-full max-w-2xl divide-gray-200 p-5 overflow-y-auto max-h-[400px]">
                {products.map((product) => (
                  <li key={product.id} className="flex py-6">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img
                        src={product.image.url}
                        alt={product.title}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3>
                            <a
                              href={`/Product/${product.id}?title=${product.title}`}
                            >
                              {product.title}
                            </a>
                          </h3>
                          <div className="flex items-center relative">
                            {product.price === product.discountedPrice && (
                              <>
                                <p>{product.price}</p>
                              </>
                            )}
                            {product.price !== product.discountedPrice && (
                              <>
                                <p className=" flex gap-2 text-red-500">
                                  <s className="text-gray-400">
                                    {product.price}
                                  </s>
                                  {product.discountedPrice}
                                </p>
                              </>
                            )}
                          </div>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">
                          {product.color}
                        </p>
                      </div>

                      <div className="flex flex-1 items-end justify-between text-sm">
                        <p className="text-gray-500">Qty {product.quantity}</p>

                        <div className="flex gap-4">
                          <button
                            type="button"
                            className="font-medium text-black hover:text-black"
                            onClick={() => removeItem(product)}
                          >
                            <MinusIcon className="h-6 w-6" />
                          </button>

                          <button
                            type="button"
                            className="font-medium  text-black hover:text-black"
                            onClick={() => addToCart(product)}
                          >
                            <PlusIcon className="h-6 w-6" />
                          </button>
                        </div>

                        <div className="flex">
                          <button
                            onClick={() => removeItemMaxQuantity(product)}
                            type="button"
                            className="font-medium text-red-500 hover:underline"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="flex justify-center py-10">
                <button
                  onClick={clearCart}
                  className="flex items-center justify-center rounded-md border border-transparent bg-red-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-red-500 w-full max-w-[400px]"
                >
                  Clear Cart
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col justify-start items-center w-full max-w-2xl border rounded-md p-5">
          <h1 className="flex w-full justify-start max-w-7xl font-bold text-2xl">
            ORDER SUMMARY
          </h1>

          <div className="flex w-full h-full pb-5">
            <ul className="flex flex-col justify-start gap-5 w-full h-full pt-5">
              <li className="flex flex-row justify-between items-center w-full text-lg text-gray-500">
                Subtotal{" "}
                <p className="flex justify-center items-center font-bold text-lg text-black">
                  {total}
                </p>
              </li>
              <li className="flex flex-row justify-between items-center w-full text-lg text-gray-500">
                Discount %{" "}
                <p className="flex justify-center items-center font-bold text-lg text-red-500">
                  -{totalDiscount}
                </p>
              </li>
              <li className="flex flex-row justify-between items-center w-full text-lg text-gray-500">
                Delivery Fee{" "}
                <p className="flex justify-center items-center font-bold text-lg text-black">
                  Free
                </p>
              </li>
            </ul>
          </div>

          <hr className="w-full border-t border-black pb-5 opacity-10" />

          <div className="flex w-full flex-col justify-start gap-5">
            <li className="flex flex-row justify-between items-center w-full text-lg text-gray-800">
              Total{" "}
              <p className="flex justify-center items-center font-bold text-lg text-black">
                {totalPrice}
              </p>
            </li>
            <div className="flex flex-row  gap-5">
              <input
                type="text"
                className="bg-[#F0F0F0] flex-1 rounded-full h-10 outline-none pl-4"
                placeholder="Add promo code"
              />
              <button className="flex items-center justify-center rounded-full h-10 border border-transparent bg-black px-6 py-3 text-base font-medium text-white shadow-sm w-full max-w-[200px]">
                Apply
              </button>
            </div>
            <div className="flex justify-center pb-10">
              <button
                onClick={clearCart}
                className="flex items-center justify-center rounded-full border border-transparent bg-black px-6 py-3 text-base font-medium text-white shadow-sm  w-full"
              >
                <Link href={"#"}>Go to Checkout -</Link>
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
