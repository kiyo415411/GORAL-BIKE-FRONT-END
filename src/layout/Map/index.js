import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import MapData from './MapData.json';

const center = [24, 121];

function Index() {
  return (
    <MapContainer
      center={center}
      zoom={8}
      style={{ width: '1920px', height: '960px' }}
    >
      <TileLayer
        url="https://api.maptiler.com/maps/hybrid/256/{z}/{x}/{y}.jpg?key=YdAyuapGGLNDoknjhGzG"
        attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
      />
      <GeoJSON data={MapData} />
    </MapContainer>
  );
}

export default Index;
