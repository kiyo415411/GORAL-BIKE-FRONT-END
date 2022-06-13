// Banner
function TopSection({ title, bg }) {
  return (
    <div className="position-relative top-banner text-white overflow-hidden rounded-0">
      <img src={bg} className="card-img rounded-0" alt="CourseBanner" />
      <div className="card-img-overlay row align-items-center m-0 p-0">
        <div className="col-1" />
        <div className="col-3">
          <h1 className="top-banner-title card-title text-center fw-bolder">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default TopSection;
