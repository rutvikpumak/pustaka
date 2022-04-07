import React, { useEffect } from "react";
import { useData } from "../../context";
import WishlistCard from "./component/WishlistCard";
import "./Wishlist.css";

export function Wishlist() {
  const { wishlist, cart, dataDispatch, changeTitle } = useData();
  const isWishlistHasItem = wishlist.length > 0;

  useEffect(() => changeTitle("Wishlist", []));
  return (
    <div className="wishlist-container">
      <div className="wishlist-main-container flex-center">
        <h3>MY WISHLIST {isWishlistHasItem && `(${wishlist.length})`}</h3>
        {isWishlistHasItem ? (
          <div className="wishlist-manage">
            <div className="wishlist">
              {wishlist.map((product) => (
                <WishlistCard
                  key={product._id}
                  product={product}
                  cart={cart}
                  dataDispatch={dataDispatch}
                />
              ))}
            </div>
          </div>
        ) : (
          <h1 className="text-center"> Your Wishlist Is Empty ! ☹️</h1>
        )}
      </div>
    </div>
  );
}
