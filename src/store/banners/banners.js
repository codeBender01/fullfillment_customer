import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = "http://localhost:3001/api/public/banners";
const loginURL = "http://localhost:3001/api/roles/login";

const initialState = {
  banners: [],
  isLoading: false,
  hasErrors: false,
};

export const bannersSlice = createSlice({
  name: "banners",
  initialState,
  reducers: {
    getBanners: (state) => {
      state.isLoading = true;
    },
    getBannersSuccess: (state, { payload }) => {
      state.banners = payload;

      state.isLoading = false;
    },

    getBannersFailure: (state) => {
      state.isLoading = false;
      state.hasErrors = true;
    },
  },
});

export const { getBanners, getBannersSuccess, getBannersFailure } =
  bannersSlice.actions;

export default bannersSlice.reducer;

export function fetchBanners() {
  return async (dispatch) => {
    dispatch(getBanners());

    try {
      const response = await axios
        .get(baseURL)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          throw err;
        });

      dispatch(getBannersSuccess(response));
    } catch {
      dispatch(getBannersFailure);
    }
  };
}

// export function postBanner() {
//     return async (dispatch) => {
//         try {
//             await axios.post
//         }
//     }
// }
