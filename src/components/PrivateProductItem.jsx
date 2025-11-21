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

  const [editId, setEditId] = useState(null);
  const [editValue, setEditValue] = useState({
    name: "",
    price: 0,
    count: 0,
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
      setEditValue({ name: "", price: 0, count: 0 });
    }
  }

  function handleEdit() {
    setEditModal(true);
    setEditId(product.id);

    setEditValue({
      name: product.name,
      price: product.price,
      count: product.count,
    });
  }

  console.log(product);

  return (
    <li className="grid gap-5 items-center grid-cols-[50px_1fr_100px] mb-2.5 border-b pb-2.5 border-b-[#ccc]">
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
                className="border-b p-[10px_0_10px_20px] outline-none border-b-gray-400 mb-2.5 pb-[5px]"
                type="text"
                placeholder="Enter name"
                name="name"
                defaultValue={product.name}
              />

              <input
                onChange={saveData}
                className="border-b p-[10px_0_10px_20px] outline-none border-b-gray-400 mb-2.5 pb-[5px]"
                type="number"
                placeholder="Enter price"
                name="price"
                defaultValue={product.price}
              />
              <input
                onChange={saveData}
                className="border-b p-[10px_0_10px_20px] outline-none border-b-gray-400 mb-2.5 pb-[5px]"
                type="number"
                placeholder="Enter count"
                name="count"
                defaultValue={product.count}
              />
              <button className="bg-blue-400 p-[10px_0] text-[14px] w-full text-white rounded-lg mt-4">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}

      <span className="">{productId}</span>

      {/* {editId ? (
        <input
          type="text"
          onChange={(evt) => setEditValue(evt.target.value)}
          className="border border-gray-500 rounded-lg p-[5px_0_5px_15px]"
          defaultValue={product.name}
        />
      ) : ( */}
      <div className="grid grid-cols-3">
        <h2 className={`text-gray-500 text-center`}>{product.name}</h2>
        <h2 className={`text-gray-500 text-center`}>{product.price}</h2>
        <h2 className={`text-gray-500 text-center`}>{product.count}</h2>
      </div>
      {/* )} */}

      <div className="flex gap-2.5">
        {/* {editId ? (
          <button
            onClick={() => {
              dispatch(editProduct({ id: editId, name: editValue }));
              setEditId(null);
            }}
            className="w-full bg-yellow-500 text-[14px] cursor-pointer text-white p-[5px_0] rounded-lg"
          >
            <i className="bi bi-bookmark"></i>
          </button> */}
        {/* // ) : ( */}
        <button
          onClick={handleEdit}
          className="w-full bg-yellow-500 text-[14px] cursor-pointer text-white p-[5px_0] rounded-lg"
        >
          <i className="bi bi-pencil"></i>
        </button>
        {/* // )} */}
        <button
          onClick={() => dispatch(deleteProduct(product.id))}
          className="w-full bg-red-500 text-[14px] cursor-pointer text-white p-[5px_0] rounded-lg"
        >
          <i className="bi bi-trash3"></i>
        </button>
      </div>
    </li>
  );
}
