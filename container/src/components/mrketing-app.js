import React, { useEffect, useRef } from "react";
import { mount as mountMarketingApp } from "marketing/MarketingApp";

function MarketingApp() {
  const ref = useRef(null);
  useEffect(() => {
    mountMarketingApp(ref.current);
  }, []);

  return <div ref={ref}></div>;
}

export default MarketingApp;
