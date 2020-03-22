import React from "react";

export const Card = ({ children }) => (
  <div
    style={{
      margin: "1em",
      backgroundColor: "white",
      borderRadius: "1em",
      color: "#282c34",
      padding: "1em",
    }}
  >
    {children}
  </div>
);
