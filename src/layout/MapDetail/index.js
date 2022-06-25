import DataAPI from '../Map/DataAPI';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { IMAGE_URL } from '../../utils/config';

function Index() {
  const getName = decodeURI(window.location.pathname.split('/').pop());
  const [mapDetailData, setMapDetailData] = useState([]);
  const [num, setNum] = useState(1);
  const backImage = new URL(`${IMAGE_URL}/81pic/${num}.jpg`, import.meta.url);

  const [pics] = useState([1, 2, 3]);

  const imgGroup = pics.map((value) => {
    const numMOD = (num % 81) + value;
    console.log(numMOD);
    const backImage = `${IMAGE_URL}/81pic/${numMOD}.jpg`;
    return (
      <li
        key={numMOD}
        className="col-4 overflow-hidden"
        style={{ height: '6.5rem' }}
      >
        <img key={numMOD} src={backImage} className="img-fluid" alt="" />
      </li>
    );
  });

  useEffect(() => {
    (async () => {
      try {
        // 需要等待資料pending，不然useState會是空值
        const originalData = await DataAPI();
        const result = originalData.filter(
          (value) => value['林道名稱'] === getName
        );
        setMapDetailData(result[0]);
        const getNum = result[0]['編號'];
        setNum(getNum);

        // 設定預設資料
      } catch (e) {
        throw new Error(e);
      }
    })();
  }, [getName]);

  const renderStartTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {mapDetailData['起點']}
    </Tooltip>
  );
  const renderEndTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {mapDetailData['終點']}
    </Tooltip>
  );

  console.log(mapDetailData);
  return (
    <>
      <main
        style={{
          backgroundImage: `url(${backImage})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          height: '960px',
          overflow: 'hidden',
          minWidth: '468px',
        }}
      >
        <article className="row justify-content-end h-100">
          <section
            className="bg-black opacity-75 d-lg-block d-none p-0 m-0"
            style={{ width: '80px' }}
          ></section>
          <section className="col-lg-4 m-0 p-0 bg-black text-white bg-opacity-75 p-3 row ">
            <section className="row align-items-center">
              <Link to="/map" className="btn btn-primary w-15 ms-auto">
                返回
              </Link>
              <section className="col-12 pe-0">
                <h1 className="m-0 col-12 display-5 fw-bolder">
                  {mapDetailData['林道名稱']}
                </h1>
                <section className="col-12 row mt-5">
                  <span className="col-6 text-white">
                    <span>林區：</span>
                    {mapDetailData['林區']}
                  </span>
                  <span className="col-6 text-white">
                    <span>縣市：</span>
                    {mapDetailData['縣市']}
                  </span>
                </section>
                <section className="col-12 row mt-3">
                  <span className="col-6 text-white">
                    <span>鄉鎮：</span>
                    {mapDetailData['鄉鎮']}
                  </span>
                  <span className="col-6 text-white">
                    <span>村里：</span>
                    {mapDetailData['村里']}
                  </span>
                </section>
              </section>
            </section>
            <section className="mt-5">
              <span className="d-flex justify-content-between">
                <strong className="">起點</strong>
                <span className="">{mapDetailData['總長度']} km</span>
                <strong className="">終點</strong>
              </span>
              <svg height="15px" width="100%">
                <OverlayTrigger
                  show={true}
                  placement="bottom"
                  trigger="click"
                  overlay={renderStartTooltip}
                >
                  <circle
                    cx="3%"
                    cy="50%"
                    r="5"
                    // stroke="black"
                    // stroke-width="3"
                    fill="white"
                  />
                </OverlayTrigger>

                <line
                  x1="8%"
                  y1="50%"
                  x2="92%"
                  y2="50%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="10"
                />
                <OverlayTrigger
                  show={true}
                  trigger="click"
                  placement="bottom"
                  overlay={renderEndTooltip}
                >
                  <circle
                    cx="97%"
                    cy="50%"
                    r="5"
                    // stroke="black"
                    // stroke-width="3"
                    fill="white"
                  />
                </OverlayTrigger>
              </svg>
            </section>
            <section className="row">
              <span className="col-12 col-md-5 d-flex justify-content-between">
                <strong className="">車行長度</strong>　
                <span>{mapDetailData['車行長度']}ｋｍ</span>
              </span>
              <span className="col-12 col-md-5 d-flex justify-content-between offset-md-2">
                <strong className="">步行長度</strong>　　
                <span>{mapDetailData['步行長度']}ｋｍ</span>
              </span>
              <span className="col-12 col-md-5 d-flex justify-content-between">
                <strong className="">中斷長度</strong>　　
                <span>{mapDetailData['中斷長度']}ｋｍ</span>
              </span>
              <span className="col-12 col-md-5 d-flex justify-content-between offset-md-2">
                <strong className="">總長度</strong>　　
                <span>{mapDetailData['總長度']}ｋｍ</span>
              </span>
            </section>
            <section className="d-flex justify-content-center align-items-center">
              <ul className="row justify-content-center list-unstyled">
                {imgGroup}
              </ul>
            </section>
            <section className="row justify-content-between">
              <span className="col-12 d-flex justify-content-between">
                <strong className="text-muted fw-bold">鋪面</strong>
                <span className="text-muted fw-bold">
                  面積(km<sup>2</sup>)
                </span>
              </span>
              <span className="col-12 d-flex justify-content-between">
                <strong className="">水泥</strong>
                <span>
                  {mapDetailData['A.C鋪面']}ｋｍ<sup>2</sup>
                </span>
              </span>
              <span className="col-12 d-flex justify-content-between">
                <strong className="">柏油</strong>
                <span>
                  {mapDetailData['P.C鋪面']}ｋｍ<sup>2</sup>
                </span>
              </span>
              <span className="col-12 d-flex justify-content-between">
                <strong className="">碎石</strong>　　
                <span>
                  {mapDetailData['碎石面或土石鋪面']}ｋｍ<sup>2</sup>
                </span>
              </span>
            </section>
          </section>
        </article>
      </main>
    </>
  );
}

export default Index;
