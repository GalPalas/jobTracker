import React from "react";
import "./wishlistItem.css";

function WishItem() {
  return (
    <li>
      <div className="dropdown-item">
        <div className="company-name d-flex justify-content-between">
          <h5 className="text-danger">Moon Active</h5>{" "}
          <i class="bi bi-trash-fill"></i>
        </div>
        <small>Tel Aviv</small>
        <p className="m-0">Full Stack</p>
        <div className="company-link d-flex text-danger">
          <p>See Full Postion</p>
          <i className="bi bi-box-arrow-up-right mx-2"></i>
        </div>
        <button className="btn btn-outline-warning w-100">Applied</button>
      </div>
    </li>
  );
}

export default WishItem;
