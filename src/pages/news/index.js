import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../utils/config';
import NewsAside from './NewsAside';
import NewsArticle from './NewsArticle';

export default function News() {
  const [news, setNews] = useState([]);
  const [filterNews, setFilterNews] = useState([]);
  const [perPage, setPerPage] = useState(6);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getNews = async () => {
      try {
        // 需要等待資料pending，不然useState會是空值
        const getNewsValue = await axios.get(`${API_URL}/news`);
        const result = getNewsValue.data.newsResults;
        setNews(result);
        setFilterNews(result.slice((page - 1) * perPage, perPage * page));
        // sliceIntoChunks(news, perPage);
      } catch (e) {
        throw new Error(e);
      }
    };
    getNews();
  }, []);

  useEffect(() => {
    console.log('filterNews->', filterNews);
    setFilterNews(news.slice((page - 1) * perPage, perPage * page));
  }, [page, perPage]);

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
