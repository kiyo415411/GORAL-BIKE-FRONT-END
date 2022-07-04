import BikeCardSmall from './BikeCardSmall';
import { useEffect, useState } from 'react';
function BikeScrolling(props) {
  const [bikes, setBikes] = useState(props.bikes);
  useEffect(() => {
    setBikes(props.bikes);
    console.log('bikes', bikes);
  }, [props.bikes, bikes]);
  if (bikes.length === 0) return <></>;
  return (
    <div style={{ background: '#dee2e6' }} className="p-3">
      <p>其他相似商品</p>
      <ul className="list-unstyled list-group list-group-horizontal overflow-auto">
        {bikes.map((item, index) => {
          return (
            <li key={index} className="me-5 mt-4">
              <BikeCardSmall
                courseId={item.product_id}
                img={item.product_images}
                rating={item.product_rating}
                name={item.product_name}
                // like={item.Like}
                price={item.product_price}
                // text={item.Text}
                favoriteIs={item.favorite_is}
                favoriteActive={props.favoriteActive}
                setFavoriteActive={props.setFavoriteActive}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default BikeScrolling;
