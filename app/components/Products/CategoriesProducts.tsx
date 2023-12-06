"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

interface Categories {
  id: number;
  category: string;
}

const CategoriesProducts = () => {
  const url = "http://localhost:5005/api/";
  const [categoires, setCategories] = useState<Categories[]>([]);
  const [categoryId, setCategoryId] = useState("");

  const getCategories = async () => {
    const res = await fetch(`${url}category`);
    const categoires = await res.json();
    setCategories(categoires.data);
  };

  const router = useRouter();

  const categorySelected = (e: any) => {
    setCategoryId(e.target.value);
  };

  useEffect(() => {
    getCategories();
    if (categoryId) {
      router.push(`?page=1&categoryIds=${categoryId}`);
    } else {
      router.push("/");
    }
  }, [categoryId]);

  return (
    <>
      <select
        className="select select-bordered text-lg border-orange-400 active:border-orange-500  w-full max-w-xs"
        onChange={categorySelected}
        value={categoryId}
      >
        <option value={""}>Categories</option>
        {categoires.map((category) => {
          return (
            <option key={category.id} value={category.id}>
              {category.category}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default CategoriesProducts;
