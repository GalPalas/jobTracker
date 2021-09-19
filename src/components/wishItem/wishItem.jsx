import React from "react";
import { useDispatch } from "react-redux";
import { removeJob } from "store/trackerSlice";
import "./wishlistItem.css";

function WishItem({ id, companyName, cityName, roleName, link }) {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removeJob(id));
  };
  return (
    <li>
      <div className="dropdown-item mb-3">
        <div className="company-name d-flex justify-content-between ">
          <h5 className="text-danger mb-0">{companyName}</h5>
          <button className="btn text-dark" onClick={() => handleDelete(id)}>
            <i className="bi bi-trash-fill"></i>
          </button>
        </div>
        <small>{cityName}</small>
        <p className="m-0 fw-bold">{roleName}</p>
        <div>
          <a
            target="_blank"
            href={link}
            rel="noreferrer"
            className="company-link d-flex text-danger"
          >
            <p>See Full Postion</p>
            <i className="bi bi-box-arrow-up-right mx-2"></i>
          </a>
        </div>
        <button className="btn btn-outline-warning w-100">Applied</button>
      </div>
      <hr className="dropdown-divider"></hr>
    </li>
  );
}

export default WishItem;
