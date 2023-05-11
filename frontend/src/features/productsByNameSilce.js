import {createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const productsByNameSlice = createSlice({
    name: "productName",
    initialState:{
        pruduct: []
    },
    reducers: {
        getProductByName: (state,action)=> {
            state.pruduct = action.payload;
        }
    }
})
export const {getProductByName} = productsByNameSlice.actions
export default productsByNameSlice.reducer;

export const fetchProductByName = (name) => async (dispatch) => {
    try {
        const json = await axios.get(`http://localhost:3001/products?name=${name}`)
       dispatch(getProductByName(json.data));
    } catch (error) {
        console.log(error)
    }
}