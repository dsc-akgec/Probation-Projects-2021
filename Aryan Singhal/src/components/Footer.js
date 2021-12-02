import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
        <div className="row">
          <div className="detail">
            <h6>About</h6>
            <p>
              Welcome To YourCart. We focus on providing the best things
              available for you at your price. We guarantee you a safe and fast
              delivery with original products only. So, You can trust us and buy
              things without hesistating.
            </p>
          </div>
          <div>
            <h6>Contact Us</h6>
            <div className="contact">
              <h4>
                We have our offices at: xyz, xyz Street, xyz Colony, xyz City,
                xyz Country
              or You can contact us at: xxxxxxxx@gmail.com </h4>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div>
            <p className="copyright-text">
              Copyright &copy; 2021 All Rights Reserved by
              <a href="/homepage">YourCart.</a>
            </p>
          </div>
        </div>
      </div>
  );
}

export default Footer;
