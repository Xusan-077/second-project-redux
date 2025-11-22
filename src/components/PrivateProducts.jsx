import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addProduct } from "../store/productSlice";
import PrivateProductItem from "./PrivateProductItem";
import { toast } from "react-toastify";

export default function PrivateProducts() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const { isAuth } = useSelector((state) => state.user);

  const [modal, setModal] = useState(false);
  const [image, setImage] = useState(null);

  const [data, setData] = useState({
    name: "",
    count: "",
    price: "",
  });

  function openModal() {
    setModal(true);

    // Forma tozalash
    setData({ name: "", price: "", count: "" });
    setImage(null);
  }

  function closeModal() {
    setModal(false);
    setData({ name: "", price: "", count: "" });
    setImage(null);
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    if (data.name !== "" && data.price !== "" && data.count !== "") {
      const newProduct = {
        id: Date.now(),
        ...data,
        img: image ? image : null,
      };

      dispatch(addProduct(newProduct));

      toast.success("Product muvaffaqiyatli qo‘shildi");

      closeModal();
      evt.target.reset();
    }
  }

  function saveData(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <section>
      <div className="container">
        <div className={``}>
          {modal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
              <div className="bg-white w-[400px] rounded-lg p-6 relative">
                <button
                  onClick={closeModal}
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
                    className="border-b p-[10px_0_10px_20px] outline-none border-b-gray-400 mb-2.5"
                    type="text"
                    placeholder="Enter name"
                    name="name"
                    value={data.name}
                  />

                  <input
                    onChange={saveData}
                    className="border-b p-[10px_0_10px_20px] outline-none border-b-gray-400 mb-2.5"
                    type="number"
                    placeholder="Enter price"
                    name="price"
                    value={data.price}
                  />

                  <input
                    onChange={saveData}
                    className="border-b p-[10px_0_10px_20px] outline-none border-b-gray-400 mb-2.5"
                    type="number"
                    placeholder="Enter count"
                    name="count"
                    value={data.count}
                  />

                  <div>
                    <label
                      htmlFor="imageUpload"
                      className="cursor-pointer bg-blue-500 text-white px-4 py-2 w-full text-center rounded-lg shadow hover:bg-blue-600 transition"
                    >
                      Upload Image
                    </label>

                    <input
                      id="imageUpload"
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                    />

                    {image && (
                      <img
                        src={image}
                        className="w-20 h-20 mt-3 object-cover rounded-full border"
                      />
                    )}
                  </div>

                  <button className="bg-blue-500 p-[10px_0] text-[14px] w-full text-white rounded-lg mt-4">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          )}

          <div className="flex justify-between items-center mb-[15px]">
            <h3 className="text-[26px] font-semibold">Products</h3>

            <button
              onClick={openModal}
              className="p-[10px_20px] bg-green-500 cursor-pointer text-white rounded-lg"
            >
              + Add Product
            </button>
          </div>

          <ul className="border border-gray-500 p-[30px_20px_10px_30px] rounded-lg">
            {products.length ? (
              products.map((product, index) => (
                <PrivateProductItem
                  productId={index + 1}
                  product={product}
                  key={product.id}
                />
              ))
            ) : (
              <p className="text-red-500 text-center text-2xl font-semibold mb-5">
                Product bo`sh
              </p>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}
