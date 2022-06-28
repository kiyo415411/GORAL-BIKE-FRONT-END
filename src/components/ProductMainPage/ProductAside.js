import AsideTitle from '../Aside/AsideTitle';
import RangeSlider from '../Aside/RangeSlider';
import SearchInput from '../Aside/SearchInput';
import CategoryList from '../Aside/CategoryList';
import BrandList from '../Aside/BrandList';
import ColorPalette from '../Aside/ColorPalette';

// 商品篩選邊攔
export default function ActivityAside(props) {
  const category = [
    '全部車款',
    '登山車基礎車款',
    '全避震登山車',
    '單避震登山車',
  ];
  // const brand = [
  //   'All Brands',
  //   'XC/MARATHON',
  //   'MARATHON/TRAIL',
  //   'TRAIL',
  //   'ALL MOUNTAIN',
  //   'ENDURO',
  // ];
  return (
    <div
      className="shadow p-sm-4 mt-3 sticky-sm-top d-flex justify-content-center flex-column"
      style={{ width: '324px', height: '100vh' }}
    >
      {/* 關鍵字篩選 */}
      <SearchInput setCurrentSearch={props.setCurrentSearch} />
      {/* 報名狀態篩選 */}
      <AsideTitle text="車款分類" />
      <CategoryList
        list={category}
        setCurrentCategory={props.setCurrentCategory}
      />
      <AsideTitle text="品牌名稱" />

      <BrandList
        setCurrentBrand={props.setCurrentBrand}
        brand={props.brand}
        setBrand={props.setBrand}
      />
      {/* 報名費用篩選 */}
      <AsideTitle text="價錢區間" />
      <RangeSlider
        startunit="$ "
        text="篩選"
        price={props.price}
        setPrice={props.setPrice}
      ></RangeSlider>
      {/* 報名人數篩選 */}
      <AsideTitle text="顏色篩選" />
      <ColorPalette
        color={props.color}
        setCurrentColor={props.setCurrentColor}
        currentColor={props.currentColor}
      />
    </div>
  );
}
