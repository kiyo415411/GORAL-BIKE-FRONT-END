import BikeDetailCard from './BikeDetailCard';
import BikeScrolling from './BikeScrolling';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../utils/config';
import { useLogin } from '../../utils/useLogin';

function BikeDetailPage() {
  const { product_id } = useParams();
  const [bikes, setBikes] = useState([]);
  const { userData } = useLogin();
  const [favoriteActive, setFavoriteActive] = useState(true); // 收藏有變動的時候會重新渲染

  useEffect(() => {
    const getBikes = async () => {
      const response = await axios.get(API_URL + '/product/product_all', {
        params: {
          userId: userData.userId,
        },
      });
      setBikes(response.data);
    };
    getBikes();
  }, [favoriteActive, userData.userId]);
  return (
    <>
      <BikeDetailCard product_id={product_id} />
      <BikeScrolling
        bikes={bikes}
        favoriteActive={favoriteActive}
        setFavoriteActive={setFavoriteActive}
      />
    </>
  );
}
export default BikeDetailPage;
