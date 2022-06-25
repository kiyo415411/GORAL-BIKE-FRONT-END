import { useMap, useMapEvents } from 'react-leaflet';
import { useEffect, useContext } from 'react';
import { MapDataValue } from './index';

// 地圖觸發事件
export default function LocationMarker() {
  const Data = useContext(MapDataValue);
  // 地圖上點擊，觸發click()useEffect 前往指定座標
  const MAP = useMap();

  useEffect(() => {
    // Data.position, Data.zoom, MAP 改變時飛往指定地點
    const flyToLocation = () => {
      MAP.flyTo(Data.position, Data.zoom);
    };
    flyToLocation();
  }, [Data.position, Data.zoom, MAP]);

  const map = useMapEvents({
    click() {
      // 依照地圖click觸發事件飛往指定地點
      Data.setZoom(8);
      Data.setShow(true);
      map.flyTo(Data.position, Data.zoom);
    },
  });

  return null;
}
