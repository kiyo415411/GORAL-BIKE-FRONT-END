import AsideTitle from './Aside/AsideTitle';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import CheckBox from './Aside/CheckBox';
import SearchInput from './Aside/SearchInput';
import CategoryList from './Aside/CategoryList';
import { useState } from 'react';
// 商品篩選邊攔
function CourseAside({ statu, setStatu, setPriceSubmit }) {
  const status = ['報名未開放', '報名開放中', '報名已結束'];
  // 價錢變化
  const [price, setPrice] = useState([0, 10000]);

  const handleChange = (event, newPrice) => {
    setPrice(newPrice);
  };

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
          <Box sx={{ width: 250 }} className="mx-auto">
            <Slider
              sx={{
                color: 'var(--bs-content)',
                '& .MuiSlider-thumb': {
                  width: '0.8rem',
                  height: '0.8rem',
                },
                '& .css-1gv0vcd-MuiSlider-track': {
                  color: 'var(--bs-subcontent)',
                },
                '& .css-14pt78w-MuiSlider-rail': {
                  color: 'var(--bs-line)',
                },
              }}
              value={price}
              onChange={handleChange}
              step={1000}
              min={0}
              max={10000}
            />
          </Box>
          {/* toLocaleString() --> 將數字千位格式化*/}
          <div className="d-flex align-items-center justify-content-between px-2 mb-5">
            <p className="m-0 fs-6">
              $ {price[0].toLocaleString()} - $ {price[1].toLocaleString()}
            </p>
            <button
              className="btn fs-6 border-2 px-4 py-1 rounded-0 btn-primary rounded-pill"
              onClick={() => {
                setPriceSubmit(price);
              }}
            >
              篩選
            </button>
          </div>
          {/* 報名人數篩選 */}
          <AsideTitle text="報名人數" />
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
