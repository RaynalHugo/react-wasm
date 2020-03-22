import React from "react";

export const WithUps = ({ children }) => (
  <>
    <span role="img" aria-label={"Arrow up"}>
      ⬆️
    </span>
    {` ${children} `}
    <span role="img" aria-label={"Up!"}>
      🆙
    </span>
  </>
);
