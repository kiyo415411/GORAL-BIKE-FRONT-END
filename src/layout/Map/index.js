import { MapContainer, Polygon, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import MapData from './MapData.json';
import { clearConfigCache } from 'prettier';

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

      {MapData.features.map((state) => {
        console.log(state.geometry.coordinates[0]);

        const coordinates = state.geometry.coordinates[0].map((item) => [
          item[1],
          item[0],
        ]);

        return (
          <Polygon
            pathOptions={{
              fillColor: '#000',
              fillOpacity: 0.7,
              weight: 2,
              opacity: 1,
              dashArray: 3,
              color: 'white',
            }}
            positions={coordinates}
          />
        );
      })}
    </MapContainer>
  );
}

export default Index;
