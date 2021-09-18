import React from "react";
import WishItem from "components/wishItem/wishItem";
import "./wishlist.css";

function Wishlist() {
  return (
    <section>
      <div className="dropdown p-5">
        <button
          className="btn btn-dark btn-lg dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Wishlist <i className="bi bi-heart mx-2"></i>
        </button>
        <ul
          className="dropdown-menu mb-4"
          aria-labelledby="dropdownMenuButton1"
        >
          <WishItem />
          <WishItem />
        </ul>
      </div>
    </section>
  );
}

export default Wishlist;
