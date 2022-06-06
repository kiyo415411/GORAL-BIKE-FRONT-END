import TopSection from './TopSection';
import UserAside from './UserAside';
import RowCard from './RowCard';

function LikeList() {
  return (
    <>
      <TopSection />
      <div className="row my-5">
        <div className="col-1" />
        <UserAside />
        <div className="col-1" />
        <RowCard />
      </div>
    </>
  );
}

export default LikeList;
