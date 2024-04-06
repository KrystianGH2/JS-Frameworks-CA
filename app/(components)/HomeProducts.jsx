"use client";
import { useState, useEffect } from "react";
import { getProduct } from "../../lib/utils/api";
import Card from "./Card";
import { styles } from "../constants";
import usePaginationStore from "../../lib/utils/store";

export default function HomeProducts() {
  const [productsPage1, setProductsPage1] = useState([]);
  const [productsPage2, setProductsPage2] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const currentPage = usePaginationStore((state) => state.currentPage);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataPage1 = await getProduct(4, currentPage + 3);
        setProductsPage1(dataPage1.data);

        if (currentPage === 1) {
          const dataPage2 = await getProduct(4, currentPage + 4);
          setProductsPage2(dataPage2.data);
        }

        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [currentPage]);

  if (loading)
    return (
      <div className="flex justify-center items-center bg-black text-white">
        Loading...
      </div>
    );
  if (error)
    return (
      <div className="flex justify-center items-center">
        Error: {error.message}
      </div>
    );

  return (
    <div className="flex flex-col gap-5 pt-2 w-full">
      <h2 className="mt-4 font-semibold text-lg">NEW ARRIVALS</h2>
      <div className={`${styles.flexCenter} w-full mb-20 `}>
        <div
          className={`flex flex-row justify-center gap-20 items-center xl:justify-start flex-wrap w-full max-w-7xl`}
        >
          {currentPage === 1
            ? productsPage1.map((product) => (
                <Card key={product.id} product={product} />
              ))
            : productsPage2.map((product) => (
                <Card key={product.id} product={product} />
              ))}
        </div>
      </div>
      <h2 className="mt-4 font-semibold text-lg">TOP SELLER</h2>
      {currentPage === 1 && (
        <div className={`${styles.flexCenter} w-full mb-20 `}>
          <div
            className={`flex flex-row justify-center gap-20 items-center xl:justify-start flex-wrap w-full max-w-7xl`}
          >
            {productsPage2.map((product) => (
              <Card key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
