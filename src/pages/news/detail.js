import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { API_URL, IMAGE_URL } from '../../utils/config';

export default function Detail() {
  const [data, setData] = useState([]);
  const [dataPic, setDataPic] = useState([]);
  const { newsID } = useParams();

  useEffect(() => {
    const getNewsDetail = async () => {
      const response = await axios.get(`${API_URL}/news/newsDetail`, {
        params: {
          newsID: newsID,
        },
      });
      setData(response.data.newsResults);
      setDataPic(response.data.newsPicture);
    };
    getNewsDetail();
  }, [newsID]);

  console.log(data);
  console.log(dataPic);
  return (
    <>
      <h1>{newsID}</h1>
    </>
  );
}
