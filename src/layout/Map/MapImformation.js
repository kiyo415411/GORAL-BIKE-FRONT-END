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
              <div className="col-md-4 overflow-hidden">
                <img
                  src={logo}
                  className=""
                  style={{ height: '100%', width: '100%', objectFit: 'cover' }}
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="d-flex gap-3 mx-3 my-2">
                  <h5 className="card-title">{value['林道名稱']}</h5>
                  <span className="card-text">{value['縣市']}</span>
                  <span className="card-text">{value['林區']}</span>
                </div>
                <div className="row justify-content-between align-items-center my-2">
                  <p className="col-4 card-text mx-3">
                    {value['總長度'] + '公里'}
                  </p>
                  <div className="col-6 my-2 d-flex justify-content-around">
                    <button
                      className="btn btn-outline-primary text-primary rounded-pill border-2"
                      onClick={(e) => {
                        const position = [dataAxis[1], dataAxis[0]];
                        props.setPosition(position);
                        props.setZoom(12);
                      }}
                    >
                      前往座標
                    </button>
                    <button
                      className="btn btn-primary text-white rounded-pill border-2"
                      onClick={(e) => {}}
                    >
                      詳細資訊
                    </button>
                  </div>
                </div>
                <div>
                  <div className="card-body fs-6 gap-3 d-flex py-0">
                    {Number(value['碎石面或土石鋪面']) === 0 ? (
                      ''
                    ) : (
                      <span className="badge bg-warning  rounded-pill">
                        {'碎石 ' + value['碎石面或土石鋪面'] + ' 公里'}
                      </span>
                    )}

                    {Number(value['A.C鋪面']) === 0 ? (
                      ''
                    ) : (
                      <span className="badge bg-danger  rounded-pill">
                        {'柏油 ' + value['A.C鋪面'] + ' 公里'}
                      </span>
                    )}
                    {Number(value['P.C鋪面']) === 0 ? (
                      ''
                    ) : (
                      <span className="badge bg-success  rounded-pill">
                        {'水泥 ' + value['P.C鋪面'] + ' 公里'}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
export default MapImformation;
