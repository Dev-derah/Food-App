import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  order: [],
};
const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    createItem:(state, action)=> {
        state.items =action.payload;
    },
    addItem:(state,action)=>{
        state.items =[...state.item,action.payload.item]
    },
    removeItem:(state,action)=>{
        state.items= state.items.filter((item)=> item.id !== action.payload.id);
    }
  },
});

export const {
    createItem,
    addItem,
    removeItem
}=orderSlice.actions;

export default orderSlice.reducer;