function MapNav(props) {
  return (
    <>
      <nav className="nav bg-dark">
        <select
          className="form-select w-25"
          aria-label="Default select example"
          id="area"
          defaultValue="Select "
          onChange={(e) => props.setArea(e.target.value)}
        >
          <option value="">全部</option>
          <option value="北部">北部</option>
          <option value="中部">中部</option>
          <option value="南部">南部</option>
          <option value="東部">東部</option>
        </select>
      </nav>
    </>
  );
}
export default MapNav;
