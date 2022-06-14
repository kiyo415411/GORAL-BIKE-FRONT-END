import { useMapEvents } from 'react-leaflet';
// 地圖觸發事件
function LocationMarker(props) {
  // 地圖上點擊，觸發click() 前往指定座標
  const map = useMapEvents({
    click() {
      props.setZoom(8);
      map.flyTo(props.position, props.zoom);
    },
  });

  return null;
}
export default LocationMarker;
