import { useDispatch } from "react-redux";
import { useState } from "react";
import { addProduct, deleteProduct, editProduct } from "../store/productSlice";

export default function PrivateProductItem({
  product,
  productId,
  name,
  checked,
}) {
  const dispatch = useDispatch();

  const [image, setImage] = useState(null);
  const [editId, setEditId] = useState(null);

  const [editValue, setEditValue] = useState({
    name: "",
    price: 0,
    count: 0,
    img: null,
  });

  const [editModal, setEditModal] = useState(false);

  function saveData(e) {
    setEditValue({
      ...editValue,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    if (editValue.name && editValue.price && editValue.count) {
      dispatch(editProduct({ id: editId, edit: editValue }));
      setEditModal(false);

      setEditValue({ name: "", price: 0, count: 0, img: null });
      setImage(null);
    }
  }

  function handleEdit() {
    setEditModal(true);
    setEditId(product.id);

    setImage(product.img);

    setEditValue({
      name: product.name,
      price: product.price,
      count: product.count,
      img: product.img,
    });
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imgUrl = URL.createObjectURL(file);
      setImage(imgUrl);

      setEditValue((prev) => ({
        ...prev,
        img: imgUrl,
      }));
    }
  };

  return (
    <li className="grid gap-5 items-center grid-cols-[50px_1fr_100px] mb-2.5 border-b pb-2.5 border-b-[#ccc]">
      {/* MODAL */}
      {editModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white w-[400px] rounded-lg p-6 relative">
            <button
              onClick={() => setEditModal(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-lg font-bold"
            >
              &times;
            </button>

            <h2 className="text-[30px] text-gray-600 text-left mb-5 font-semibold">
              Edit Product
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col w-full">
              <input
                onChange={saveData}
                className="border-b p-[10px_0_10px_20px] outline-none border-b-gray-400 mb-2.5"
                type="text"
                name="name"
                placeholder="Enter name"
                defaultValue={product.name}
              />

              <input
                onChange={saveData}
                className="border-b p-[10px_0_10px_20px] outline-none border-b-gray-400 mb-2.5"
                type="number"
                name="price"
                placeholder="Enter price"
                defaultValue={product.price}
              />

              <input
                onChange={saveData}
                className="border-b p-[10px_0_10px_20px] outline-none border-b-gray-400 mb-2.5"
                type="number"
                name="count"
                placeholder="Enter count"
                defaultValue={product.count}
              />

              {/* IMAGE UPLOAD */}
              <div className="mt-3 flex items-center gap-[20px]">
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

                {/* PREVIEW */}
                {image && (
                  <img
                    src={image}
                    className="w-20 h-20 mt-3 object-cover"
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

      <span>{productId}</span>

      {/* PRODUCT INFO */}
      <div className="grid grid-cols-4 items-center">
        <div className="w-16 h-16 rounded-full overflow-hidden flex items-center justify-center bg-gray-100 border border-gray-300 shadow-sm">
          {product.img ? (
            <img src={product.img} className="w-full h-full object-cover" />
          ) : (
            <span className="text-gray-500 text-xs font-medium">No image</span>
          )}
        </div>

        <h2 className="text-gray-500 text-center">{product.name}</h2>
        <h2 className="text-gray-500 text-center">{product.price}</h2>
        <h2 className="text-gray-500 text-center">{product.count}</h2>
      </div>

      {/* BUTTONS */}
      <div className="flex gap-2.5">
        <button
          onClick={handleEdit}
          className="w-full bg-yellow-500 text-[14px] text-white p-[5px_0] rounded-lg"
        >
          <i className="bi bi-pencil"></i>
        </button>

        <button
          onClick={() => dispatch(deleteProduct(product.id))}
          className="w-full bg-red-500 text-[14px] text-white p-[5px_0] rounded-lg"
        >
          <i className="bi bi-trash3"></i>
        </button>
      </div>
    </li>
  );
}
