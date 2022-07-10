import { useState, useEffect } from 'react';

//使用方法
//1.import useWindowSize from '../../components/hooks/useWindowSize';
//2.conet screenWidth = useWindowSize();
//3.使用screenWidth判斷當前螢幕大小

export default function useWindowSize() {
  const [screenWidth, setScreenWidth] = useState(0);
  const resize = () => {
    // console.log(window.screen.width);
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
