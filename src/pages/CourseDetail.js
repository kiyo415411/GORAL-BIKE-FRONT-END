import { BsFillCaretRightFill } from 'react-icons/bs';
import TopSection from '../components/TopSection';
import HotSection from '../components/HotSection';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // 拿前端網址變數
import { API_URL, IMAGE_URL } from '../utils/config';
import { Link } from 'react-router-dom';
import Like from '../components/Aside/Like';
import Button from 'react-bootstrap/esm/Button';
import ApplyForm from '../components/ApplyForm';

export default function CourseDetail() {
  const [data, setData] = useState([]);
  const { courseId } = useParams(); // 從網址上拿變數
  const [liked, setLiked] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
        const newDate = item.course_date.split('T').shift();
        const newStartTime = item.course_start_time.split('T').shift();
        const newEndTime = item.course_end_time.split('T').shift();
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
                    <p className="fs-5 m-0 ms-2 text-highlight">{newDate}</p>
                    <pre className="my-0 ms-2 fs-6 text-content">
                      {item.course_content_infomation}
                    </pre>
                  </div>
                  <div>
                    <p className="fs-4 text-highlight">活動資訊</p>
                    <pre className="my-0 ms-2 fs-6 text-content">
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
                    <pre className="fs-6">{item.course_content_notice}</pre>
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
                        <p className="m-0">剩餘名額：{item.course_inventory}</p>
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
                            填寫報名表
                          </Button>
                          <ApplyForm
                            formName="課程報名表"
                            show={show}
                            handleClose={handleClose}
                            id={item.course_id}
                            name={item.course_title}
                            image={item.course_pictures}
                            price={item.course_price}
                            quantity="1"
                          />
                        </>
                      )}
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
