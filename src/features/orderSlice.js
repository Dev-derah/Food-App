import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  order: [],
};
const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addItem(state,action){
        state.order.push(action.payload);

    }
  },
});

export const {
    addItem,
}=orderSlice.actions;

export default orderSlice.reducer;