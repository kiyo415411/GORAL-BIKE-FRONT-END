import { useMap, useMapEvents } from 'react-leaflet';
import { useEffect } from 'react';
// 地圖觸發事件
function LocationMarker(props) {
  // 地圖上點擊，觸發click()useEffect 前往指定座標
  const MAP = useMap();

  useEffect(() => {
    // props.position, props.zoom, MAP 改變時飛往指定地點
    const flyToLocation = () => {
      MAP.flyTo(props.position, props.zoom);
    };
    flyToLocation();
  }, [props.position, props.zoom, MAP]);

  const map = useMapEvents({
    click() {
      // 依照地圖click觸發事件飛往指定地點
      props.setZoom(8);
      props.setShow(true);
      map.flyTo(props.position, props.zoom);
    },
  });

  return null;
}
export default LocationMarker;
