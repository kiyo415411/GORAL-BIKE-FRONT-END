import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL, IMAGE_URL } from '../../utils/config';

export default function News() {
  const [news, setNews] = useState([]);
  const [hotNews, setHotNews] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      try {
        // 需要等待資料pending，不然useState會是空值
        const getNewsValue = await axios.get(`${API_URL}/news`);

        setNews(getNewsValue.data.newsResults);
        setHotNews(getNewsValue.data.hotNewsResults);
      } catch (e) {
        throw new Error(e);
      }
    };
    getNews();
  }, []);

  return (
    <>
      <main className="row container mx-auto justify-content-between mb-5">
        <aside className="col-4 g-4 row flex-column">
          <h3 className=" text-primary mb-5">其他熱門文章</h3>
          <ul className="list-unstyled row flex-column g-4 p-0 m-0">
            {hotNews.map((value) => {
              const date = value.date.split('T').shift();
              return (
                <li
                  key={value.id}
                  className="text-primary fw-bolder fs-6 row p-0 m-0"
                >
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
                </li>
              );
            })}
          </ul>
        </aside>
        <article className="col-8 g-4 row flex-column ">
          <h3 className="col text-primary mb-5">最新新聞</h3>

          <div className="row">
            {news.map((value) => {
              const date = value.date.split('T').shift();

              return (
                <div key={value.id} className="col col-md-6 mb-4">
                  <div className="card h-100">
                    <img
                      // src={`http://localhost:3001/images/news/1386902775.jpg`}
                      src={`${IMAGE_URL}/news/${value.name}`}
                      className="card-img-top overflow-hidden m-auto"
                      alt="..."
                      style={{ height: '200px', objectFit: 'cover' }}
                    />
                    <div className="card-body">
                      <p>{date}</p>
                      <h5 className="card-title">{value.title}</h5>
                      <p className="card-text col-card-news-text col-card-text">
                        {value.content}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </article>
      </main>
    </>
  );
}
