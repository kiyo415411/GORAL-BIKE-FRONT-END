import { useMap, useMapEvents } from 'react-leaflet';
import { useEffect } from 'react';
// 地圖觸發事件
function LocationMarker(props) {
  // 地圖上點擊，觸發click()useEffect 前往指定座標
  const MAP = useMap();

  useEffect(() => {
    const flyToLocation = () => {
      MAP.flyTo(props.position, props.zoom);
    };
    flyToLocation();
  }, [props.position, props.zoom, MAP]);

  const map = useMapEvents({
    click() {
      props.setZoom(8);
      map.flyTo(props.position, props.zoom);
    },
  });

  return null;
}
export default LocationMarker;
