"use client";
import * as React from "react";

import Products from "@/app/components/product/Products";
import Categories from "@/app/components/product/Categories";
import Search from "@/app/components/product/Search";
import { useState, Suspense } from "react";

interface Product {
  id: number;
  title: string;
  description: string;
  createdAt: Date;
  images: string;
  category: string;
  quantity: number;
  price: number;
}

interface Category {
  id: number;
  category: string;
}

export default function Product() {
  const [products, setProducts] = useState<Product[]>([]);

  const [category, setCategory] = useState<any>("");

  const [search, setSearch] = useState("");

  const handleCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    let selectedCategory = e.target.value;
    setCategory(selectedCategory);
  };

  const searchChange = (e: any) => {
    setSearch(e.target.value);
  };

  const startSearch = (e: any) => {
    if (e.key === "Enter") {
      searchChange(e);
    } else {
    }
  };

  // useEffect(() => {}, [category]);

  return (
    <>
      <div className="m-24">
        <div className="m-5 mx-16">
          <h1 className="font-semibol text-2xl drop-shadow-md">
            Chance to get full hands on any product!
          </h1>
        </div>
        <div className="flex justify-between my-5 mx-16 ">
          <div className="">
            <Suspense>
              <Search search={search} searchChange={searchChange} />
            </Suspense>
            <Suspense fallback="loading..."></Suspense>
          </div>
          <div className="mx-8">
            <Suspense>
              <Categories category={category} handleCategory={handleCategory} />
            </Suspense>
            <Suspense fallback="loading..."></Suspense>
          </div>
        </div>
        <Suspense>
          <Products page={1} category={category} />
        </Suspense>
      </div>
    </>
  );
}
