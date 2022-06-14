import { useMapEvents } from 'react-leaflet';

function LocationMarker(props) {
  const map = useMapEvents({
    click() {
      props.setZoom(8);
      map.flyTo(props.position, props.zoom);
    },
  });

  return null;
}
export default LocationMarker;
