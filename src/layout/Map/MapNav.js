import Area from './Area.json';

function MapNav(props) {
  const onSetMapName = (e) => {
    props.setMapName(e.target.value);
  };

  const onChange = (e) => {
    props.setArea(e.target.value);
    const areaValue = e.target.value;
    const filterData = props.dataApi.filter((value, index) => {
      return areaValue ? Area[areaValue].includes(value['縣市']) : value;
      // console.log(value);
    });
    props.setFilterDataApi(filterData);

    // console.log(e.target.value);
    // console.log(props.dataApi);
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
          onChange={onChange}
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
          onChange={onChange}
        >
          {Object.keys(Area).map((value, index) => value)}
          {/* {console.log(Area)} */}
        </select>
      </nav>
    </>
  );
}
export default MapNav;
