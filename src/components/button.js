import React from "react";

export const Button = ({ children, onClick }) => (
  <button
    onClick={onClick}
    style={{
      margin: "1em",
      backgroundColor: "white",
      borderRadius: "1em",
      color: "#282c34",
      padding: "1em",
    }}
  >
    {children}
  </button>
);
