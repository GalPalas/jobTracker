import { createSlice } from "@reduxjs/toolkit";

const trackerSlice = createSlice({
  name: "tracker",
  initialState: {
    wishlist: [],
    applied: [],
    rejected: [],
    accepted: [],
    loading: false,
  },
  reducers: {
    callRequested: (tracker, action) => {
      tracker.loading = true;
    },
  },
});

console.log(trackerSlice);

export const { callRequested } = trackerSlice.actions;
export default trackerSlice.reducer;
