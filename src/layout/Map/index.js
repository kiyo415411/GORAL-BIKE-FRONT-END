import {
  MapContainer,
  TileLayer,
  GeoJSON,
  // Tooltip,
  // Popup,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import MapData from './MapData.json';
import Mark from './Marks';
import LocationMarker from './LocationMarker';
import { useState, useEffect } from 'react';

function Index() {
  const [position, setPosition] = useState([24, 121]);
  const [zoom, setZoom] = useState(8);
  const [Map, setMap] = useState(null);

  useEffect(() => {
    console.log(position);
    console.log(zoom);
    console.log(Map);
  }, [position, zoom, Map]);

  return (
    <MapContainer
      center={position}
      zoom={zoom}
      style={{ width: '100%', height: '960px' }}
      scrollWheelZoom={true}
      whenCreated={setMap}
    >
      <TileLayer
        url="https://api.maptiler.com/maps/hybrid/256/{z}/{x}/{y}.jpg?key=YdAyuapGGLNDoknjhGzG"
        attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
      />
      {MapData.features.map((value, index) => {
        return (
          <div key={value.properties.COUNTYCODE}>
            <GeoJSON
              data={value}
              style={() => ({
                color: 'white',
                weight: 2,
                opacity: 0.5,
                fillColor: 'black',
                fillOpacity: 0.5,
                dashArray: 3,
              })}
              // eventHandlers={{
              //   mouseover: (e) => {
              //     const layer = e.target;
              //     layer.setStyle({
              //       color: 'black',
              //       weight: 2,
              //       opacity: 0.7,
              //       fillColor: 'white',
              //       fillOpacity: 0.5,
              //       dashArray: 3,
              //     });
              //   },
              //   mouseout: (e) => {
              //     const layer = e.target;
              //     layer.setStyle({
              //       color: 'white',
              //       weight: 2,
              //       opacity: 0.5,
              //       fillColor: 'black',
              //       fillOpacity: 0.5,
              //       dashArray: 3,
              //     });
              //   },
              // }}
            >
              {/* <Popup>{value.properties.COUNTYNAME}</Popup>
              <Tooltip>{value.properties.COUNTYENG}</Tooltip> */}
            </GeoJSON>
          </div>
        );
      })}
      <LocationMarker
        position={position}
        zoom={zoom}
        setZoom={setZoom}
      ></LocationMarker>
      <Mark setPosition={setPosition} setZoom={setZoom} zoom={zoom} />;
    </MapContainer>
  );
}

export default Index;
