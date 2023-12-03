const url = "http://localhost:5005/api/";

export async function getProducts() {
  const res = await fetch(`${url}product?page=1`);
  const data = res.json();
  return data;
}

interface Products {
  id: number;
  title: string;
  description: string;
  images: string[];
  category: {
    id: number;
    category: string;
  };
  price: number;
  quantity: number;
}

export default async function Home() {
  const allProducts = await getProducts();

  const products: Products[] = await allProducts.data;

  return (
    <main className="m-4">
      <div className="m-6">
        <h1 className="text-4xl font-bold text-orange-500 ">
          More than just a reliable e-commerce platform!
        </h1>
      </div>
      <div>
        <div className="form-control mb-3 m-6">
          <input
            type="text"
            placeholder="Search"
            className="input w-24 md:w-auto lg:w-auto xl:w-auto  border-orange-400 focus:border-orange-700 hover:border-orange-200"
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-between">
        {products.map((product) => (
          <div className="flex mx-3 " key={product.id}>
            <div className=" card w-96 bg-base-100 shadow-xl m-4">
              <figure className="p-2">
                <img
                  className="w-[100%] aspect-[3/2] object-contain "
                  src={product.images[0]}
                  alt={product.title}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-2xl"> {product.title} </h2>
                <div className="flex justify-between">
                  <h3 className="text-xl font-bold underline">
                    Rs. {product.price}
                  </h3>

                  <h3 className="text-xl font-bold">
                    Quantity:&nbsp;
                    <span className="bg-gradient-to-r from-orange-400 to-rose-400 rounded-badge p-2 text-white font-semibold">
                      {product.quantity}
                    </span>
                  </h3>
                </div>
                <p className="text-justify text-lg">
                  {product.description.substring(0, 120)}...
                </p>
                <div className="card-actions justify-end">
                  <button className="btn bg-gradient-to-r from-rose-400 to-orange-300 text-white text-lg">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
