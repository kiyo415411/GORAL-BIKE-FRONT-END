import BikeCardSmall from './BikeCardSmall';
import { useState } from 'react';

function BikeScrolling() {
  const [bikes] = useState([
    {
      Bike: 'Bike1',
      Rating: 5,
      Name: 'BIG.NINE 200',
      Like: false,
      Price: 22000,
      Text: '鋁合金單避震登山車，採用較為直挺的騎乘幾何設定，Shimano Deore 1x10零組件搭配，Suntour避震前叉。 ',
      Color: '',
    },
    {
      Bike: 'Bike2',
      Rating: 5,
      Name: 'BIG.NINE 200',
      Like: false,
      Price: 22000,
      Text: '鋁合金單避震登山車，採用較為直挺的騎乘幾何設定，Shimano Deore 1x10零組件搭配，Suntour避震前叉。 ',
      Color: '',
    },
    {
      Bike: 'Bike3',
      Rating: 5,
      Name: 'BIG.NINE 200',
      Like: false,
      Price: 22000,
      Text: '鋁合金單避震登山車，採用較為直挺的騎乘幾何設定，Shimano Deore 1x10零組件搭配，Suntour避震前叉。 ',
      Color: '',
    },
    {
      Bike: 'Bike4',
      Rating: 5,
      Name: 'BIG.NINE 200',
      Like: false,
      Price: 22000,
      Text: '鋁合金單避震登山車，採用較為直挺的騎乘幾何設定，Shimano Deore 1x10零組件搭配，Suntour避震前叉。 ',
      Color: '',
    },
    {
      Bike: 'Bike5',
      Rating: 5,
      Name: 'BIG.NINE 200',
      Like: false,
      Price: 22000,
      Text: '鋁合金單避震登山車，採用較為直挺的騎乘幾何設定，Shimano Deore 1x10零組件搭配，Suntour避震前叉。 ',
      Color: '',
    },
    {
      Bike: 'Bike6',
      Rating: 5,
      Name: 'BIG.NINE 200',
      Like: false,
      Price: 22000,
      Text: '鋁合金單避震登山車，採用較為直挺的騎乘幾何設定，Shimano Deore 1x10零組件搭配，Suntour避震前叉。 ',
      Color: '',
    },
    {
      Bike: 'Bike7',
      Rating: 5,
      Name: 'BIG.NINE 200',
      Like: false,
      Price: 22000,
      Text: '鋁合金單避震登山車，採用較為直挺的騎乘幾何設定，Shimano Deore 1x10零組件搭配，Suntour避震前叉。 ',
      Color: '',
    },
  ]);
  return (
    <div style={{ background: '#dee2e6' }} className="p-3">
      <p>其他相似商品</p>
      <ul className="list-unstyled list-group list-group-horizontal overflow-auto">
        {bikes.map((item, index) => {
          return (
            <li key={index} className="me-5 mt-4">
              <BikeCardSmall
                bike={item.Bike}
                rating={item.Rating}
                name={item.Name}
                like={item.Like}
                price={item.Price}
                text={item.Text}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default BikeScrolling;
