"use client";
import { useState, useEffect } from "react";
import { getProduct } from "../../lib/utils/api";
import usePaginationStore from "../../lib/utils/store";
import Card from "./Card";
import { styles } from "../constants";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [limit, setLimit] = useState(8);
  const [sortBy, setSortBy] = useState(null);

  const currentPage = usePaginationStore((state) => state.currentPage);
  const setCurrentPage = usePaginationStore((state) => state.setCurrentPage);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProduct(limit, currentPage);
        setProducts(data.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
    currentPage === 1 ? setDisabled(true) : setDisabled(false);
  }, [currentPage, limit]);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleSortChange = (e) => {
    const value = e.target.value;
    setSortBy(value);
    sortProducts(value);
  };

  const sortProducts = (sortBy) => {
    switch (sortBy) {
      case "ascendingPrice":
        setProducts([...products].sort((a, b) => a.price - b.price));
        break;
      case "descendingPrice":
        setProducts([...products].sort((a, b) => b.price - a.price));
        break;
      default:
        break;
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <div className="flex flex-col gap-5 pt-10 w-full">
        <div className="w-full">
          <div className="flex justify-start w-full max-w-7xl pl-2 lg:pl-0">
            <div className="flex w-full justify-start items-center gap-2">
              <p className="font-light text-gray-500">Sort by:</p>
              <select
                className="select select-light w-full max-w-[250px] bg-white outline-none"
                onChange={handleSortChange}
              >
                <option disabled selected>
                  Pick the sorting option
                </option>
                <option value="ascendingPrice">Price: Low to High</option>
                <option value="descendingPrice">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>
        <div className={`${styles.flexCenter} w-full`}>
          <div
            className={` flex flex-row justify-center gap-20 items-center xl:justify-start flex-wrap w-full max-w-7xl`}
          >
            {products?.map((product) => (
              <Card key={product.id} product={product} />
            ))}
          </div>
        </div>

        <div className={`${styles.flexCenter} w-full  md:mb-52 mb-60 mt-24`}>
          <div className={`${styles.flexCenter}`}></div>
          <div
            className={`flex justify-center items-center w-full max-w-7xl gap-6`}
          >
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className={disabled ? "text-gray-500" : "text-black"}
            >
              Prev
            </button>
            <button onClick={nextPage} disabled={currentPage === 4}>
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
