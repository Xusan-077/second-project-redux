import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoListSlice";
import productReducer from "./productSlice";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    products: productReducer,
    user: userReducer,
  },
});

export default store;
