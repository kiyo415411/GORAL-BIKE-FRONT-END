import { BsFillCaretRightFill } from 'react-icons/bs';
import TopSection from '../components/TopSection';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // 拿前端網址變數
import { API_URL, IMAGE_URL } from '../utils/config';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';
import ApplyForm from '../components/ApplyForm';
import CourseHotSwiper from '../components/Course/CourseHotSwiper';
import Checkbox from '@mui/material/Checkbox';
import { BsHeartFill, BsHeart } from 'react-icons/bs';
import { useLogin } from '../utils/useLogin';
import swal from 'sweetalert';

export default function CourseDetail() {
  const [data, setData] = useState([]); // 主資料
  const { courseId } = useParams(); // 從網址上拿變數
  const [show, setShow] = useState(false);
  const { userData } = useLogin();
  const [favorite, setFavorite] = useState({
    userId: userData.userId,
    courseId: '',
    favoriteMethod: 'course',
  });
  console.log('courseuserid', userData.userId);
  const [favoriteActive, setFavoriteActive] = useState(true); // 收藏有變動的時候會重新渲染

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    // 讀到 userData 時,做頁面初始判斷 Item 是否在收藏表中
    setFavorite({ ...favorite, userId: userData.userId });
  }, [userData]);

  useEffect(() => {
    let getDate = async () => {
      let response = await axios.get(`${API_URL}/course/${courseId}`, {
        params: {
          userId: userData.userId,
        },
      });
      setData(response.data.data);
    };
    getDate();
  }, [courseId, favoriteActive, userData.userId]);

  function handleClick(e) {
    console.log(e.target.value);
    if (favorite.userId > 0) {
      setFavorite({ ...favorite, courseId: e.target.value });
    } else {
      swal('收藏失敗', '登入會員才能進行個人收藏。', 'warning');
    }
  }

  useEffect(() => {
    let postFavorite = async () => {
      try {
        await axios.post(`${API_URL}/member/favorite/update`, favorite);
      } catch (e) {
        console.error(e);
      }
      setFavoriteActive(!favoriteActive);
    };
    postFavorite();

    // console.log('postFavorite');
  }, [favorite]);

  return (
    <>
      {data.map((item, index) => {
        const newDate = item.course_date.split('T').shift();
        const newStartTime = item.course_start_time.split('T').shift();
        const newEndTime = item.course_end_time.split('T').shift();
        return (
          <div key={index} className="animate__animated animate__fadeIn">
            <TopSection
              title={item.course_title}
              bg={`${IMAGE_URL}/course/${item.course_pictures}`}
            />
            <div className="container my-5">
              {/*---------------------------------- 課程介紹 */}
              <div className="row justify-content-between">
                {/*---------------------------------- 介紹 */}
                <div className="col-12 col-lg-8">
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
                        <Checkbox
                          icon={<BsHeart />}
                          checkedIcon={<BsHeartFill />}
                          size="large"
                          sx={{
                            color: 'var(--bs-highlight)',
                            '&.Mui-checked': {
                              color: 'var(--bs-highlight)',
                            },
                          }}
                          value={courseId}
                          checked={
                            item.favorite_is !== null &&
                            item.favorite_is !== undefined
                          }
                          onClick={handleClick}
                        />
                      </li>
                    </ul>
                  </div>
                  {/*---------------------------------- 標題 */}
                  <h3 className="card-title text-primary m-0 ms-3">
                    {item.course_title}
                  </h3>
                  <div className="card p-3 my-4 shadow border-0">
                    <p className="fs-5 m-0 ms-2 text-highlight">{newDate}</p>
                    <pre className="ca-detail-content my-0 ms-2 fs-6 text-content pb-2">
                      {item.course_content_infomation}
                    </pre>
                  </div>
                  <div>
                    <p className="fs-4 text-highlight">活動資訊</p>
                    <pre className="my-0 ms-2 fs-6 text-content ca-detail-content pb-2">
                      報名開始日期： {newStartTime}
                      <br />
                      報名結束日期： {newEndTime}
                      <br />
                      {item.course_content_apply}
                    </pre>
                  </div>
                  <div className="d-flex my-5">
                    <figure className="course-detail-figure">
                      <img
                        src={`${IMAGE_URL}/course/${item.course_content_image1}`}
                        className="object-fit"
                        alt="img1"
                      />
                    </figure>
                    <figure className="course-detail-figure">
                      <img
                        src={`${IMAGE_URL}/course/${item.course_content_image2}`}
                        className="object-fit"
                        alt="img2"
                      />
                    </figure>
                  </div>
                  <div className="ms-3 text-content">
                    <p>學員須知</p>
                    <pre className="fs-6 ca-detail-content pb-2">
                      {item.course_content_notice}
                    </pre>
                  </div>
                </div>
                {/*---------------------------------- 報名箱 */}
                <div className="col-12 col-lg-3">
                  <div className="sticky-lg-top d-grid">
                    <Link
                      to={`/course`}
                      className="link-highlight mb-5 d-flex align-items-center justify-content-end"
                    >
                      返回課程列表
                      <BsFillCaretRightFill />
                    </Link>
                    <div className="card p-3 shadow border-0 rounded-0 ">
                      <p className="fs-5 m-0 text-primary">
                        {item.course_title}
                      </p>
                      <ul className="list-unstyled d-flex gap-2 m-0">
                        <li>
                          <div className="badge bg-badge-lightblue rounded-pill px-3">
                            {item.course_category_name}
                          </div>
                        </li>
                        <li>
                          <div className="badge bg-badge-red rounded-pill px-3">
                            {item.course_status_name}
                          </div>
                        </li>
                      </ul>
                      <div className="text-content d-grid gap-1 my-3">
                        <p className="m-0">{newDate}</p>
                        <p className="m-0">$ {item.course_price}</p>
                        <p className="m-0">
                          參加名額：{item.course_enrollment}
                        </p>
                      </div>

                      {item.course_status_name === '報名已截止' ? (
                        <button className="btn btn-primary rounded-0" disabled>
                          報名已截止
                        </button>
                      ) : item.course_status_name === '報名未開放' ? (
                        <button className="btn btn-primary rounded-0" disabled>
                          報名未開放
                        </button>
                      ) : (
                        <>
                          <Button
                            variant="primary"
                            onClick={handleShow}
                            className="rounded-0"
                          >
                            加入購物車
                          </Button>
                          <ApplyForm
                            formName="課程報名表"
                            cartMethod="course"
                            show={show}
                            handleClose={handleClose}
                            id={item.course_id}
                            name={item.course_title}
                            image={item.course_pictures}
                            price={item.course_price}
                            quantity={1}
                          />
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      {/*---------------------------------- 推薦 */}
      <CourseHotSwiper />
    </>
  );
}
