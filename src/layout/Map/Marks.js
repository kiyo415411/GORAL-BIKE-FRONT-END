import proj4 from 'proj4';
import axios from 'axios';
import { Marker, Popup, Tooltip, useMap } from 'react-leaflet';
import { useState, useEffect } from 'react';
import L from 'leaflet';

// MARKS ICONS圖案設定
function GetIcon(_iconSize) {
  return L.icon({
    iconUrl: require('../../images/Logo.png'),
    iconSize: [_iconSize * 4.5, _iconSize],
  });
}

function Mark(props) {
  //轉換政府API座標成經緯度
  //PROJ4 定義台灣EFSG經緯度預設轉換位置
  proj4.defs([
    [
      'EPSG:4326',
      '+title=WGS84 (long/lat) +proj=longlat +ellps=WGS84 +datum=WGS84 +units=degrees',
    ],
    [
      'EPSG:3826',
      '+title=TWD97 TM2 +proj=tmerc +lat_0=0 +lon_0=121 +k=0.9999 +x_0=250000 +y_0=0 +ellps=GRS80 +units=m +no_defs',
    ],
  ]);
  //定義EPSG
  const EPSG3826 = new proj4.Proj('EPSG:3826'); //TWD97 TM2(121分帶)
  const EPSG4326 = new proj4.Proj('EPSG:4326'); //WGS84
  const [response, setResponse] = useState([]);
  const Maps = useMap();

  useEffect(() => {
    const data = async () => {
      // 連接政府81條林道 API資料
      const data = await axios.get(
        'https://data.coa.gov.tw/Service/OpenData/DataFileService.aspx?UnitId=151'
      );
      // 設定資料 setResponse->response
      setResponse(data.data);
    };
    data();
  }, []);

  return (
    <>
      {/* 渲染所有座標位置，並定義各個MARKS內容 */}
      {response.map((value, index) => {
        // console.log(value['起點X坐標'], value['起點Y坐標']);
        let dataAxis = proj4(EPSG3826, EPSG4326, [
          Number(value['起點X坐標']),
          Number(value['起點Y坐標']),
        ]);
        return (
          <div key={value['編號']}>
            <Marker
              position={[dataAxis[1], dataAxis[0]]}
              icon={GetIcon(30)}
              eventHandlers={{
                click(e) {
                  // 轉換座標值賦予
                  const position = [e.target._latlng.lat, e.target._latlng.lng];
                  // 父層回傳值設定
                  props.setPosition(position);
                  props.setZoom(12);
                  // 前往指定座標位置
                  // Maps.flyTo([lat,lng],zoom)
                  Maps.flyTo(position, props.zoom);
                },
              }}
            >
              {/* click 顯示物件 */}
              <Popup>{value['林道名稱']}</Popup>
              {/* hover 顯示物件 */}
              <Tooltip>{value['林道名稱']}</Tooltip>
            </Marker>
          </div>
        );
      })}
    </>
  );
}

export default Mark;
