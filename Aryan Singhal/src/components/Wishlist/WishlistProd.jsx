import React from "react";
import { useContext } from "react";
import Context from "../../Context/Context";
import "../Cards.css";
function WishlistProd(card) {
  const { removeWish, addCart } = useContext(Context);
  return (
    <div className="cards">
      <div className="proDesc">
        <div id="prodImage">
          <img src={card.image} alt={card.id}></img>
        </div>
        <div className="Info">
          <h3>{card.title}</h3>
          <p>⭐⭐⭐⭐⭐</p>
          <h4>Rs. {card.price}</h4>
          <p>{card.description}</p>
        </div>
      </div>
      <div className="Addbtns">
        <button
          className="Add"
          style={{ backgroundColor: "#780607" }}
          onClick={() => removeWish(card.id)}
        >
          Remove From Wishlist
        </button>
        <button
          className="Add"
          onClick={() => {
            addCart(card);
            alert("Successfully Added to cart!!");
          }}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default WishlistProd;
