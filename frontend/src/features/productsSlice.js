import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    allProducts: [],
  },
  reducers: {
    setProducts: (state, action) => {
      state.allProducts = action.payload;
    },
  },
  extraReducers: {},
});
export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;

export const getAllProducts = () => async (dispatch) => {
  try {
    const resp = await axios.get("http://localhost:3001/products");
    dispatch(setProducts(resp.data));
    // console.log(resp.data);
  } catch (error) {
    console.log(error);
  }
};
