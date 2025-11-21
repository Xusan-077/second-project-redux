import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addProduct } from "../store/productSlice";
import PrivateProductItem from "./PrivateProductItem";

export default function PrivateProducts() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const { isAuth } = useSelector((state) => state.user);

  const [modal, setModal] = useState(false);

  const [data, setData] = useState({
    name: "",
    count: "",
    price: "",
  });

  function handleSubmit(evt) {
    evt.preventDefault();

    if (data.name !== "" && data.price !== "" && data.count !== "") {
      const newToDo = {
        id: Date.now(),
        ...data,
      };

      dispatch(addProduct(newToDo));
    }

    setModal(false);

    evt.target.reset();
  }

  function saveData(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }

  console.log(modal);

  return (
    <section>
      <div className="container">
        <div
          className={`${!isAuth ? "" : "grid grid-cols-[3fr_5fr] gap-[30px]"} `}
        >
          {modal ? (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
              <div className="bg-white w-[400px] rounded-lg p-6 relative">
                <button
                  onClick={() => setModal(false)}
                  className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-lg font-bold"
                >
                  &times;
                </button>

                <h2 className="text-[30px] text-gray-600 text-left mb-5 font-semibold">
                  Add Product
                </h2>

                <form onSubmit={handleSubmit} className="flex flex-col w-full">
                  <input
                    onChange={saveData}
                    className="border-b p-[10px_0_10px_20px] outline-none border-b-gray-400 mb-2.5 pb-[5px]"
                    type="text"
                    placeholder="Enter name"
                    name="name"
                  />
                  <input
                    onChange={saveData}
                    className="border-b p-[10px_0_10px_20px] outline-none border-b-gray-400 mb-2.5 pb-[5px]"
                    type="number"
                    placeholder="Enter price"
                    name="price"
                  />
                  <input
                    onChange={saveData}
                    className="border-b p-[10px_0_10px_20px] outline-none border-b-gray-400 mb-2.5 pb-[5px]"
                    type="number"
                    placeholder="Enter count"
                    name="count"
                  />
                  <button className="bg-blue-400 p-[10px_0] text-[14px] w-full text-white rounded-lg mt-4">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          ) : (
            ""
          )}

          <div className="flex justify-between items-center mb-[15px]">
            <h3 className="text-[26px] font-semibold">Products</h3>
            <button
              onClick={() => setModal(true)}
              className="p-[10px_20px] bg-green-500  cursor-pointer text-white rounded-lg"
            >
              + add Product
            </button>
          </div>

          <ul className="border border-gray-500 p-[30px_20px_10px_30px] rounded-lg">
            {products.length ? (
              products.map((product, index) => (
                <PrivateProductItem
                  privated
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
