import BikeDetailCard from './BikeDetailCard';
import BikeScrolling from './BikeScrolling';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL, IMAGE_URL } from '../../utils/config';
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
    <div className="animate__animated animate__fadeIn">
      <div className="position-relative top-banner text-white overflow-hidden rounded-0 d-none d-lg-block">
        <img
          src={`${IMAGE_URL}/bikes/hero.png`}
          alt=""
          style={{ width: '100%', height: '100%' }}
        />
        <div className="card-img-overlay row align-items-center m-0 p-0">
          <div class="col-1"></div>
          <h1
            className="top-banner-title card-title fw-bolder col-4 text-center text-white position-absolute"
            style={{ zIndex: '1' }}
          >
            登山車全車系
          </h1>
          <div class="bg-black w-100 h-100 position-absolute opacity-25"></div>
        </div>
      </div>
      <BikeDetailCard product_id={product_id} />
      <BikeScrolling
        bikes={bikes}
        favoriteActive={favoriteActive}
        setFavoriteActive={setFavoriteActive}
      />
    </div>
  );
}
export default BikeDetailPage;
