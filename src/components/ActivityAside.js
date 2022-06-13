import AsideTitle from './Aside/AsideTitle';
import RangeSlider from './Aside/RangeSlider';
import CheckBox from './Aside/CheckBox';
import SearchInput from './Aside/SearchInput';
import CategoryList from './Aside/CategoryList';

// 商品篩選邊攔
export default function ActivityAside() {
  const status = ['報名開放中', '報名未開放', '報名已結束'];
  return (
    <div className="product-aside shadow p-4">
      {/* 關鍵字篩選 */}
      <SearchInput />
      {/* 報名狀態篩選 */}
      <AsideTitle text="報名狀態" />
      <CategoryList list={status} />
      {/* 報名費用篩選 */}
      <AsideTitle text="報名費用" />
      <RangeSlider
        min={0}
        max={5}
        step={0.5}
        setmin="0"
        setmax="23,000"
        startunit="$ "
        text="篩選"
      ></RangeSlider>
      {/* 報名人數篩選 */}
      <AsideTitle text="報名人數" />
      <RangeSlider
        min={0}
        max={5}
        step={0.5}
        setmin="0"
        setmax="100"
        endunit=" 人"
        text="篩選"
      ></RangeSlider>
      {/* 活動地點 */}
      <AsideTitle text="課程難度" />
      <div className="d-flex gap-5 mb-5">
        <div>
          <CheckBox text="北部" id="north-checkbox" />
          <CheckBox text="東部" id="east-checkbox" />
        </div>
        <div>
          <CheckBox text="南部" id="sorth-checkbox" />
          <CheckBox text="中部" id="center-checkbox" />
        </div>
      </div>
      {/* 活動日期 */}
      <AsideTitle text="報名日期" />
      <div className="d-flex gap-1 mb-4">
        <input type="date" />
        -
        <input type="date" />
      </div>
    </div>
  );
}
