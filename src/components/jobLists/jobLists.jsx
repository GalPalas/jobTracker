import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Wishlist from "components/wishlist/wishlist";
import { wishlist } from "store/trackerSlice";

function JobLists() {
  const dispatch = useDispatch();
  const wishlistData = useSelector(wishlist());

  return (
    <div className="d-flex justify-content-around p-5">
      <Wishlist wishlistData={wishlistData} />
      <Wishlist />
      <Wishlist />
      <Wishlist />
    </div>
  );
}

export default JobLists;
