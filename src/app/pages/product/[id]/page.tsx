"use client";
import React, { useEffect, useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ApiService from "@/app/services/ApiService";
import { useParams } from "next/navigation";

const ProductDetail = () => {
  const { id } = useParams<any>();

  const [product, setProduct] = useState<any>();

  const getProduct = async (id: number) => {
    const res = await ApiService.get(`product/${id}`);
    let data = res.data?.data;
    setProduct(data);
  };

  useEffect(() => {
    getProduct(id);
  }, []);

  return (
    <div className="m-5 mt-10 ">
      <div className="grid grid-cols-2">
        <div className="">
          <ImageList
            sx={{ width: 910, height: 450, overflow: "visible" }}
            variant="woven"
            cols={3}
            gap={8}
          >
            {product?.images?.map((item: any) => (
              <ImageListItem key={item}>
                <img
                  srcSet={`${item}?w=361&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item}?w=361&fit=crop&auto=format`}
                  alt="product images"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
        <div className="">
          <div className="m-4">
            <h1 className="font-medium text-3xl"> {product?.title} </h1>
          </div>
          <div className="m-4">
            <h1 className="font-medium text-2xl underline">
              Rs. {product?.price}{" "}
            </h1>
          </div>
          <div className="m-4">
            <p className="font-normal text-lg"> {product?.description} </p>
          </div>
          <div className=" m-4">
            <h5 className="flex font-light text-xl">
              <h6 className="font-normal text-xl mr-2">Category:</h6>
              {product?.category.category}
            </h5>
          </div>
          <div className="m-4">
            <button className="ring ring-blue-300 p-2 bg-indigo-300 hover:bg-indigo-400 hover:ring-blue-200 active:bg-gradient-to-tr from-blue-300 to-indigo-300">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
