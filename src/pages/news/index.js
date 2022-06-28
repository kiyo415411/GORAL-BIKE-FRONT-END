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
  const [lastPage, setLastPage] = useState(null);

  useEffect(() => {
    const getNews = async () => {
      try {
        // 需要等待資料pending，不然useState會是空值
        const getNewsValue = await axios.get(`${API_URL}/news`);
        const result = getNewsValue.data.newsResults;
        setNews(result);
        setFilterNews(result);
        setLastPage(Math.ceil(filterNews.length / perPage));
      } catch (e) {
        throw new Error(e);
      }
    };
    getNews();
  }, [page, perPage, lastPage]);

  // .slice((page - 1) * perPage, perPage * page)

  useEffect(() => {
    console.log('filterNews->', filterNews);
    setFilterNews(news);
    console.log(lastPage);
  }, [page, perPage, lastPage]);

  return (
    <>
      <main className="row container mx-auto justify-content-between mb-5">
        <NewsAside
          show={true}
          news={news}
          setFilterNews={setFilterNews}
          page={page}
          setPage={setPage}
          perPage={perPage}
          lastPage={lastPage}
          setLastPage={setLastPage}
        />
        <NewsArticle
          news={news}
          filterNews={filterNews.slice((page - 1) * perPage, perPage * page)}
          lastPage={lastPage}
          page={page}
          setPage={setPage}
        />
      </main>
    </>
  );
}
