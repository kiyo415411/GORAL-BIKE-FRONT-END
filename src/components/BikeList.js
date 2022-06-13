import BikeCard from './BikeCard.js';
import { useState, useEffect } from 'react';

function BikeList() {
  // list of the names of the bikes
  // this could be numbers in the future based on the amount of bikes in the folder
  // this will become an object to deal with the fact that a lot of the information on the card is going to be different per bike
  const [bikes, setBikes] = useState([
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
    <ul className="list-unstyled">
      {bikes.map((item, index) => {
        return (
          <li key={index}>
            {/* {console.log(item)}
            {console.log(index)} */}
            <BikeCard
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
  );
}
export default BikeList;
