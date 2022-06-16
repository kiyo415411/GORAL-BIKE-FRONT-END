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
import filterDataAPI from './filterDataAPI';

function Index() {
  // 設定起始座標
  const [position, setPosition] = useState([24, 121]);
  // 設定地圖縮放大小
  const [zoom, setZoom] = useState(8);
  const [show, setShow] = useState(true);
  const [area, setArea] = useState('');
  const [mapURL] = useState(
    'https://api.maptiler.com/maps/hybrid/256/{z}/{x}/{y}.jpg?key=YdAyuapGGLNDoknjhGzG'
  );
  const attribution =
    '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>';
  // 檢查傳遞參數
  // setDataApi(FilterDataAPI);
  const dataApi = filterDataAPI(area);
  useEffect(() => {
    console.log(position);
    console.log(dataApi);
    console.log(zoom);
    console.log(area);
    setPosition(position);
    setZoom(zoom);
  }, [position, zoom, area, dataApi]);

  // 全部區域製圖
  // const fillMapData = MapData.features.map((value) => value);
  // // 特定區域製圖
  const filterMapData = MapData.features.filter((value) =>
    area ? value.properties.POSTION === area : value
  );

  return (
    // 世界地圖渲染
    <>
      <nav className="nav bg-dark">
        <select
          className="form-select w-25"
          aria-label="Default select example"
          id="area"
          defaultValue="Select "
          onChange={(e) => setArea(e.target.value)}
        >
          <option value="">全部</option>
          <option value="北部">北部</option>
          <option value="中部">中部</option>
          <option value="南部">南部</option>
          <option value="東部">東部</option>
        </select>
      </nav>
      {/* 世界地圖渲染 */}
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
              <TileLayer url={mapURL} attribution={attribution} />
              {/* 繪製地區界線 */}
              {show &&
                filterMapData.map((value, index) => {
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
                setShow={setShow}
              ></LocationMarker>
              {/* 連接政府API渲染81條MARK座標 */}
              <Mark
                setPosition={setPosition}
                setZoom={setZoom}
                zoom={zoom}
                setShow={setShow}
                dataApi={dataApi}
              />
              ;
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
              setShow={setShow}
              dataApi={dataApi}
            />
          </article>
        </section>
      </main>
    </>
  );
}

export default Index;
