import { useState, useContext } from 'react';
import { MapDataValue } from '../layout/Map/index';
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';

export default function MapImformationNavSort(props) {
  const Data = useContext(MapDataValue);
  const [loadData, setLoadData] = useState(false);

  const sort = () => {
    setLoadData(!loadData);
    console.log('dataAPI->', Data.filterDataApi);
    const sortArray = loadData
      ? [...Data.filterDataApi].sort((a, b) => a.總長度 - b.總長度)
      : [...Data.filterDataApi].sort((a, b) => b.總長度 - a.總長度);
    Data.setFilterDataApi(sortArray);
  };

  return (
    <>
      <nav className="nav bg-white text-center align-items-center justify-content-between">
        <label htmlFor="sort" className="my-1 mx-3">
          排序
        </label>
        <button
          className="btn btn-link text-decoration-none my-1 mx-3 row p-1"
          onClick={sort}
        >
          <span className="col-1 p-0">公里</span>
          <span className="col-1 p-1">
            {loadData ? (
              <TiArrowSortedDown className="mb-1" />
            ) : (
              <TiArrowSortedUp className="mb-1" />
            )}
          </span>
        </button>
      </nav>
    </>
  );
}
