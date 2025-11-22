import { useSelector } from "react-redux";
import ProductItem from "../components/productItem";

export default function Products() {
  const { products } = useSelector((state) => state.products);

  return (
    <section>
      <div className="container">
        <div className="">
          <ul
            className={`${
              products.length ? "mt-[65px] grid grid-cols-3 gap-5" : ""
            }`}
          >
            {products.length ? (
              products.map((product, index) => (
                <ProductItem
                  productId={index + 1}
                  product={product}
                  key={product.id}
                  {...product}
                />
              ))
            ) : (
              <p className="border-gray-500 border p-5 rounded-lg text-red-500 text-center text-2xl font-semibold ">
                Product bo`sh
              </p>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}
