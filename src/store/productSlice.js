import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product List",
  initialState: {
    products: JSON.parse(localStorage.getItem("product")) || [],
  },
  reducers: {
    addProduct: (state, action) => {
      state.products = [action.payload, ...state.products];

      localStorage.setItem("product", JSON.stringify(state.products));
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
      localStorage.setItem("product", JSON.stringify(state.products));
    },
    editProduct: (state, action) => {
      state.products = state.products.map((product) =>
        product.id == action.payload.id
          ? {
              ...product,
              name: action.payload.edit.name,
              price: action.payload.edit.price,
              count: action.payload.edit.count,
            }
          : product
      );
      localStorage.setItem("product", JSON.stringify(state.products));
    },
  },
});

export const { addProduct, deleteProduct, editProduct, toggleProduct } =
  productSlice.actions;
export default productSlice.reducer;
