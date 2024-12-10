import { createSlice } from "@reduxjs/toolkit";


const theaterSlice = createSlice({
  name: "theaterName",
  initialState: {
    value: "",
  },
  reducers: {
    updateName: (state) => {
      state.value += "test";
    },
  },
});