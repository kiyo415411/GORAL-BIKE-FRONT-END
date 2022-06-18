import DataAPI from '../Map/DataAPI';
import { useEffect, useState } from 'react';

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

  console.log(mapDetailData);
  return (
    <>
      <main
        style={{
          backgroundImage: `url(${backImage})`,
          backgroundSize: 'cover',
          // backgroundRepeat: 'no-repeat',
          width: '100%',
          height: '100vh',
          overflow: 'hidden',
        }}
      >
        <article className="row justify-content-end h-100">
          <section className="col-4 bg-black text-white bg-opacity-75 p-5 d-flex flex-column gap-5">
            <section className="row justify-content-between align-items-end mt-5">
              <h1 className="m-0 col-6 display-5 fw-bolder">
                {mapDetailData['林道名稱']}
              </h1>
              <section className="col-md-6 d-flex justify-content-between">
                <span className="text-hightlight">{mapDetailData['林區']}</span>
                <span className="text-hightlight">{mapDetailData['縣市']}</span>
                <span className="text-hightlight">{mapDetailData['鄉鎮']}</span>
                <span className="text-hightlight">{mapDetailData['村里']}</span>
              </section>
            </section>
            <section className="row justify-content-between">
              <span className="col-md-6">
                <strong className="">起點　</strong>
                {mapDetailData['起點']}
              </span>
              <span className="col-md-6">
                <strong className="">終點</strong>　{mapDetailData['終點']}
              </span>
            </section>
            <section className="row">
              <span className="col-md-6">
                <strong className="">車行長度</strong>　
                {mapDetailData['車行長度']}　ｋｍ
              </span>
              <span className="col-md-6">
                <strong className="">步行長度</strong>　　
                {mapDetailData['步行長度']}　ｋｍ
              </span>
              <span className="col-md-6">
                <strong className="">中斷長度</strong>　　
                {mapDetailData['中斷長度']}　ｋｍ
              </span>
              <span className="col-md-6">
                <strong className="">總長度</strong>　　
                {mapDetailData['總長度']}　ｋｍ
              </span>
            </section>
            <section className="row">
              <span className="col-md-6">
                <strong className="">水泥鋪面</strong>　
                {mapDetailData['A.C鋪面']}　ｋｍ<sup>2</sup>
              </span>
              <span className="col-md-6">
                <strong className="">柏油鋪面</strong>　
                {mapDetailData['P.C鋪面']}　ｋｍ<sup>2</sup>
              </span>
              <span className="col-md-6">
                <strong className="">碎石面或土石鋪面</strong>　　
                {mapDetailData['碎石面或土石鋪面']}　ｋｍ
                <sup>2</sup>
              </span>
            </section>
          </section>
        </article>
      </main>
    </>
  );
}

export default Index;
