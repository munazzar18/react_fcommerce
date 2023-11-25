"use client";
import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useEffect, useState } from "react";
import ApiService from "@/app/services/ApiService";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Oval } from "react-loader-spinner";

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


export default function Product() {
  const [products, setProducts] = useState <Product[]>([])
  const [loader, setLoader] = useState(false)
  
const getProducts = async () => {

  const res = await ApiService.get("product?page=1")
  setLoader(true)
  setProducts(res.data.data)
  setLoader(false)
 


}

  useEffect(() => {
    getProducts()
  },[])

  let loading;

  if(loader === true){
     loading = (
      <div className="fixed inset-0 flex justify-center items-center z-50">
        <div >
        <Oval
              height={80}
              width={80}
              color="#4fa94d"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel='oval-loading'
              secondaryColor="#4fa94d"
              strokeWidth={2}
              strokeWidthSecondary={2}
      />
        </div>
      </div>
     )
        
    }
    else {
      loading = ""
    }

  return (
    <> 
    {loading}
      <div className="m-24">
        <div className="m-5" >
          <h1 className="font-semibol text-2xl italic drop-shadow-md" >
            Chance to get full hands on any product!
          </h1>
        </div>
        <div className="flex flex-wrap justify-evenly my-2 mx-2 " >
          {products.map((product) => {
            return (
              <Card sx={{ maxWidth: 345, marginBottom: '60px' }} key={product?.id}>
                <div className="bg-gradient-to-r from-indigo-300 to-blue-200" >
              <CardHeader 
                avatar={
                  <Avatar sx={{ bgcolor: red[500]  }} aria-label="product">
                    {product?.quantity}
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title= {product?.title}
                
              />
              <div className="flex justify-center" >
              <CardMedia
                component="img"
                className="h-52 w-52 flex justify-center"
                image={product?.images[0] || '/../../../../no_image.jpg'}
                alt="product Image"
              />
              </div>
              
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                 {product?.description.length > 170 ? `${product.description.substring(0, 170)}...` : product.description}
                </Typography>
              </CardContent>
              <div className="flex justify-between items-center">
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="add to cart">
                  <AddShoppingCartIcon/>
                </IconButton>
              </CardActions>
              <p className="mr-4 font-bold" >Rs.{product.price}</p>
              </div>
              </div>
            </Card>
            )
          })}
        </div>
      </div>
    </>
  );
}
