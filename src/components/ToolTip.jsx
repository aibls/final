import React, { useState } from "react";
import "../tooltip.css";

function Tooltip({ text, tooltipText }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <span
      className="tooltip-container"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {text}
      {isVisible && <div className="tooltip-box">{tooltipText}</div>}
    </span>
  );
}

export default Tooltip;
