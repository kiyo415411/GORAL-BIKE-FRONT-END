import { useState, useEffect } from 'react';

export default function useWindowSize() {
  const [screenWidth, setScreenWidth] = useState(0);
  const resize = () => {
    console.log(window.screen.width);
    setScreenWidth(window.screen.width);
  };

  useEffect(() => {
    resize();

    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
    };
    //resize();
  }, []);

  return screenWidth;
}
