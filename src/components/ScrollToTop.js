import React, { useEffect } from 'react';
import { useLocation } from 'react-router';

// import { withRouter } from '../utils/withRouter';

// 頁面切換時要用捲軸讓頁面回到最上方
function ScrollToTop({ children }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children;
}

export default ScrollToTop;
