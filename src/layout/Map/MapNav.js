import Area from './Area.json';
import { useContext, useRef } from 'react';
import { MapDataValue } from './index';

export default function MapNav() {
  const Data = useContext(MapDataValue);
  const inputRef = useRef(null);
  const onSetMapName = (e) => {
    Data.setMapName(e.target.value);
  };

  const onChangeArea = (e) => {
    Data.setArea(e.target.value);
    const areaValue = e.target.value;
    const filterData = Data.dataApi.filter((value, index) => {
      return areaValue ? Area[areaValue].includes(value['縣市']) : value;
      // console.log(value);
    });
    Data.setFilterDataApi(filterData);

    const filterMapData = Data.origianlMapData.filter((value) => {
      console.log(areaValue);
      return areaValue ? value.properties.POSTION === areaValue : value;
    });
    Data.setFilterMapData(filterMapData);
  };

  const onSetName = (e) => {
    console.log(e.target.value);
    const cityValue = e.target.value;
    Data.setCity(cityValue);
    const filterData = Data.dataApi.filter((value, index) => {
      return cityValue ? value['縣市'] === cityValue : value;
    });
    Data.setFilterDataApi(filterData);

    const filterMapData = Data.origianlMapData.filter((value) => {
      console.log(cityValue);
      return cityValue ? value.properties.COUNTYNAME === cityValue : value;
    });
    Data.setFilterMapData(filterMapData);
  };

  const clear = () => {
    Data.setFilterMapData(Data.origianlMapData);
    Data.setFilterDataApi(Data.dataApi);
    Data.setCity('');
    Data.setArea('');
  };
  const Reset = () => {
    Data.setFilterMapData(Data.origianlMapData);
    Data.setFilterDataApi(Data.dataApi);
    Data.setMapName(
      'https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=YdAyuapGGLNDoknjhGzG'
    );
    Data.setCity('');
    Data.setArea('');
    inputRef.current.value = '';
  };

  const serchValue = (e) => {
    clear();
    const getvalue = new RegExp(e.target.value, 'gi');
    const newdataApi = [...Data.dataApi].filter((value) =>
      getvalue.exec(value['林道名稱'])
    );
    Data.setFilterDataApi(newdataApi);
  };

  return (
    <>
      <nav className="nav bg-dark p-3 justify-content-end">
        <section className="row justify-content-end gap-3 w-75">
          <section className="col-md-2 d-flex justify-content-end align-items-center gap-3">
            <label className="col-4 text-white" htmlFor="地圖樣式">
              地圖樣式
            </label>
            <select
              className="form-select col-4 w-50"
              aria-label="MapType"
              id="select"
              value={Data.mapName}
              onChange={onSetMapName}
            >
              <option value={''}>Null</option>
              <option
                value={
                  'https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=YdAyuapGGLNDoknjhGzG'
                }
              >
                Basic
              </option>
              <option
                value={
                  'https://api.maptiler.com/maps/bright/256/{z}/{x}/{y}.png?key=YdAyuapGGLNDoknjhGzG'
                }
              >
                Bright
              </option>
              <option
                value={
                  'https://api.maptiler.com/maps/hybrid/256/{z}/{x}/{y}.jpg?key=YdAyuapGGLNDoknjhGzG'
                }
              >
                Hybrid
              </option>
              <option
                value={
                  'https://api.maptiler.com/maps/toner/256/{z}/{x}/{y}.png?key=YdAyuapGGLNDoknjhGzG'
                }
              >
                Toner
              </option>
            </select>
          </section>
          <section className="col-md-2 d-flex justify-content-end align-items-center gap-3">
            <label className="text-white" htmlFor="區域">
              區域
            </label>
            <select
              className="form-select w-75"
              aria-label="Area"
              id="select"
              value={Data.area}
              onChange={onChangeArea}
            >
              <option value={''}>全部</option>
              <option value={'北部'}>北部</option>
              <option value={'中部'}>中部</option>
              <option value={'南部'}>南部</option>
              <option value={'東部'}>東部</option>
            </select>
          </section>
          <section className="col-md-2 d-flex justify-content-end align-items-center gap-3">
            <label className="text-white" htmlFor="縣市">
              縣市
            </label>
            <select
              className="form-select w-75"
              aria-label="MapType"
              id="select"
              value={Data.city}
              onChange={onSetName}
            >
              <option value="">全部</option>
              {Object.keys(Area).map((value, index) => {
                if (value === Data.area) {
                  return Area[Data.area].map((value, index) => (
                    <option key={index} value={value}>
                      {value}
                    </option>
                  ));
                }
                if (Data.area === '') {
                  return Area[value].map((value, index) => (
                    <option key={index} value={value}>
                      {value}
                    </option>
                  ));
                }
                return null;
              })}
            </select>
          </section>
          <section className="col-md-2 d-flex justify-content-end align-items-center gap-3">
            <input
              className="form-control w-100 ms-md-5 "
              id="serchMapName"
              placeholder="搜尋地圖名稱"
              onChange={serchValue}
              ref={inputRef}
            />
          </section>
          <section className="col-md-1 d-flex justify-content-end align-items-center gap-3">
            <button className="btn btn-danger text-white" onClick={Reset}>
              清除篩選
            </button>
          </section>
        </section>
      </nav>
    </>
  );
}
