// Banner
function TopSection({ title, bg }) {
  return (
    <div className="position-relative top-banner text-white overflow-hidden rounded-0 d-none d-lg-block">
      <img src={bg} className="card-img rounded-0" alt="CourseBanner" />
      <div className="card-img-overlay row align-items-center m-0 p-0">
        <div className="col-1"></div>
        <h1
          className="top-banner-title card-title fw-bolder col-4 text-center"
          style={{ zIndex: '1' }}
        >
          {title}
        </h1>
        <div className="bg-black w-100 h-100 position-absolute opacity-25"></div>
      </div>
    </div>
  );
}

export default TopSection;
