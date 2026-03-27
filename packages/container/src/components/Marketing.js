import React, { useEffect, useRef } from 'react';
import { mountMarketing } from 'marketing/MarketingApp';

const Marketing = () => {
  const marketingRef = useRef(null);

  useEffect(() => {
    mountMarketing(marketingRef.current);
  }, []);

  return (
    <div ref={marketingRef}></div>
  );
}

export default Marketing;