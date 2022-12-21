import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const bannersUrl = "http://localhost:3002/api/public/banners";
const productsUrl = "http://localhost:3002/api/public/banners";

const initialState = {
  banners: [],
  isLoading: false,
  hasErrors: false,
  products: [],
};

export const bannersSlice = createSlice({
  name: "banners",
  initialState,
  reducers: {
    getItems: (state) => {
      state.isLoading = true;
    },
    getBannersSuccess: (state, { payload }) => {
      state.banners = payload;

      state.isLoading = false;
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

export const {
  getItems,
  getBannersSuccess,
  getItemsFailure,
  getProductsSuccess,
} = bannersSlice.actions;

export default bannersSlice.reducer;

export function fetchBanners() {
  return async (dispatch) => {
    dispatch(getItems());

    try {
      const response = await axios.get(bannersUrl).then((res) => {
        console.log(res);
      });

      dispatch(getBannersSuccess(response));
    } catch {
      dispatch(getItemsFailure);
    }
  };
}

export const fetchProducts = async (dispatch) => {
  dispatch(getItems);
  try {
    await axios.get(productsUrl).then((res) => {
      dispatch(getProductsSuccess(res.data));
    });
  } catch (err) {
    throw err;
  }
};
