"use client";
import React, { useEffect, useState } from "react";

const url = "http://localhost:5005/api/";

export async function getCategories() {
  const res = await fetch(`${url}category`);
  const categoires = await res.json();
  return categoires;
}

interface Categories {
  id: number;
  category: string;
}

const CategoriesProducts = () => {
  const [categoires, setCategories] = useState<Categories[]>([]);
  const [selectedCat, setSelectedCat] = useState("");

  const categorySelected = (e: any) => {
    setSelectedCat(e.target.value);
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const allCategories = await getCategories();
        setCategories(allCategories.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <>
      <select
        className="select select-bordered text-lg border-orange-400 active:border-orange-500  w-full max-w-xs"
        value={selectedCat}
        onChange={categorySelected}
      >
        <option defaultValue="">Categories</option>
        {categoires.map((category) => {
          return <option key={category.id}>{category.category}</option>;
        })}
      </select>
    </>
  );
};

export default CategoriesProducts;
