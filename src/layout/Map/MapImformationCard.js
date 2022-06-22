import { useContext } from 'react';
import Twd97toWsg84 from './Twd97toWsg84';
import { MapDataValue } from './index';
import { Link } from 'react-router-dom';
import { IMAGE_URL } from '../../utils/config';

export default function MapImformation(props) {
  const Data = useContext(MapDataValue);
  const { value } = props;
  const picURL = `/81pic/${value['編號']}.jpg`;
  console.log(IMAGE_URL);
  let dataAxis = Twd97toWsg84(value['起點X坐標'], value['起點Y坐標']);
  return (
    <div className="card m-0 p-0 rounded-0">
      <div className="row g-0">
        <div className="col-md-4 overflow-hidden">
          <img
            src={`${IMAGE_URL}${picURL}`}
            className=""
            style={{ height: '9rem', width: '100%', objectFit: 'cover' }}
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
            <p className="col-4 card-text mx-3 my-auto">
              <span>總長度</span>
              {value['總長度'] + '公里'}
            </p>
            <div className="col-6 my-2 d-flex justify-content-around">
              <button
                className="btn btn-outline-primary text-primary rounded-pill border-2"
                onClick={(e) => {
                  const position = [dataAxis[1], dataAxis[0]];
                  Data.setPosition(position);
                  Data.setZoom(15);
                  Data.setShow(false);
                }}
              >
                前往座標
              </button>
              <Link
                to={`mapDetail/${value['林道名稱']}`}
                className="btn btn-primary text-white rounded-pill border-2"
              >
                詳細資訊
              </Link>
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
}
