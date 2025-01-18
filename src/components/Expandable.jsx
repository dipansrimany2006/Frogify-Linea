"use client";
import React from "react";

const Expandable = ({ children, maxChars = 200 }) => {
  let [expanded, setExpanded] = React.useState(true);
  if (children.length <= maxChars) return <p>{children}</p>;
  let text = children.substring(0, maxChars);
  return (
    <div>
      <p>{text}...</p>
    </div>
  );
};

export default Expandable;
