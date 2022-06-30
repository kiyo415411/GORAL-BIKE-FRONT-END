import { BsFillCaretRightFill } from 'react-icons/bs';
import TopSection from '../components/TopSection';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // 拿前端網址變數
import { API_URL, IMAGE_URL } from '../utils/config';
import { Link } from 'react-router-dom';
import Like from '../components/Aside/Like';
import Button from 'react-bootstrap/esm/Button';
import ApplyForm from '../components/ApplyForm';
import ActivityHotSwiper from '../components/Activity/ActivityHotSwiper';

export default function CourseDetail() {
  const [data, setData] = useState([]);
  const { courseId } = useParams(); // 從網址上拿變數
  const [liked, setLiked] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    let getDate = async () => {
      let response = await axios.get(`${API_URL}/activity/${courseId}`);
      setData(response.data.data);
    };
    getDate();
  }, [courseId]);

  return (
    <>
      {data.map((item) => {
        const newDate = item.activity_date.split('T').shift();
        const newStartTime = item.activity_start_date.split('T').shift();
        const newEndTime = item.activity_end_date.split('T').shift();
        return (
          <div key="detailMapKey">
            <TopSection
              title={item.activity_name}
              bg={`${IMAGE_URL}/activity/${item.activity_pictures}`}
            />
            <div className="container my-5">
              <div className="row justify-content-between">
                {/*---------------------------------- 介紹 */}
                <div className="col-8">
                  {/*---------------------------------- 標籤 */}
                  <div className="d-flex justify-content-between align-items-center mb-5">
                    <ul className="list-unstyled d-flex gap-4 m-0">
                      <li key={item}>
                        <div className="badge bg-badge-red rounded-pill px-3">
                          {item.activity_status_name}
                        </div>
                      </li>
                      <li>
                        <div className="badge bg-badge-lightblue rounded-pill px-3">
                          {item.venue_name}
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
                    {item.activity_name}
                  </h3>
                  <div className="card p-3 my-4 shadow border-0">
                    <p className="fs-5 m-0 ms-2 text-highlight">{newDate}</p>
                    <pre className="my-0 ms-2 fs-6 text-content">
                      {item.activity_content_infomation}
                    </pre>
                  </div>
                  <div>
                    <p className="fs-4 text-highlight">活動資訊</p>
                    <pre className="my-0 ms-2 fs-6 text-content">
                      報名開始日期： {newStartTime}
                      <br />
                      報名結束日期： {newEndTime}
                      <br />
                      {item.activity_content_apply}
                    </pre>
                  </div>
                  <div className="d-flex my-5">
                    <figure className="activity-detail-figure">
                      <img
                        src={`${IMAGE_URL}/activity/${item.activity_content_image1}`}
                        className="object-fit"
                        alt="img1"
                      />
                    </figure>
                    <figure className="activity-detail-figure">
                      <img
                        src={`${IMAGE_URL}/activity/${item.activity_content_image2}`}
                        className="object-fit"
                        alt="img2"
                      />
                    </figure>
                  </div>
                  <div className="ms-3 text-content">
                    <p>活動須知</p>
                    <pre className="fs-6">{item.activity_content_notice}</pre>
                  </div>
                </div>
                {/*---------------------------------- 報名箱 */}
                <div className="col-3">
                  <div className="sticky-top d-grid">
                    <Link to={`/activity`}>
                      <p className="text-highlight mb-5 d-flex align-items-center justify-content-end">
                        返回活動列表
                        <BsFillCaretRightFill />
                      </p>
                    </Link>
                    <div className="card p-3 shadow border-0 rounded-0 ">
                      <p className="fs-5 m-0 text-primary">
                        {item.activity_name}
                      </p>
                      <ul className="list-unstyled d-flex gap-2 m-0">
                        <li>
                          <div className="badge bg-badge-lightblue rounded-pill px-3">
                            {item.activity_category_name}
                          </div>
                        </li>
                        <li>
                          <div className="badge bg-badge-red rounded-pill px-3">
                            {item.activity_status_name}
                          </div>
                        </li>
                      </ul>
                      <div className="text-content d-grid gap-1 my-3">
                        <p className="m-0">{newDate}</p>
                        <p className="m-0">$ {item.activity_fee}</p>
                        <p className="m-0">參加名額：{item.activity_persons}</p>
                      </div>

                      {item.activity_status_name === '報名已截止' ? (
                        <button className="btn btn-primary rounded-0" disabled>
                          報名已截止
                        </button>
                      ) : item.activity_status_name === '報名未開放' ? (
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
                            formName="活動報名表"
                            cartMethod="activity"
                            show={show}
                            handleClose={handleClose}
                            id={item.activity_id}
                            name={item.activity_name}
                            image={item.activity_pictures}
                            price={item.activity_fee}
                            quantity="1"
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
      <ActivityHotSwiper />
    </>
  );
}
