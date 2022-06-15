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
import MapImformation from './MapImformation';

function Index() {
  // 設定起始座標
  const [position, setPosition] = useState([24, 121]);
  // 設定地圖縮放大小
  const [zoom, setZoom] = useState(8);
  // 檢查傳遞參數

  useEffect(() => {
    console.log(position);
    console.log(zoom);
    setPosition(position);
    setZoom(zoom);
  }, [position, zoom]);

  // 全部區域製圖
  const fillMapData = MapData.features.map((value) => value);
  // 特定區域製圖
  // const filterMapData = MapData.features.filter(
  //   (value) => value.properties.POSTION === '東部'
  // );

  return (
    // 世界地圖渲染
    <main className="container-fluid m-0 p-0 ">
      <section className="row p-0 m-0 ">
        <map className="col-8 p-0 m-0">
          <MapContainer
            // 座標中心點

            center={position}
            // 縮放大小
            zoom={zoom}
            // 地圖樣式
            style={{ width: '100%', height: '960px' }}
            // 滑鼠滾輪捲動設定
            scrollWheelZoom={false}
          >
            {/* 地圖樣式覆蓋 */}
            <TileLayer
              url="https://api.maptiler.com/maps/hybrid/256/{z}/{x}/{y}.jpg?key=YdAyuapGGLNDoknjhGzG"
              attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
            />
            {/* 繪製地區界線 */}
            {fillMapData.map((value, index) => {
              return (
                <div key={value.properties.COUNTYCODE}>
                  {/* 引用GeoJSON繪製 */}
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
                  ></GeoJSON>
                </div>
              );
            })}
            {/* 點擊地圖FlyTO觸發事件 */}
            <LocationMarker
              position={position}
              zoom={zoom}
              setZoom={setZoom}
            ></LocationMarker>
            {/* 連接政府API渲染81條MARK座標 */}
            <Mark setPosition={setPosition} setZoom={setZoom} zoom={zoom} />;
          </MapContainer>
        </map>
        <article
          className="bg-primary text-dark col-4 m-0 p-0 overflow-auto"
          style={{ height: '960px' }}
        >
          <MapImformation
            setPosition={setPosition}
            setZoom={setZoom}
            zoom={zoom}
          />
        </article>
      </section>
    </main>
  );
}

export default Index;
