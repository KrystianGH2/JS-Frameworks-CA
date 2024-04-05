"use client";
import React, { useState, useEffect } from "react";
import { getProduct } from "@/lib/utils/api";
import Link from "next/link";

export async function SearchProducts() {
  const response = await getProduct();
  return response;
}

export default function SearchBar() {
  const [inputValue, setInputValue] = useState("");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [resetInput, setResetInput] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      const response = await SearchProducts();
      setProducts(response.data);
    }
    fetchProducts();
  }, []);

  const handleOnChange = (e) => {
    const value = e.target.value.trim().toLowerCase();
    setInputValue(value);

    if (value.length > 0) {
      const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(value)
      );
      setFilteredProducts(filteredProducts);
    } else {
      setFilteredProducts([]);
    }
  };

  const handleLinkClick = () => {
    setResetInput(true);
  };

  useEffect(() => {
    if (resetInput) {
      setInputValue("");
      setResetInput(false);
    }
  }, [resetInput]);

  return (
    <div className="bg-[#F0F0F0] w-full relative">
      <form className="flex flex-row justify-start items-center gap-2 w-full">
        <input
          onChange={handleOnChange}
          type="text"
          name="search"
          id="search"
          value={inputValue}
          placeholder="  Search for products..."
          className="outline-none w-full bg-[#F0F0F0]"
        />
      </form>

      <div
        className={`absolute  top-10 py-1 w-full z-50 rounded-sm flex flex-col gap-2 ${
          inputValue.length <= 0 ? "bg-white" : "bg-[#f0f0f0]"
        }`}
      >
        {inputValue.length > 0 &&
          filteredProducts.map((product) => (
            <Link
              key={product.id}
              href={`/Product/${product.id}?title=${product.title}&${product.discountedPrice}`}
              className=""
              onClick={handleLinkClick}
            >
              <ul className="flex flex-row justify-between px-2 w-full list-none rounded h-10 items-center hover:bg-[#0000000a]">
                <li className="list-none ">{product.title}</li>
                <li className="list-none text-sm">{product.price}</li>
              </ul>
              <hr className="px-5" />
            </Link>
          ))}
      </div>
    </div>
  );
}
