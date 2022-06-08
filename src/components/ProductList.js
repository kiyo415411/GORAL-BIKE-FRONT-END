// 商品頁面
import TopSection from './TopSection';
import ProductAside from './ProductAside';
import RowList from './RowList';
import Pagination from './Pagination';

function ProductList() {
  return (
    <>
      <TopSection />
      <div className="row gx-5 justify-content-center my-5 flex-nowrap">
        <div className="col-auto">
          <ProductAside />
        </div>
        <div className="col-auto">
          <RowList />
          <Pagination />
        </div>
      </div>
    </>
  );
}

export default ProductList;
