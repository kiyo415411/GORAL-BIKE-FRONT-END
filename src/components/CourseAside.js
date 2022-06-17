import AsideTitle from './Aside/AsideTitle';
import RangeSlider from './Aside/RangeSlider';
import CheckBox from './Aside/CheckBox';
import SearchInput from './Aside/SearchInput';
import CategoryList from './Aside/CategoryList';

// 商品篩選邊攔
function CourseAside({ statu, setStatu, handleStatu }) {
  const status = ['報名未開放', '報名開放中', '報名已結束'];
  return (
    <div className="sticky-top">
      <div className="Space" style={{ height: '3rem' }} />
      <div className="scrollbar-space shadow pe-2">
        <div className="course-list-aside p-4" style={{ height: '51rem' }}>
          {/* 關鍵字篩選 */}
          <SearchInput />
          {/* 報名狀態篩選 */}
          <AsideTitle text="報名狀態" />
          <CategoryList list={status} statu={statu} setStatu={setStatu} />
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
            <CheckBox text="入門" id="easy-checkbox" />
            <CheckBox text="進階" id="advance-checkbox" />
          </div>
          {/* 活動日期 */}
          <AsideTitle text="報名日期" />
          <div className="d-flex gap-1 mb-4">
            <input type="date" />
            -
            <input type="date" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseAside;
