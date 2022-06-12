import proj4 from 'proj4';
import axios from 'axios';
import { Marker, Popup, Tooltip } from 'react-leaflet';
import { useState, useEffect } from 'react';
import L from 'leaflet';

function GetIcon(_iconSize) {
  return L.icon({
    iconUrl: require('../../images/Logo.png'),
    iconSize: [_iconSize * 4.5, _iconSize],
  });
}

function Mark() {
  //defs
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
  //EPSG
  let EPSG3826 = new proj4.Proj('EPSG:3826'); //TWD97 TM2(121分帶)
  let EPSG4326 = new proj4.Proj('EPSG:4326'); //WGS84

  const [response, setResponse] = useState([]);

  useEffect(() => {
    const data = async () => {
      const data = await axios.get(
        'https://data.coa.gov.tw/Service/OpenData/DataFileService.aspx?UnitId=151'
      );
      setResponse(data.data);
    };
    data();
  }, []);

  return (
    <>
      {response.map((value, index) => {
        // console.log(value['起點X坐標'], value['起點Y坐標']);
        let dataAxis = proj4(EPSG3826, EPSG4326, [
          Number(value['起點X坐標']),
          Number(value['起點Y坐標']),
        ]);
        return (
          <div key={value['編號']}>
            <Marker position={[dataAxis[1], dataAxis[0]]} icon={GetIcon(30)}>
              <Popup>{value['林道名稱']}</Popup>
              <Tooltip>{value['林道名稱']}</Tooltip>
            </Marker>
          </div>
        );
      })}
    </>
  );
}

export default Mark;
