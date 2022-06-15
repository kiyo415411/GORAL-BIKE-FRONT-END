import axios from 'axios';
import { useState, useEffect } from 'react';
import logo from '../../images/CourseImg1.jpg';
import proj4 from 'proj4';

function MapImformation(props) {
  const [response, setResponse] = useState([]);

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
      {response.map((value, index) => {
        let dataAxis = proj4(EPSG3826, EPSG4326, [
          Number(value['起點X坐標']),
          Number(value['起點Y坐標']),
        ]);
        return (
          <div key={value['編號']} className="card m-0 p-0 rounded-0">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={logo} className="img-fluid" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{value['林道名稱']}</h5>
                  <p className="card-text">{value['縣市']}</p>
                  <p className="card-text">
                    <small className="text-muted">{value['林區']}</small>
                  </p>
                  <p className="card-text">{value['總長度'] + '公里'}</p>
                  <p className="card-text">
                    {'碎石面或土石鋪面 ：' +
                      value['碎石面或土石鋪面'] +
                      ' 公里'}
                  </p>
                  <p className="card-text">
                    {'瀝青混凝土鋪面 ：' + value['A.C鋪面'] + ' 公里'}
                  </p>
                  <p className="card-text">
                    {'水泥混凝土鋪面 ：' + value['P.C鋪面'] + ' 公里'}
                  </p>
                </div>
                <button
                  className="btn btn-outline-primary text-primary fs-6 rounded-pill"
                  onClick={(e) => {
                    const position = [dataAxis[1], dataAxis[0]];
                    props.setPosition(position);
                    props.setZoom(12);
                  }}
                >
                  前往指定座標
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
export default MapImformation;
