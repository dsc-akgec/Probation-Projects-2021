import React, { useContext } from "react";
import NavBar from "../NavBar";
import "./Wishlist.css";
import WishlistProd from "./WishlistProd";
import Context from "../../Context/Context";
import EmptyCart from "../EmptyCart";
function Wishlist() {
  const { wishItem } = useContext(Context);
  return (
    <div className="shoppingCart">
      <NavBar />
      <h2 className="Products">Welcome to your Wishlist</h2>
      <div className="items" style={{ color: "white" }}>
        {wishItem.length === 0 ? (
          <EmptyCart message="WishList Is Empty" />
        ) : (
          wishItem.map((e) => {
            return (
              <WishlistProd
                image={e.image}
                title={e.title}
                description={e.description}
                price={e.price}
                id={e.id}
              />
            );
          })
        )}
      </div>
    </div>
  );
}

export default Wishlist;
