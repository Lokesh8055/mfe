import React, { useEffect, useRef } from 'react';
import { mountMarketing } from 'marketing/MarketingApp';
import { useHistory } from 'react-router-dom';

const Marketing = () => {
  const marketingRef = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mountMarketing(marketingRef.current, {
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location;
        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      }
    });

    history.listen(onParentNavigate);
  }, []);

  return (
    <div ref={marketingRef}></div>
  );
}

export default Marketing;