import { useDispatch, useSelector } from "react-redux";
import ProductItem from "../components/productItem";
import { useState } from "react";
import { addProduct } from "../store/productSlice";

export default function Products() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const { isAuth } = useSelector((state) => state.user);

  const [name, setname] = useState("");

  function handleSubmit(evt) {
    evt.preventDefault();

    if (name !== "") {
      const newToDo = {
        id: Date.now(),
        name: name,
        checked: false,
      };

      dispatch(addProduct(newToDo));
    }

    evt.target.reset();
    setname("");
  }

  return (
    <section>
      <div className="container">
        <div
          className={`${!isAuth ? "" : "grid grid-cols-[3fr_5fr] gap-[30px]"} `}
        >
          {isAuth ? (
            <div className="">
              <h2 className="text-[30px] text-gray-600 text-center mb-5 font-semibold">
                CRUD
              </h2>

              <form
                onSubmit={handleSubmit}
                className="flex flex-col w-full border-gray-500 border p-[25px_20px] rounded-lg"
              >
                <input
                  onChange={(evt) => setname(evt.target.value)}
                  className="border-b p-[0_0_0_10px] outline-none border-b-gray-400 mb-2.5 pb-[5px]"
                  type="text"
                  placeholder="Enter name"
                />
                <input
                  onChange={(evt) => setname(evt.target.value)}
                  className="border-b p-[0_0_0_10px] outline-none border-b-gray-400 mb-2.5 pb-[5px]"
                  type="text"
                  placeholder="Enter count"
                />
                <input
                  onChange={(evt) => setname(evt.target.value)}
                  className="border-b p-[0_0_0_10px] outline-none border-b-gray-400 mb-2.5 pb-[5px]"
                  type="text"
                  placeholder="Enter price"
                />
                <button className="bg-blue-400 p-[5px_0] text-[14px] w-full text-white rounded-lg">
                  Submit
                </button>
              </form>
            </div>
          ) : (
            ""
          )}

          <ul className="mt-[65px] border border-gray-500 p-[30px_20px_10px_30px] rounded-lg">
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
              <p className="text-red-400 text-center text-[25px]">
                Product bo`sh
              </p>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}
