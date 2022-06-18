import MapImformationNavSort from './MapImformationNavSort';
import { useContext } from 'react';
import { MapDataValue } from './index';
import MapImformationCard from './MapImformationCard';

function MapImformation() {
  const Data = useContext(MapDataValue);
  function Card() {
    Data.filterDataApi.map((value, index) => (
      <MapImformationCard value={value} />
    ));
  }

  return (
    <>
      <MapImformationNavSort />
      {Card}
    </>
  );
}
export default MapImformation;
