import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

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
    addNewJob: (tracker, action) => {
      tracker.wishlist.push(action.payload);
    },
  },
});

console.log(trackerSlice);

export const { addNewJob, callRequested } = trackerSlice.actions;
export default trackerSlice.reducer;

export const wishlist = () =>
  createSelector(
    (state) => state.entities.tracker,
    (tracker) => tracker.wishlist
  );
