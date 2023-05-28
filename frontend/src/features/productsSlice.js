
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const setByCategoryAndOrigin = createAsyncThunk(
  "products/setByCategoryAndOrigin",
  async ({ category, origin }) => {
    const response = await axios.get("http://localhost:3001/products", {
      params: {
        category,
        origin,
      },
    });
    return response.data;
  }
);


export const productsSlice = createSlice({
  name: "products",
  initialState: {
    allProducts: [],
    products: [],

    categoryFilter: 'All',
    originFilter: 'All',
    enableProducts: [],
    categoryFilter: "All",
    originFilter: "All",

  },
  reducers: {
    setProducts: (state, action) => {
      state.allProducts = action.payload;
      state.products = action.payload;
    },
    setByName: (state, action) => {
      state.products = action.payload;
    },
    setEnableProduct: (state, action) => {

      state.enableProducts = action.payload;

    },

  },
  extraReducers: (builder) => {

    builder
      .addCase(setByCategoryAndOrigin.fulfilled, (state, action) => {
        state.products = action.payload;
      });
});

export const { setProducts, setByName, setEnableProduct } = productsSlice.actions;
export default productsSlice.reducer;

export const getAllProducts = () => async (dispatch) => {
  try {
    const response = await axios.get("http://localhost:3001/products");
    dispatch(setProducts(response.data));
  } catch (error) {
    console.log(error);
  }
};

export const fetchProductByName = (name) => async (dispatch) => {
  try {
    const json = await axios.get(`http://localhost:3001/products?name=${name}`);
    dispatch(setByName(json.data));
  } catch (error) {
    console.log(error);
  }
};

export const filterByCategoryAndOrigin = ({ category, origin }) => {
  return (dispatch) => {
    dispatch(setByCategoryAndOrigin({ category, origin }));
  };
};
