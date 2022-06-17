import { useState, useEffect, useContext } from 'react';
import { MapDataValue } from './index';

function MapImformationNavSort(props) {
  const Data = useContext(MapDataValue);
  const [loadData, setLoadData] = useState(true);

  const sort = (e) => {
    // setLoadData(!loadData);
    console.log('click');
    // console.log(loadData);
    // console.log('props->', props.localImformation);
    console.log('dataAPI->', Data.filterDataApi);
    const sortArray = loadData
      ? Data.filterDataApi.sort((a, b) => a.總長度 - b.總長度)
      : Data.filterDataApi.sort((a, b) => b.總長度 - a.總長度);
    // props.setLocalImformation(Data.filterDataApi);
    Data.setFilterDataApi(sortArray);
  };

  // useEffect(() => {
  //   const sortArray = loadData
  //     ? Data.filterDataApi.sort((a, b) => a.總長度 - b.總長度)
  //     : Data.filterDataApi.sort((a, b) => b.總長度 - a.總長度);
  //   console.log('sort', sortArray);
  //   Data.setFilterDataApi(sortArray);
  // }, [loadData]);

  //   useEffect(() => {
  //     props.setLocalImformation(Data.filterDataApi);
  //   }, [loadData, props, Data]);

  return (
    <>
      <nav className="nav bg-white text-center align-items-center justify-content-between">
        <label htmlFor="sort" className="my-1 mx-3">
          排序
        </label>
        <button
          className="btn btn-link text-decoration-none my-1 mx-3"
          onClick={sort}
        >
          公里
        </button>
      </nav>
    </>
  );
}
export default MapImformationNavSort;
