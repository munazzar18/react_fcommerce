"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const SearchProducts = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const handleChange = (e: any) => {
    setSearch(e.target.value);
  };

  const sendSearch = (e: any) => {
    if (e.key === "Enter") {
      setSearch(search);
      if (search) {
        router.push(`?page=1&search=${search}`);
      } else {
        router.push("/");
      }
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search"
        className="input w-24 md:w-auto lg:w-auto xl:w-auto  border-orange-400 focus:border-orange-700 hover:border-orange-200"
        onChange={handleChange}
        value={search}
        onKeyDown={sendSearch}
      />
    </>
  );
};

export default SearchProducts;
