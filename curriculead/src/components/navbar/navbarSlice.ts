import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface NavbarState {
  value: number;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: NavbarState = {
  value: 0,
  status: 'idle',
};

export const navbarSlice = createSlice({
  name: 'step',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    selectStep: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const { increment, decrement, selectStep } = navbarSlice.actions;

export default navbarSlice.reducer;