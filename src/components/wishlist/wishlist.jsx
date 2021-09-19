import React from "react";
import WishItem from "components/wishItem/wishItem";
import "./wishlist.css";

function Wishlist({ wishlistData }) {
  return (
    <section>
      {wishlistData ? (
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
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            {wishlistData.map((item) => (
              <WishItem
                key={item.id}
                id={item.id}
                companyName={item.company_name}
                cityName={item.city_name}
                roleName={item.role_name}
                link={item.link}
              />
            ))}
          </ul>
        </div>
      ) : (
        <div>Loading data...</div>
      )}
    </section>
  );
}

export default Wishlist;
