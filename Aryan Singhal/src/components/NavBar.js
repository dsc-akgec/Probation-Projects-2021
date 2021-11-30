import React, { useState } from "react";
import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";
import Context from "../Context/Context";
import { useContext } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./Firebase";

function NavBar() {
  const { cartItem } = useContext(Context);

  const aut = getAuth();
  const [log, setLog] = useState(false);
  onAuthStateChanged(aut, (user) => {
    if (user) {
      setLog(true);
    }
  });

  return (
    <>
      <div className="NavBar">
        <div className="Navigation">
          <NavLink exact activeClassName="active" to="/homepage">
            Home
          </NavLink>
          <a href="javascript: document.body.scrollIntoView(false);">About</a>
          <a href="javascript: document.body.scrollIntoView(false);">
            Contact Us
          </a>
        </div>
        <div className="Navigation Nav2">
          <NavLink exact activeClassName="active" to="/wishlist">
            WishList
          </NavLink>
          <NavLink exact activeClassName="active" to="/cart">
            <div className="YourCart">
              <img
                src="https://th.bing.com/th/id/R.6684cdc1428f0d05e6856bcfb24fbba6?rik=A56sKO21j5qhZg&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f2016%2f04%2fCart-PNG-HD.png&ehk=5%2bAlVUxxMKZd0va1b05fjsc6iux3eiFoqu9qakOCYLY%3d&risl=&pid=ImgRaw&r=0"
                alt="My Cart"
              ></img>
              <p>My Cart&nbsp;</p>
              {cartItem.length > 0 && <span>{cartItem.length}</span>}
            </div>
          </NavLink>
          {!log && (
            <div>
              <Link to="/register">Register</Link>
              <Link to="/">Sign In</Link>
            </div>
          )}
          {log && (
            <div
              onClick={() => {
                signOut(auth);
              }}
            >
              <NavLink to="/logout">Log Out</NavLink>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default NavBar;
