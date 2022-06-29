import { useContext } from 'react';
import { MapDataValue } from '../layout/Map/index';
import MapImformationNavSort from '../components/MapImformationNavSort';
import MapImformationCard from '../components/Cards/MapImformationCard';

export default function MapImformation() {
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
