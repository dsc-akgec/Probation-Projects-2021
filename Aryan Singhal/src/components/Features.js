import React from "react";
import "./Features.css";
function Features() {
  return (
    <div className="features">
      <div className="spec">
        <img
          className="specImage"
          src="https://th.bing.com/th/id/OIP.W3rWZKqwOEP-0fExg7rw9AHaGC?pid=ImgDet&rs=1"
          alt="features"
        ></img>
        <div className="about">
          <p>Free Delivery On Orders Above Rs. 500</p>
        </div>
      </div>
      <div className="spec">
        <img
          className="specImage"
          src="http://warrentruckandtrailerinc.com/files/2014/06/10off.jpg"
          alt="features"
        ></img>
        <div className="about">
          <p>10% Off On Payment with Bank's Debit/Credit Cards</p>
        </div>
      </div>
      <div className="spec">
        <img
          className="specImage"
          src="https://seeklogo.com/images/M/man-silhouette-delivery-logo-0DBA9FBE43-seeklogo.com.png"
          alt="features"
        ></img>
        <div className="about">
          <p>Easy Returns/Replacements in 10 Days For You</p>
        </div>
      </div>
    </div>
  );
}

export default Features;
