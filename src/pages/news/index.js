import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../utils/config';
import NewsAside from './NewsAside';
import NewsArticle from './NewsArticle';

export default function News() {
  const [news, setNews] = useState([]);
  const [filterNews, setFilterNews] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      try {
        // 需要等待資料pending，不然useState會是空值
        const getNewsValue = await axios.get(`${API_URL}/news`);
        setNews(getNewsValue.data.newsResults);
        setFilterNews(getNewsValue.data.newsResults);
      } catch (e) {
        throw new Error(e);
      }
    };
    getNews();
  }, []);

  return (
    <>
      <main className="row container mx-auto justify-content-between mb-5">
        <NewsAside
          show={true}
          news={news}
          filterNews={filterNews}
          setFilterNews={setFilterNews}
        />
        <NewsArticle news={news} filterNews={filterNews} />
      </main>
    </>
  );
}
