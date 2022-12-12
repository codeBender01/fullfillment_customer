import { configureStore } from "@reduxjs/toolkit";
import banners from "./banners/banners";

const store = configureStore({
  reducer: {
    banners,
  },
});

export default store;
