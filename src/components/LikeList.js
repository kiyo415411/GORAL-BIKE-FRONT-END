// 收藏頁面
import TopSection from './TopSection';
import UserAside from './UserAside';
import RowList from './RowList';
import Pagination from './Pagination';

function LikeList() {
  return (
    <>
      <TopSection />
      <div className="row gx-5 justify-content-center my-5 flex-nowrap">
        <div className="col-auto">
          <UserAside />
        </div>
        <div className="col-auto">
          <RowList />
          <Pagination />
        </div>
      </div>
    </>
  );
}

export default LikeList;
