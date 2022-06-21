import { BsFillCaretRightFill } from 'react-icons/bs';
import TopSection from '../components/TopSection';
import HotSection from '../components/HotSection';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // 拿前端網址變數
import { API_URL, IMAGE_URL } from '../utils/config';
import { Link } from 'react-router-dom';
import Like from '../components/Aside/Like';

export default function CourseDetail() {
  const [data, setData] = useState([]);
  const { courseId } = useParams(); // 從網址上拿變數
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    let getDate = async () => {
      let response = await axios.get(`${API_URL}/course/${courseId}`);
      setData(response.data.data);
    };
    getDate();
  }, [courseId]);

  return (
    <>
      {data.map((item) => {
        return (
          <>
            <TopSection
              title={item.course_title}
              bg={`${IMAGE_URL}/course/${item.course_pictures}`}
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
                          {item.course_status_name}
                        </div>
                      </li>
                      <li>
                        <div className="badge bg-badge-lightblue rounded-pill px-3">
                          {item.course_category_name}
                        </div>
                      </li>
                      <li>
                        <div className="text-highlight">
                          <Like liked={liked} setLiked={setLiked} />
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/*---------------------------------- 標題 */}
                  <h3 className="card-title text-primary m-0 ms-3">
                    {item.course_title}
                  </h3>
                  <div className="card p-3 my-4 shadow border-0">
                    <p className="fs-5 m-0 ms-2 text-content">2022-07-16</p>
                    <ul className="list-unstyled my-0 ms-2">
                      <li>集合時間：早上8點半</li>
                      <li>練習地點： 東東單車公園 Don Don Bike Park。</li>
                      <li>車種限制：XC以上，至少要有避震。</li>
                      <li>
                        裝備規定：必須要有符合規定的登山車，並戴上安全帽、長指手套及護膝。
                      </li>
                      <li>課程內容：一小時教學、一小時自由練習及指導。</li>
                    </ul>
                  </div>
                  <div>
                    <p className="fs-4 text-hightlight">活動資訊</p>
                    <ul className="text-content">
                      <li>報名開始日期：2022-06-10</li>
                      <li>報名結束日期：2022-07-10 </li>
                      <li>指導員：王小花</li>
                      <li>
                        適合對象：登山車新手、想學習基礎技巧的入門登山車騎乘者
                      </li>
                      <li>報名制度：採報名收費制，每次上限6人，5人成團。</li>
                      <li>
                        收費標準：600元/人，購買HHSPORT代理登山系列產品享有課程加購優惠價。
                      </li>
                      <li>－費用包含指導員教學、旅平險</li>
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
                    <p>學員須知</p>
                    <ul className="list-unstyled">
                      <li>1.課程內容：一小時教學、一小時自由練習及指導。</li>
                      <li>
                        {' '}
                        2.參與小學堂不限服飾品牌，帥氣美型且安全是最高原則。
                      </li>
                      <li>
                        3.遵守指導員指示，如未遵守且在過程發生任何意外事故，須由學員自行負責。
                      </li>
                      <li>
                        4.如遇天候不佳，視情況調整活動路線或更改時間，請留意活動頁面留言公告。
                      </li>
                      <li>
                        5.每次活動將會為每位學員投保旅平險200百萬，傷害醫療20萬。
                      </li>
                    </ul>
                  </div>
                </div>
                {/*---------------------------------- 報名箱 */}
                <div className="col-3">
                  <div className="sticky-top d-grid">
                    <Link to={`/course`}>
                      <p className="text-highlight mb-5 d-flex align-items-center justify-content-end">
                        返回課程列表
                        <BsFillCaretRightFill />
                      </p>
                    </Link>
                    <div className="card p-3 shadow border-0 rounded-0 ">
                      <p className="fs-5 m-0 text-primary">越野小學堂</p>
                      <ul className="list-unstyled d-flex gap-2 m-0">
                        <li>
                          <div className="badge bg-badge-lightblue rounded-pill px-3">
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
                      <button className="btn btn-primary rounded-0">
                        立即報名
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}

      {/*---------------------------------- 推薦課程 */}
      <HotSection title="推薦課程" />
    </>
  );
}
