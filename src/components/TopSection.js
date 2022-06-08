// Banner
import Background from '../images/CourseBanner.jpg';

const banner = {
  title: '課程',
  background: Background,
};

function TopSection() {
  return (
    <div className="position-relative top-banner text-white overflow-hidden rounded-0">
      <img
        src={banner.background}
        className="card-img rounded-0"
        alt="CourseBanner"
      />
      <div className="card-img-overlay row align-items-center m-0 p-0">
        <div className="col-1" />
        <div className="col-3">
          <h1 className="card-title text-center fw-bolder">{banner.title}</h1>
        </div>
      </div>
    </div>
  );
}

export default TopSection;
