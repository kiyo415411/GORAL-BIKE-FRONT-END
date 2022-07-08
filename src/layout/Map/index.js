import {
  MapContainer,
  TileLayer,
  GeoJSON,
  // Tooltip,
  // Popup,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import MapData from '../../components/MapData.json';
import Mark from '../../components/Marks';
import LocationMarker from '../../components/LocationMarker';
import { useState, useEffect, useRef, createContext } from 'react';
import MapImformation from '../../pages/MapImformation';
import DataAPI from '../../components/DataAPI';
import useWindowSize from '../../components/hooks/useWindowSize';
import MapNav from '../../components/MapNav';
import LoadingPage from '../../components/Loading/LoadingPage';

export const MapDataValue = createContext();
export default function Index() {
  const [isLoading, setIsLoading] = useState(true); //讀取畫面

  // 抓取螢幕寬度
  const screenWidth = useWindowSize();
  let rwd = screenWidth < 768;
  // 設定起始座標
  const [position, setPosition] = useState([24, 121]);
  // 設定地圖縮放大小
  const [zoom, setZoom] = useState(8);
  // 取得地圖名稱
  const [getName, setGetName] = useState('');
  // 是否顯示
  const [show, setShow] = useState(true);
  // 地區區域 ex.北部
  const [area, setArea] = useState('');
  // 縣市名稱 ex.台北市
  const [city, setCity] = useState('');
  // 取得林道API
  const [dataApi, setDataApi] = useState([]);
  // 篩選政府林道API資料(依地區)
  const [filterDataApi, setFilterDataApi] = useState([]);
  // 特定區域製圖，使用GeoJSON繪圖
  const [origianlMapData] = useState(MapData.features);
  // 篩選特定區域製圖，使用GeoJSON繪圖
  const [filterMapData, setFilterMapData] = useState(MapData.features);
  // 地圖樣式api選擇
  const [mapName, setMapName] = useState(
    'https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=YdAyuapGGLNDoknjhGzG'
  );
  // 切換TileLayer地圖樣式，因為TileLayer無法自行重新渲染，需要使用useRef來切換
  const layerRef = useRef(null);
  // TileLayer版權顯示
  const attribution =
    '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>';
  const markerRef = useRef([]);
  // 設定預設資料及篩選資料
  useEffect(() => {
    (async () => {
      try {
        // 需要等待資料pending，不然useState會是空值
        const getData = await DataAPI();
        // 設定預設資料
        setDataApi(getData);
        // 設定篩選資料
        setFilterDataApi(getData);
        setTimeout(() => {
          setIsLoading(false);
        }, 2500);
      } catch (e) {
        throw new Error(e);
      }
    })();
  }, []);

  const VALUE = {
    markerRef,
    position,
    getName,
    setGetName,
    setPosition,
    zoom,
    setZoom,
    area,
    setArea,
    city,
    setCity,
    mapName,
    setMapName,
    dataApi,
    setShow,
    setDataApi,
    filterDataApi,
    setFilterDataApi,
    origianlMapData,
    filterMapData,
    setFilterMapData,
  };

  useEffect(() => {
    // 切換TileLayer的current p.s.mapName更動時改變
    if (layerRef.current) {
      layerRef.current.setUrl(mapName);
    }
  }, [mapName]);

  return (
    // 世界地圖渲染
    <>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <MapDataValue.Provider value={VALUE}>
          <MapNav />
          {/* 世界地圖渲染 */}
          <main className="container-fluid m-0 p-0">
            <section className="row p-0 m-0 ">
              <map className="col-md-8 p-0 m-0 order-1 order-md-0">
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
                  <TileLayer
                    ref={layerRef}
                    attribution={attribution}
                    url={mapName}
                  />
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
                  <LocationMarker />
                  {/* 連接政府API渲染81條MARK座標 */}
                  <Mark />;
                </MapContainer>
              </map>
              <article
                className="bg-primary text-dark col-md-4 m-0 p-0 overflow-auto "
                style={{ height: rwd ? '280px' : '960px' }}
              >
                {filterDataApi.length !== 0 ? (
                  <MapImformation />
                ) : (
                  <h1 className="text-center text-white">沒有林道資料</h1>
                )}
              </article>
            </section>
          </main>
        </MapDataValue.Provider>
      )}
    </>
  );
}
