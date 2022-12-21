import { configureStore } from "@reduxjs/toolkit";
import banners from "./banners/banners";
import products from "./products/products";

const store = configureStore({
  reducer: {
    banners,
    products,
  },
});

export default store;
