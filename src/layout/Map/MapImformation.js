import { useContext } from 'react';
import { MapDataValue } from './index';
import MapImformationNavSort from './MapImformationNavSort';
import MapImformationCard from './MapImformationCard';

function MapImformation() {
  const Data = useContext(MapDataValue);
  return (
    <>
      <MapImformationNavSort />
      {Data.filterDataApi.map((value) => (
        <MapImformationCard key={value['編號']} value={value} />
      ))}
    </>
  );
}
export default MapImformation;
