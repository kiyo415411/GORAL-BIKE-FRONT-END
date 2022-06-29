import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { API_URL, IMAGE_URL } from '../utils/config';
import NewsAside from '../components/Aside/NewsAside';
import { Carousel } from 'react-bootstrap';

export default function NewsDetail() {
  const [data, setData] = useState({
    title: '',
    content: '',
    date: '',
    touch: 0,
  });
  const [dataPic, setDataPic] = useState([]);
  const { newsID } = useParams();

  useEffect(() => {
    const getNewsDetail = async () => {
      try {
        const response = await axios.get(`${API_URL}/news/newsDetail`, {
          params: {
            newsID: newsID,
          },
        });
        const result = response.data.newsResults[0];
        setData({
          ...data,
          title: result.title,
          content: result.content,
          date: result.date.split('T').shift(),
          touch: result.touch,
        });
        setDataPic(response.data.newsPicture);
      } catch (e) {
        throw new Error(e);
      }
    };
    getNewsDetail();
  }, [newsID]);

  return (
    <>
      <main className="row container mx-auto justify-content-between mb-5">
        <NewsAside show={false} />
        <article className="col-md-8 g-4 row flex-column">
          <h3 className="text-center text-md-start col-12 text-primary">
            最新新聞
          </h3>
          <section className="col-12 d-flex justify-content-between">
            <span className="">{data.date}</span>
            <span className="">當前觀看次數：{data.touch} 次</span>
          </section>
          <Carousel fade>
            {dataPic.map((value, index) => {
              return (
                <Carousel.Item key={index} interval={2000}>
                  <img
                    className="d-block w-100"
                    src={`${IMAGE_URL}/news/${value.name}`}
                    alt="First slide"
                  />
                </Carousel.Item>
              );
            })}
          </Carousel>
          <h1 className="text-center">{data.title}</h1>
          <pre
            className="lh-lg"
            style={{ whiteSpace: 'pre-line', textAlign: 'justify' }}
          >
            {data.content}
          </pre>
        </article>
      </main>
    </>
  );
}
