import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>Welcome to PaMoTra, where your favorite meals are just a click away! Enjoy the convenience of having delicious, freshly prepared food delivered straight to your doorstep. Our commitment to quality and speedy service ensures that every bite is as good as you imagine. Explore our diverse menu, place your order, and get ready to indulge in the tastes you love without leaving the comfort of your home.</p>
        <button style={{color:"blue"}}>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
