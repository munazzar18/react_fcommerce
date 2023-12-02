import ImageSlider from "./ImageSlider";

const url = "http://localhost:5005/api/";

async function fetchProduct(id: number) {
  const response = await fetch(`${url}product/${id}`, {
    next: {
      revalidate: 60,
    },
  });
  const product = await response.json();
  return product;
}

const Product = async ({ id }: any) => {
  const fetchedProduct = await fetchProduct(id);
  const product = fetchedProduct.data;
  const images = product?.images;
  return (
    <>
      <div className="container mt-16 ">
        <div className="grid grid-cols-2">
          <div className="m-3">
            <ImageSlider images={images} />
          </div>
          <div className=" mt-2">
            <div className="m-2 font-bold text-4xl mb-5"> {product.title} </div>
            <div className="m-2 font-bold text-2xl underline mb-5">
              Rs.
              {product.price}
            </div>
            <div className="m-2 font-light text-xl text-justify mb-5">
              {product.description}
            </div>
            <div className="flex justify-between mb-5">
              <div className="m-2 font-medium text-lg">Quantity:</div>
              <div className="m-2">
                <input
                  className="border border-indigo-500 p-1 px-3 rounded-lg font-bold text-lg"
                  type="number"
                  max={product.quantity}
                  min={1}
                  defaultValue={1}
                />
              </div>
            </div>
            <div className="m-2">
              <button
                className="bg-indigo-600 p-3 rounded-lg text-white hover:bg-gradient-to-b from-indigo-600 to-indigo-400 active:translate-y-2"
                disabled={product.quantity === 0}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
