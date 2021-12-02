import React, { useEffect } from "react";
import CartProducts from "./CartProducts";
import NavBar from "./NavBar";
import "./MyCart.css";
import { useContext } from "react";
import Context from "../Context/Context";
import EmptyCart from "./EmptyCart";
function Mycart() {
  const { cartItem, qty } = useContext(Context);
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItem));
  });
  useEffect(() => {
    const item = localStorage.getItem("cartItems");
    JSON.parse(item);
  });
  return (
    <div className="shoppingCart">
      <NavBar />
      <h2 style={{ color: "white", textAlign: "center" }}>
        Welcome to your Cart
      </h2>
      <div className="Products">
        {cartItem.length === 0 ? (
          <EmptyCart message="Cart Is Empty" />
        ) : (
          cartItem.map((e) => {
            return (
              <CartProducts
                image={e.image}
                heading={e.title}
                about={e.description}
                price={e.price}
                id={e.id}
              />
            );
          })
        )}
      </div>
      {cartItem.length === 0 ? (
        ""
      ) : (
        <div className="subtotal">
          <span>Your Total is: Rs.&nbsp;</span>
          <span>
            {cartItem.reduce((amount, item) => item.price * qty + amount, 0)}
          </span>
        </div>
      )}
    </div>
  );
}

export default Mycart;
