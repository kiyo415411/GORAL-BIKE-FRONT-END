import DataAPI from './DataAPI';
import Area from './Area.json';

function FilterDataAPI(area = '') {
  const data = DataAPI();

  const filterData = data.filter((value, index) =>
    area ? Area[area].includes(value['縣市']) : value
  );

  return filterData;
}
export default FilterDataAPI;
