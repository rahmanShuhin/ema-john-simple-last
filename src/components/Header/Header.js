import React from "react";
import logo from "../../images/logo.png";
import "./Header.css";
import { useAuth } from "src/use.auth";
const Header = () => {
  const auth = useAuth();
  //console.log(auth, 1);
  return (
    <div className="header">
      <img src={logo} alt="logo" />
      <nav>
        <a href="/shop">shop</a>
        <a href="/review">Order Review</a>
        <a href="/inventory">Manage Inventry Here</a>
        {auth.user ? (
          <span style={{ color: "gold" }}>{auth.user.name}</span>
        ) : (
          <a href="/login" style={{ color: "red" }}>Sign In</a>
        )}
      </nav>
    </div>
  );
};
export default Header;
