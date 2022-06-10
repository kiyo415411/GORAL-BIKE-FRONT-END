import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import MapData from './MapData.json';

function Index() {
  const center = [24, 121];
  const changeColor = (event) => {
    event.target.setStyle({
      color: 'black',
      fillColor: 'black',
    });
  };
  const onEachLocation = (location, layer) => {
    layer.options.fillColor = location.properties.color;
    const locationName = location.properties.COUNTYNAME;
    console.log(locationName);
    layer.bindPopup(`${locationName}`);

    layer.on({
      click: changeColor,
    });
  };

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
      <GeoJSON
        data={MapData.features}
        style={() => ({
          color: 'white',
          weight: 2,
          opacity: 0.7,
          fillColor: 'white',
          fillOpacity: 0.7,
          dashArray: 3,
        })}
        onEachFeature={onEachLocation}
      />
    </MapContainer>
  );
}

export default Index;
