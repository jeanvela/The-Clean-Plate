import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    allProducts: [],
    products:[],
    categoryFilter: "All",
    originFilter: "All"
  },
  reducers: {
    setProducts: (state, action) => {
      state.allProducts = action.payload;
      state.products = action.payload;
    },
    setByName:(state,action) => {
        state.products = action.payload;
    },
    setByCategory: (state, action) => {
      state.categoryFilter = action.payload;
      const allProducts = state.allProducts;
      let filteredProducts = [];
      if (action.payload === "All") {
        filteredProducts = allProducts;
      } else {
        allProducts.forEach((product) => {
          let found = product.category.find((c) => c === action.payload);

          if (found) {
            filteredProducts.push(product);
          }
        });
      }
      state.products = filteredProducts.filter(product => {
        if(state.originFilter === "All") {
          return true;
        }
        return product.origin === state.originFilter;
      });
    },
    setByOrigin:(state, action) => {
      state.originFilter = action.payload;
      const currentProducts = state.allProducts;
      let filteredProducts=[];
      if (action.payload === "All"){
        filteredProducts = currentProducts;
      } else {
        currentProducts.forEach((product)=> {
          let found = product.origin === action.payload

          if(found) {
            filteredProducts.push(product)
          }
        })
      }
      state.products = filteredProducts.filter(product => {
        if(state.categoryFilter === "All") {
          return true;
        }
        return product.category.includes(state.categoryFilter);
      });
    }
  },
  extraReducers: {},
});

export const { setProducts, setByName, setByCategory, setByOrigin } = productsSlice.actions;
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

export const filterByCategory = (payload) => {
  return (dispatch) => {
    dispatch(setByCategory(payload));
  };
};

export const filterByOrigin = (payload) => {
  return (dispatch) => {
    dispatch(setByOrigin(payload));
  };
};
