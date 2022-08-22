import React from "react";
import CSS from 'csstype';

const headerStyles: CSS.Properties = {
  color: "gray",
  fontFamily: "roboto, sans-serif",
  fontSize: "20px",
  textAlign: "center",
}

const Header: React.FC = () => {
  return (
    <div>
      <h1 style={headerStyles}>Spent time (hour)</h1>
    </div>
  );
};

export default Header;