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
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Loader from "@/app/Loading";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import { ToastContainer, toast } from "react-toastify";
import Link from "next/link";

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

const url = "http://localhost:5005/api/";

async function fetchAll(page: string, category: number) {
  const response = await fetch(`${url}product?page=1&categoryIds=${category}`);
  const products = response.json();
  return products;
}

const Products = async ({ page, search, category }: any) => {
  const allProducts = await fetchAll(page, category);
  const products = allProducts.data;

  return (
    <>
      <div className="flex flex-wrap">
        {products.map((product: Product) => {
          return (
            <Link href={`/pages/product/${product.id}`} key={product?.id}>
              <Card
                className="cursor-pointer"
                sx={{
                  maxWidth: 345,
                  marginBottom: "60px",
                  marginLeft: "60px",
                }}
              >
                <div className="">
                  <CardHeader
                    avatar={
                      <Avatar sx={{ bgcolor: red[500] }} aria-label="product">
                        {product?.quantity}
                      </Avatar>
                    }
                    action={
                      <IconButton aria-label="settings">
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title={product?.title}
                  />
                  <div className="flex justify-center">
                    <CardMedia
                      component="img"
                      className="w-[100%] aspect-[3/2] object-contain"
                      image={product.images[0]}
                      alt="product Image"
                    />
                  </div>

                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      {product?.description.length > 170
                        ? `${product.description.substring(0, 170)}...`
                        : product.description}
                    </Typography>
                  </CardContent>
                  <div className="flex justify-between items-center">
                    <CardActions disableSpacing>
                      <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                      </IconButton>
                      <IconButton aria-label="add to cart">
                        <AddShoppingCartIcon />
                      </IconButton>
                    </CardActions>
                    <p className="mr-4 font-bold">Rs.{product.price}</p>
                  </div>
                </div>
              </Card>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Products;
