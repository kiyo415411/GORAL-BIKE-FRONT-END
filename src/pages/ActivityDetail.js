import { BsHeart, BsFillCaretRightFill } from 'react-icons/bs';
import TopSection from '../components/TopSection';
import HotSection from '../components/HotSection';
export default function ActivityDetail() {
  return (
    <>
      <TopSection
        title="知本林道消暑秘境"
        bg={require('../images/activity/ActivityBanner.jpg')}
      />
      <div className="container my-5">
        {/*---------------------------------- 課程介紹 */}
        <div className="row justify-content-between">
          {/*---------------------------------- 介紹 */}
          <div className="col-8">
            {/*---------------------------------- 標籤 */}
            <div className="d-flex justify-content-between align-items-center mb-5">
              <ul className="list-unstyled d-flex gap-4 m-0">
                <li>
                  <div className="badge bg-badge-red rounded-pill px-3">
                    報名開放中
                  </div>
                </li>
                <li>
                  <div className="badge bg-badge-yellow rounded-pill px-3">
                    中部
                  </div>
                </li>
                <li>
                  <div className="text-highlight">
                    <BsHeart />
                  </div>
                </li>
              </ul>
            </div>
            {/*---------------------------------- 標題 */}
            <h3 className="card-title text-primary m-0 ms-3">
              知本林道消暑秘境
            </h3>
            <div className="card p-3 my-4 shadow border-0">
              <p className="fs-5 m-0 ms-2 text-content">2022-07-16</p>
              <ul className="my-0 ms-2">
                <li>報名開始日期：2022-06-10</li>
                <li>報名結束日期：2022-07-10 </li>
                <li>騎乘路線 : 新竹縣羅山林道北線&南線</li>
                <li>適合對象：登山車新手、想學習基礎技巧的入門登山車騎乘者</li>
                <li>報名制度：採報名收費制，每次上限6人，5人成團。</li>
                <li>
                  收費標準：600元/人，購買HHSPORT代理登山系列產品享有課程加購優惠價。
                </li>
              </ul>
            </div>
            <div>
              <p className="fs-4 text-hightlight">活動資訊</p>
              <p className="fs-5 text-content">行程內容</p>
              <ul className="text-content">
                <li>萊爾富竹東上坪店休息WC</li>
                <li>羅山林道口取車，行前說明。 </li>
                <li>羅山林道南線騎乘（6K）、羅山林道北線騎乘（20K）。</li>
                <li>野炊用餐、自由騎乘。</li>
                <li>回程資訊:返回出發地點</li>
              </ul>
            </div>
            <div className="d-flex my-5">
              <figure className="course-detail-figure">
                <img
                  src={require('../images/course/CourseImg2.jpg')}
                  className="object-fit"
                  alt="img1"
                />
              </figure>
              <figure className="course-detail-figure">
                <img
                  src={require('../images/course/CourseImg3.jpg')}
                  className="object-fit"
                  alt="img2"
                />
              </figure>
            </div>
            <div className="ms-3 text-content">
              <h5>費用說明</h5>
              <ul>
                <li>豪華九人座來回車資及司機服務費及領騎人員服務費。</li>
                <li>提供越野登山車請於備註欄註明身高，以便安排單車。</li>
                <li>林道午餐：BBQ</li>
                <li>全程補給品與飲料</li>
                <li>新台幣200萬旅遊平安險及20萬意外醫療險</li>
                <li>贈品 : 單車專用水壺1個、TBA騎乘認證書1份</li>
              </ul>
            </div>
            <div className="d-flex my-5">
              <figure className="course-detail-figure">
                <img
                  src={require('../images/course/CourseImg2.jpg')}
                  className="object-fit"
                  alt="img1"
                />
              </figure>
              <figure className="course-detail-figure">
                <img
                  src={require('../images/course/CourseImg3.jpg')}
                  className="object-fit"
                  alt="img2"
                />
              </figure>
            </div>
            <div className="ms-3 text-content">
              <h5>注意事項</h5>
              <ul className="list-unstyled">
                <li>
                  (1) 本行程為團騎方式進行，配置一位領騎員，請遵守領騎員指引。
                </li>
                <li>
                  (2)
                  全程路線為林道，道路狀況較為崎嶇，請注意自身安全與騎乘狀況。
                </li>
                <li>(3) 全程提供簡易維修支援。</li>
                <li>
                  (4)
                  不建議有以下狀況或其他不宜受到過度刺激之車友參加本次項目：高血壓、心臟病等。
                </li>
                <li>(5) 如遇身體不適無法繼續騎乘者，請立刻與服務人員聯絡。</li>
                <li>(6) 參加之車友，不論任何因素放棄，請與主辦單位聯絡。</li>
                <li>
                  (7)
                  如因天氣或道路維修等不可抗力因素，主辦得臨時調整行程內容或取消延期等緊急措施。
                </li>
                <li>
                  (8) 本行程均為參加者投保旅遊平安險（200萬&20萬意外醫療）。
                </li>
                <li>
                  (9)
                  報名所填寫之個人資料均屬實，若有錯誤一切相關責任將由提供人自行承擔。
                </li>
                <li>
                  (10)
                  如因天氣或道路維修等不可抗力因素，本行程得臨時調整行程內容或取消延期等緊急措施。
                </li>
                <li>
                  (11)
                  參加者如因個人因素欲取消報名，則依據國內定型化旅遊契約處理。
                </li>
                <li>(12) 如有未盡事宜，另行公布通知。</li>
              </ul>
            </div>
            <iframe
              title="a"
              src="https://www.google.com/maps/d/embed?mid=1C8lXmsekyHf0aJoric5nwf6ubBg&ehbc=2E312F"
              width="640"
              height="480"
              alt=""
            ></iframe>
          </div>
          {/*---------------------------------- 報名箱 */}
          <div className="col-3">
            <div className="sticky-top d-grid">
              <a
                href="#/"
                className="text-highlight mb-5 d-flex align-items-center justify-content-end"
              >
                返回課程列表
                <BsFillCaretRightFill />
              </a>
              <div className="card p-3 shadow border-0 rounded-0 ">
                <p className="fs-5 m-0 text-primary">知本林道消暑秘境</p>
                <ul className="list-unstyled d-flex gap-2 m-0">
                  <li>
                    <div className="badge bg-badge-yellow rounded-pill px-3">
                      入門
                    </div>
                  </li>
                  <li>
                    <div className="badge bg-badge-red rounded-pill px-3">
                      報名開放中
                    </div>
                  </li>
                </ul>
                <div className="text-content d-grid gap-1 my-3">
                  <p className="m-0">2022-07-16</p>
                  <p className="m-0">$22,000</p>
                  <p className="m-0">報名人數：30</p>
                </div>
                <button className="btn btn-primary rounded-0">立即報名</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*---------------------------------- 推薦活動 */}
      <HotSection title="推薦活動" />
    </>
  );
}
