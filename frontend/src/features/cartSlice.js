import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItem: [],
    amount: 0,
    total: 0,
  },
  reducers: {
    setCart: (state, action) => {
      state.cartItem = action.payload;
    },
  },
  extraReducers: {},
});
export const { setCart } = cartSlice.actions;
export default cartSlice.reducer;
