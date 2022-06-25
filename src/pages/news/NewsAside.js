import { Link } from 'react-router-dom';
import { IMAGE_URL } from '../../utils/config';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { API_URL } from '../../utils/config';

export default function NewsAside(props) {
  const [hotNews, setHotNews] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      try {
        // 需要等待資料pending，不然useState會是空值
        const getNewsValue = await axios.get(`${API_URL}/news`);
        setHotNews(getNewsValue.data.hotNewsResults);
      } catch (e) {
        throw new Error(e);
      }
    };
    getNews();
  }, []);

  const serchValue = (e) => {
    const getvalue = new RegExp(e.target.value, 'gi');
    const newFilter = [...props.news].filter((value) =>
      getvalue.exec(value.title)
    );
    props.setFilterNews(newFilter);
  };

  return (
    <>
      <aside className="col-4 g-4 mt-5">
        <h3 className="text-primary mb-3">其他熱門文章</h3>
        {props.show ? (
          <input
            className="form-control w-95 mx-auto mb-3"
            id="exampleDataList"
            placeholder="搜尋文章"
            onChange={serchValue}
          />
        ) : (
          ''
        )}

        <ul className="list-unstyled row flex-column g-4 p-0 m-0">
          {hotNews.map((value) => {
            const date = value.date.split('T').shift();
            return (
              <li
                key={value.id}
                className="text-primary fw-bolder fs-6 row p-0 m-0"
              >
                <Link to={`/news/${value.id}`}>
                  <div className="card mb-3 px-0 overflow-hidden">
                    <div className="row g-0">
                      <div
                        className="col-md-4 overflow-hidden"
                        style={{ height: '110px' }}
                      >
                        <img
                          src={`${IMAGE_URL}/news/${value.name}`}
                          className="w-100 h-100 cover img-fluid "
                          alt="..."
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <p className="card-text d-flex justify-content-between">
                            <small className="text-muted">{date}</small>
                            <small className="text-muted fw-lighter">
                              觀看{value.touch}次
                            </small>
                          </p>
                          <h5 className="card-title text-truncate fs-6">
                            {value.title}
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </aside>
    </>
  );
}
