import BikeCard from './BikeCard.js';
import { useState, useEffect } from 'react';

function BikeList() {
  const [bikes, setBikes] = useState([
    'Bike1',
    'Bike2',
    'Bike3',
    'Bike4',
    'Bike5',
    'Bike6',
    'Bike7',
  ]);

  //['Bike1', 'Bike2', 'Bike3', 'Bike4', 'Bike5', 'Bike6', 'Bike7'];

  return (
    <ul className="list-unstyled">
      {bikes.map((item, index) => {
        return (
          <li key={index}>
            {console.log(item)}
            {console.log(index)}
            <BikeCard bikes={item} />
          </li>
        );
      })}
    </ul>
  );
}
export default BikeList;
