import BikeDetailCard from './BikeDetailCard';
import BikeScrolling from './BikeScrolling';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../utils/config';
function BikeDetailPage() {
  const { product_id } = useParams();
  const [bikes, setBikes] = useState([]);
  useEffect(() => {
    const getBikes = async () => {
      const response = await axios.get(API_URL + '/product/product_all');
      setBikes(response.data);
    };
    getBikes();
  }, []);
  return (
    <>
      <BikeDetailCard product_id={product_id} />
      <BikeScrolling bikes={bikes} />
    </>
  );
}
export default BikeDetailPage;
