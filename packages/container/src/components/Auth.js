import React, { useEffect, useRef } from 'react';
import { mountAuth } from 'auth/AuthApp';
import { useHistory } from 'react-router-dom';

const Auth = () => {
  const authRef = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mountAuth(authRef.current, {
      initialPath: history.location.pathname,
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
    <div ref={authRef}></div>
  );
}

export default Auth;