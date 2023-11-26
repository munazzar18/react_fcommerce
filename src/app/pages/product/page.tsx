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
import Loader from "@/app/components/loader/Loader";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import { ToastContainer, toast } from "react-toastify";


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
  const [products, setProducts] = useState <Product[]>([])
  const [loader, setLoader] = useState(false)
  const [categories, setCategories] = useState<Category[]>([])
  const [category, setCategory] = useState<any>("")

  const [search, setSearch] = useState("")
  
const getProducts = async () => {
  try {
  setLoader(true)
  const res = await ApiService.get(`product?page=1&search=${search}&categoryIds=${category}`)
  setProducts(res.data.data)
  setLoader(false)
  } catch (error: any) {
    setLoader(false)
    toast.error(error.response.data.message, {
      position: toast.POSITION.BOTTOM_LEFT,
      autoClose: 3000,
    });
  }
}

const getCategories = async () => {
  try {
  setLoader(true)
  const res = await ApiService.get("category")
  setCategories(res.data.data)
  setLoader(false)
  } catch (error:any ) {
    setLoader(false)
      toast.error(error.response.data.message, {
        position: toast.POSITION.TOP_LEFT,
        autoClose: 3000,
      });
  }

}

const handleCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
  let selectedCategory = e.target.value
  setCategory(selectedCategory)
}

const searchChange = (e: any) => {
  setSearch(e.target.value) 
 }
 

const startSearch = (e: any) => {
  if(e.key === "Enter"){
    searchChange(e)
    getProducts()
  }
}

  useEffect(() => {
    getProducts()
    getCategories()
  },[category])

  let loading;

  if(loader === true){
     loading = (
      <Loader/>
     )
        
    }
    else {
      loading = ""
    }

  return (
    <> 
    {loading}
      <div className="m-24">
        <div className="m-5 mx-16" >
          <h1 className="font-semibol text-2xl drop-shadow-md" >
            Chance to get full hands on any product!
          </h1>
        </div>
        <div className="flex justify-between my-5 mx-16 ">
        <div className="" >
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField 
        id="input-with-sx" 
        label="Search" 
        variant="standard"
        name="search"
        value={search}
        onChange={searchChange}
        onKeyDown={startSearch}
        />
        <ToastContainer/>
      </Box>
      </div>
      <div className="mx-8">
        <select className="border border-blue-400 p-3 rounded-lg w-72 focus:border-blue-600" id="category"
        name="category" value={category} onChange={handleCategory} >
          <option value="">Categories</option>
          {categories.map((cat) => 
             (
              <option  key={cat.id}  value={cat.id} >{cat.id} {cat.category}</option>
            )
          )}
        </select>
        </div>
        </div>
        
        <div className="flex flex-wrap" >
          {products.map((product) => {
            return (
              <Card sx={{ maxWidth: 345, marginBottom: '60px' , marginLeft: "60px" }} key={product?.id}>
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
