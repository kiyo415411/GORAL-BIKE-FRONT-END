import {
  MapContainer,
  TileLayer,
  GeoJSON,
  Tooltip,
  Popup,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import MapData from './MapData.json';

function Index() {
  const center = [24, 121];

  return (
    <MapContainer
      center={center}
      zoom={8}
      style={{ width: '100%', height: '960px' }}
    >
      <TileLayer
        url="https://api.maptiler.com/maps/hybrid/256/{z}/{x}/{y}.jpg?key=YdAyuapGGLNDoknjhGzG"
        attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
      />
      {MapData.features.map((value, index) => {
        return (
          <>
            <GeoJSON
              key={value.properties.COUNTYCODE}
              data={value}
              style={() => ({
                color: 'white',
                weight: 2,
                opacity: 0.5,
                fillColor: 'black',
                fillOpacity: 0.5,
                dashArray: 3,
              })}
              eventHandlers={{
                mouseover: (e) => {
                  const layer = e.target;
                  layer.setStyle({
                    color: 'black',
                    weight: 2,
                    opacity: 0.7,
                    fillColor: 'white',
                    fillOpacity: 0.5,
                    dashArray: 3,
                  });
                },
                mouseout: (e) => {
                  const layer = e.target;
                  layer.setStyle({
                    color: 'white',
                    weight: 2,
                    opacity: 0.5,
                    fillColor: 'black',
                    fillOpacity: 0.5,
                    dashArray: 3,
                  });
                },
              }}
            >
              <Popup>{value.properties.COUNTYNAME}</Popup>
              <Tooltip>{value.properties.COUNTYENG}</Tooltip>
            </GeoJSON>
          </>
        );
      })}
    </MapContainer>
  );
}

export default Index;
