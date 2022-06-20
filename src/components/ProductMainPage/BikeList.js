import BikeCard from './BikeCard.js';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../utils/config';

function BikeList() {
  // list of the names of the bikes
  // this could be numbers in the future based on the amount of bikes in the folder
  // this will become an object to deal with the fact that a lot of the information on the card is going to be different per bike
  const [bikes, setBikes] = useState([
    // {
    //   Bike: 'Bike1',
    //   Rating: 5,
    //   Name: 'BIG.NINE 200',
    //   Like: false,
    //   Price: 22000,
    //   Text: '鋁合金單避震登山車，採用較為直挺的騎乘幾何設定，Shimano Deore 1x10零組件搭配，Suntour避震前叉。 ',
    //   Color: '',
    // },
    // {
    //   Bike: 'Bike2',
    //   Rating: 5,
    //   Name: 'BIG.NINE 200',
    //   Like: false,
    //   Price: 22000,
    //   Text: '鋁合金單避震登山車，採用較為直挺的騎乘幾何設定，Shimano Deore 1x10零組件搭配，Suntour避震前叉。 ',
    //   Color: '',
    // },
    // {
    //   Bike: 'Bike3',
    //   Rating: 5,
    //   Name: 'BIG.NINE 200',
    //   Like: false,
    //   Price: 22000,
    //   Text: '鋁合金單避震登山車，採用較為直挺的騎乘幾何設定，Shimano Deore 1x10零組件搭配，Suntour避震前叉。 ',
    //   Color: '',
    // },
    // {
    //   Bike: 'Bike4',
    //   Rating: 5,
    //   Name: 'BIG.NINE 200',
    //   Like: false,
    //   Price: 22000,
    //   Text: '鋁合金單避震登山車，採用較為直挺的騎乘幾何設定，Shimano Deore 1x10零組件搭配，Suntour避震前叉。 ',
    //   Color: '',
    // },
    // {
    //   Bike: 'Bike5',
    //   Rating: 5,
    //   Name: 'BIG.NINE 200',
    //   Like: false,
    //   Price: 22000,
    //   Text: '鋁合金單避震登山車，採用較為直挺的騎乘幾何設定，Shimano Deore 1x10零組件搭配，Suntour避震前叉。 ',
    //   Color: '',
    // },
    // {
    //   Bike: 'Bike6',
    //   Rating: 5,
    //   Name: 'BIG.NINE 200',
    //   Like: false,
    //   Price: 22000,
    //   Text: '鋁合金單避震登山車，採用較為直挺的騎乘幾何設定，Shimano Deore 1x10零組件搭配，Suntour避震前叉。 ',
    //   Color: '',
    // },
    // {
    //   Bike: 'Bike7',
    //   Rating: 5,
    //   Name: 'BIG.NINE 200',
    //   Like: false,
    //   Price: 22000,
    //   Text: '鋁合金單避震登山車，採用較為直挺的騎乘幾何設定，Shimano Deore 1x10零組件搭配，Suntour避震前叉。 ',
    //   Color: '',
    // },
  ]);

  useEffect(() => {
    const getBikes = async () => {
      const response = await axios.get(API_URL + '/product');
      // console.log(response.data);
      setBikes(response.data.data);
    };
    getBikes();
  }, []);
  console.log('bikes', bikes);
  return (
    <ul className="list-unstyled row">
      {bikes.map((item, index) => {
        // console.log('item', item);
        return (
          <li
            key={item.product_id}
            className="col-12 col-md-8 col-lg-12 mx-auto"
          >
            {/* {console.log(item)}
            {console.log(index)} */}
            <BikeCard
              bike={'Bike1'}
              // rating={item.valid}
              name={item.product_name}
              like={false}
              price={item.product_price}
              text={
                '鋁合金單避震登山車，採用較為直挺的騎乘幾何設定，Shimano Deore 1x10零組件搭配，Suntour避震前叉。'
              }
            />
          </li>
          // <li key={index}>
          //   {/* {console.log(item)}
          //           {console.log(index)} */}
          //   <BikeCard
          //     bike={item.Bike}
          //     // rating={item.valid}
          //     name={item.Name}
          //     like={item.Like}
          //     price={item.Price}
          //     text={item.Text}
          //   />
          // </li>
        );
      })}
    </ul>
  );
}
export default BikeList;
