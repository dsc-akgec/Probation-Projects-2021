import React from "react";
import './LogOut.css';
import { useHistory } from "react-router";
function LogOut() {
  const history = useHistory();
  history.push('/logout');
  return (
    <div className="logout">
      <h3 className="cartEmpty">You are Logged Out</h3>
    </div>
  );
}

export default LogOut;
