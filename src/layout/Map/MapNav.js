import Area from './Area.json';

function MapNav(props) {
  const onSetMapName = (e) => {
    props.setMapName(e.target.value);
  };

  const onChangeArea = (e) => {
    props.setArea(e.target.value);
    const areaValue = e.target.value;
    const filterData = props.dataApi.filter((value, index) => {
      return areaValue ? Area[areaValue].includes(value['縣市']) : value;
      // console.log(value);
    });
    props.setFilterDataApi(filterData);

    const filterMapData = props.origianlMapData.filter((value) => {
      console.log(areaValue);
      return areaValue ? value.properties.POSTION === areaValue : value;
    });
    props.setFilterMapData(filterMapData);
  };

  const onSetName = (e) => {
    console.log(e.target.value);
    const cityValue = e.target.value;
    const filterData = props.dataApi.filter((value, index) => {
      return cityValue ? value['縣市'] === cityValue : value;
    });
    props.setFilterDataApi(filterData);

    const filterMapData = props.origianlMapData.filter((value) => {
      console.log(cityValue);
      return cityValue ? value.properties.COUNTYNAME === cityValue : value;
    });
    props.setFilterMapData(filterMapData);
  };

  return (
    <>
      <nav className="nav bg-dark p-5 d-flex gap-3">
        <select
          className="form-select w-25"
          aria-label="MapType"
          id="area"
          defaultValue="Select "
          onChange={onSetMapName}
        >
          <option value="">Null</option>
          <option value="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=YdAyuapGGLNDoknjhGzG">
            Basic
          </option>
          <option value="https://api.maptiler.com/maps/bright/256/{z}/{x}/{y}.png?key=YdAyuapGGLNDoknjhGzG">
            Bright
          </option>
          <option value="https://api.maptiler.com/maps/hybrid/256/{z}/{x}/{y}.jpg?key=YdAyuapGGLNDoknjhGzG">
            Satellite Hybrid
          </option>
          <option value="https://api.maptiler.com/maps/toner/256/{z}/{x}/{y}.png?key=YdAyuapGGLNDoknjhGzG">
            Toner
          </option>
        </select>
        <select
          className="form-select w-25"
          aria-label="Area"
          id="area"
          defaultValue="Select "
          onChange={onChangeArea}
        >
          <option value="">全部</option>
          <option value="北部">北部</option>
          <option value="中部">中部</option>
          <option value="南部">南部</option>
          <option value="東部">東部</option>
        </select>
        <select
          className="form-select w-25"
          aria-label="MapType"
          id="area"
          defaultValue="Select "
          onChange={onSetName}
        >
          <option value="">全部</option>
          {Object.keys(Area).map((value, index) => {
            if (value === props.area) {
              return Area[props.area].map((value, index) => (
                <option key={index} value={value}>
                  {value}
                </option>
              ));
            }
            if (props.area === '') {
              return Area[value].map((value, index) => (
                <option key={index} value={value}>
                  {value}
                </option>
              ));
            }
            return null;
          })}
        </select>
      </nav>
    </>
  );
}
export default MapNav;
