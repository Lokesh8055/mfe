import React, { useEffect, useRef } from 'react';
import { mountMarketing } from 'marketing/MarketingApp';

const App = () => {
  const marketingRef = useRef(null);

  useEffect(() => {
    mountMarketing(marketingRef.current);
  }, []);

  return (
    <>
      <h1>Hello Container!</h1>
      <div ref={marketingRef}></div>
    </>
  );
}

export default App;