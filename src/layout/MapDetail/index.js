import DataAPI from '../Map/DataAPI';
import { useEffect, useState } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { IMAGE_URL } from '../../utils/config';
function Index() {
  const getName = decodeURI(window.location.pathname.split('/').pop());
  const [mapDetailData, setMapDetailData] = useState([]);
  const [num, setNum] = useState(1);
  const backImage = new URL(`${IMAGE_URL}/81pic/${num}.jpg`, import.meta.url);

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
          <section className="col-lg-4 bg-black text-white bg-opacity-75 p-3 row gap-3">
            <section className="row justify-content-between align-items-end mt-5">
              <h1 className="m-0 col-5 col-xl-6 display-6 fw-bolder">
                {mapDetailData['林道名稱']}
              </h1>
              <section className="col-7 col-xl-6 d-flex justify-content-around ">
                <span className="text-hightlight">{mapDetailData['林區']}</span>
                <span className="text-hightlight">{mapDetailData['縣市']}</span>
                <span className="text-hightlight">{mapDetailData['鄉鎮']}</span>
                <span className="text-hightlight">{mapDetailData['村里']}</span>
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
                  stroke-width="2"
                  stroke-dasharray="10"
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
            <section className="row justify-content-between">
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
