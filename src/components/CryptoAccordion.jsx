import React, { useState } from "react";
import Tooltip from "./ToolTip";

function CryptoAccordion({ crypto }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <h3 onClick={() => setIsOpen(!isOpen)} style={{ cursor: "pointer" }}>
        {crypto.name} ({crypto.symbol}) {isOpen ? "-" : "+"}
      </h3>
      {isOpen && (
        <div>
          <p>Symbol: {crypto.symbol}</p>
          <p>Price USD: ${crypto.price_usd}</p>
          <p>Price BTC: {crypto.price_btc}</p>
          <p>
            Market Cap USD: {crypto.market_cap_usd}{" "}
            <Tooltip
              text="ℹ"
              tooltipText="The market capitalization of a cryptocurrency is calculated by multiplying the number of coins in circulation by the current price."
            />
          </p>
          <p
            style={{
              color: crypto.percent_change_24h >= 0 ? "green" : "red",
            }}
          >
            Percent Change 24H: {crypto.percent_change_24h}%
          </p>
        </div>
      )}
    </div>
  );
}

export default CryptoAccordion;
