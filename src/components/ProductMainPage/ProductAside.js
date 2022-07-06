import AsideTitle from './Aside/AsideTitle';
import RangeSlider from './Aside/RangeSlider';
import SearchInput from './Aside/SearchInput';
import CategoryList from './Aside/CategoryList';
import BrandList from './Aside/BrandList';
import ColorPalette from './Aside/ColorPalette';

// 商品篩選邊攔
export default function ProductAside(props) {
  return (
    <div className="px-4 pb-2 mt-3 d-flex flex-column overflow-auto course-list-aside">
      {/* 關鍵字篩選 */}
      <SearchInput
        setCurrentSearch={props.setCurrentSearch}
        setPage={props.setPage}
      />
      {/* 報名狀態篩選 */}
      <AsideTitle text="車款分類" />
      <CategoryList
        list={props.category}
        setCurrentCategory={props.setCurrentCategory}
        setPage={props.setPage}
      />
      <AsideTitle text="品牌名稱" />

      <BrandList
        setCurrentBrand={props.setCurrentBrand}
        brand={props.brand}
        setBrand={props.setBrand}
        setPage={props.setPage}
      />
      {/* 報名費用篩選 */}
      <AsideTitle text="價錢區間" />
      <RangeSlider
        startunit="$ "
        text="篩選"
        price={props.price}
        setPrice={props.setPrice}
        setPage={props.setPage}
      ></RangeSlider>
      {/* 報名人數篩選 */}
      <AsideTitle text="顏色篩選" />
      <ColorPalette
        color={props.color}
        setCurrentColor={props.setCurrentColor}
        currentColor={props.currentColor}
        setPage={props.setPage}
      />
    </div>
  );
}
