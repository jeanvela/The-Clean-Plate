
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    role: '',
  },
  reducers: {
    setUserRole: (state, action) => {
      state.role = action.payload;
    },
  },
});

export const { setUserRole } = userSlice.actions;

export default userSlice.reducer;
