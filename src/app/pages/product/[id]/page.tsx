import Product from "@/app/components/product/Product";

const SingleProduct = ({ params: { id } }: any) => {
  return (
    <div>
      <Product id={id} />
    </div>
  );
};

export default SingleProduct;
