"use client";
import { useState, useEffect } from "react";
import { getProduct } from "../../lib/utils/api";
import usePaginationStore from "../../lib/utils/store";
import Card from "./Card";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const currentPage = usePaginationStore((state) => state.currentPage);
  const setCurrentPage = usePaginationStore((state) => state.setCurrentPage);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProduct(12, currentPage);

        setProducts(data.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [currentPage]);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <>
      <div className="text-black mb-[200px]">
        <div className="flex gap-2">
          <button onClick={nextPage}>Next</button>
          <button onClick={prevPage} disabled={currentPage === 1}>
            Prev
          </button>
        </div>

        {products?.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
