import CourseBanner from '../images/CourseBanner.jpg';

function TopSection() {
  return (
    <div className="top-banner text-white overflow-hidden mt-2 rounded-0">
      <img
        src={CourseBanner}
        className="card-img rounded-0"
        alt="CourseBanner"
      />
      <div className="card-img-overlay row align-items-center m-0">
        <div className="col-1"></div>
        <div className="col-3">
          <h1 className="card-title text-center">課程</h1>
        </div>
      </div>
    </div>
  );
}

export default TopSection;
