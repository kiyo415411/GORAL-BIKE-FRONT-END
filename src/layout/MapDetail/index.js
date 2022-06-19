import DataAPI from '../Map/DataAPI';
import { useEffect, useState } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

function Index() {
  const getName = decodeURI(window.location.pathname.split('/').pop());
  const backImage = new URL('../../images/林道.jpg', import.meta.url);
  const [mapDetailData, setMapDetailData] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        // 需要等待資料pending，不然useState會是空值
        const originalData = await DataAPI();
        const result = originalData.filter(
          (value) => value['林道名稱'] === getName
        );
        setMapDetailData(result[0]);
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
          overflow: 'hidden',
          minWidth: '468px',
        }}
      >
        <article className="row justify-content-end">
          <section className="col-4 bg-black text-white bg-opacity-75 p-5 row flex-column gap-3">
            <section className="row justify-content-between align-items-end mt-5">
              <h1 className="m-0 col-6 display-6 fw-bolder">
                {mapDetailData['林道名稱']}
              </h1>
              <section className="col-md-6 d-flex justify-content-between">
                <span className="text-hightlight">{mapDetailData['林區']}</span>
                <span className="text-hightlight">{mapDetailData['縣市']}</span>
                <span className="text-hightlight">{mapDetailData['鄉鎮']}</span>
                <span className="text-hightlight">{mapDetailData['村里']}</span>
              </section>
            </section>
            <section className="mt-5 h-25 ">
              <span className="d-flex justify-content-between">
                <strong className="">起點</strong>
                <span className="">{mapDetailData['總長度']} km</span>
                <strong className="">終點</strong>
              </span>
              <svg height="10%" width="100%">
                <OverlayTrigger
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
              <span className="col-md-5 d-flex justify-content-between">
                <strong className="">車行長度</strong>　
                <span>{mapDetailData['車行長度']}</span>
                <span>ｋｍ</span>
              </span>
              <span className="col-md-5 d-flex justify-content-between offset-2">
                <strong className="">步行長度</strong>　　
                <span>{mapDetailData['步行長度']}</span>
                <span>ｋｍ</span>
              </span>
              <span className="col-md-5 d-flex justify-content-between">
                <strong className="">中斷長度</strong>　　
                <span>{mapDetailData['中斷長度']}</span>
                <span>ｋｍ</span>
              </span>
              <span className="col-md-5 d-flex justify-content-between offset-2">
                <strong className="">總長度</strong>　　
                <span>{mapDetailData['總長度']}</span>
                <span>ｋｍ</span>
              </span>
            </section>
            <section className="row justify-content-between">
              <span className="col-4 d-flex justify-content-start">
                <strong className="">水泥</strong>　
                <span>{mapDetailData['A.C鋪面']}</span>
                <span>
                  ｋｍ<sup>2</sup>
                </span>
              </span>
              <span className="col-4 d-flex justify-content-center">
                <strong className="">柏油</strong>　
                <span>{mapDetailData['P.C鋪面']}</span>
                <span>
                  ｋｍ<sup>2</sup>
                </span>
              </span>
              <span className="col-4 d-flex justify-content-end">
                <strong className="">碎石</strong>　　
                <span>{mapDetailData['碎石面或土石鋪面']}</span>
                <span>
                  ｋｍ<sup>2</sup>
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
