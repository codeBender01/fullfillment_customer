import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const productsUrl = "http://localhost:3002/api/public/products";

const initialState = {
  products: [],
  isLoading: false,
  hasErrors: false,
};

export const productsSlice = createSlice({
  name: "banners",
  initialState,
  reducers: {
    getItems: (state) => {
      state.isLoading = true;
    },

    getProductsSuccess: (state, { payload }) => {
      state.products = payload;

      state.isLoading = false;
    },

    getItemsFailure: (state) => {
      state.isLoading = false;
      state.hasErrors = true;
    },
  },
});

export const { getItems, getProductsSuccess, getItemsFailure } =
  productsSlice.actions;

export default productsSlice.reducer;

export const fetchProducts = async (dispatch) => {
  dispatch(getItems);
  try {
    await axios.get(productsUrl).then((res) => {
      dispatch(getProductsSuccess(res.data.products));
    });
  } catch (err) {
    throw err;
  }
};
