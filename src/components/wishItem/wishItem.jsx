import React from "react";
import "./wishlistItem.css";

function WishItem() {
  return (
    <li>
      <div className="dropdown-item mb-3">
        <div className="company-name d-flex justify-content-between ">
          <h5 className="text-danger mb-0">Moon Active</h5>
          <a href="/#" className="text-dark">
            <i class="bi bi-trash-fill"></i>
          </a>
        </div>
        <small>Tel Aviv</small>
        <p className="m-0">Full Stack</p>
        <div>
          <a href="/#" className="company-link d-flex text-danger">
            <p>See Full Postion</p>
            <i className="bi bi-box-arrow-up-right mx-2"></i>
          </a>
        </div>
        <button className="btn btn-outline-warning w-100">Applied</button>
      </div>
      <hr class="dropdown-divider"></hr>
    </li>
  );
}

export default WishItem;
