import React from "react";
import Wishlist from "components/wishlist/wishlist";

function JobLists() {
  return (
    <div className="d-flex justify-content-around p-5">
      <Wishlist />
      <Wishlist />
      <Wishlist />
      <Wishlist />
    </div>
  );
}

export default JobLists;
