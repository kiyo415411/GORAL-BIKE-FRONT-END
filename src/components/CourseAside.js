import AsideTitle from './Aside/AsideTitle';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import SearchInput from './Aside/SearchInput';
import CategoryList from './Aside/CategoryList';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { API_URL } from '../utils/config';
import { BsCalendar3 } from 'react-icons/bs';

function CourseAside({
  // ------------------------------ 篩選邊欄 props
  statu,
  setStatu,
  setPriceSubmit,
  setPersonSubmit,
  category,
  setCategory,
}) {
  // ------------------------------ 篩選值變化宣告

  const [price, setPrice] = useState([0, 10000]); // 價錢
  const [person, setPerson] = useState([0, 100]); // 人數

  // ------------------------------ 篩選分類宣告

  const [state, setState] = useState([]); // 狀態
  const [categoryLabel, setCategoryLabel] = useState([]); // 難度分類

  // ------------------------------- 從後端接資料

  useEffect(() => {
    let getCategory = async () => {
      try {
        let response = await axios.get(`${API_URL}/course/`);
        setState(response.data.stateGroup);
        setCategoryLabel(response.data.categoryGroup);
      } catch (e) {
        console.error(e);
      }
    };
    getCategory();
  }, [categoryLabel, state]);

  // ------------------------------- 條件變化處理

  // 價錢
  const handlePrice = (event, newPrice) => {
    setPrice(newPrice);
  };
  // 人數
  const handlePerson = (event, newPerson) => {
    setPerson(newPerson);
  };
  // 難度
  const handleChecked = (e) => {
    const value = Number(e.target.value);
    if (!category.includes(value)) return setCategory([...category, value]);
    if (category.includes(value)) {
      const newCategory = category.filter((v) => v !== value);
      setCategory(newCategory);
    }
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
          <CategoryList list={state} statu={statu} setStatu={setStatu} />
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
              onChange={handlePrice}
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
              value={person}
              onChange={handlePerson}
              step={5}
              min={0}
              max={100}
            />
          </Box>
          {/* toLocaleString() --> 將數字千位格式化*/}
          <div className="d-flex align-items-center justify-content-between px-2 mb-5">
            <p className="m-0 fs-6">
              {person[0].toLocaleString()} 人 - {person[1].toLocaleString()} 人
            </p>
            <button
              className="btn fs-6 border-2 px-4 py-1 rounded-0 btn-primary rounded-pill"
              onClick={() => {
                setPersonSubmit(person);
              }}
            >
              篩選
            </button>
          </div>
          {/* 活動地點 */}
          <AsideTitle text="課程難度" />
          <div className="mb-5 ms-2 row">
            {categoryLabel.map((v, i) => {
              return (
                <div
                  className="form-check text-primary col-6"
                  key={'category' + i}
                >
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={'category' + i}
                    value={Number(i + 1)}
                    checked={category.includes(i + 1)}
                    onChange={handleChecked}
                  />
                  <label className="form-check-label" htmlFor={'category' + i}>
                    {v}
                  </label>
                </div>
              );
            })}
          </div>
          {/* 活動日期 */}
          <AsideTitle text="報名日期" />
          <div className="d-flex gap-1 mb-5 ps-2">
            <div className="position-relative w-auto h-auto">
              <div
                className="bg-primary px-2 position-absolute rounded-end h-100"
                style={{ right: 0, top: 0, pointerEvents: 'none' }}
              >
                <BsCalendar3 color="white" />
              </div>
              <input
                className="date-input ps-2 pb-1"
                type="date"
                name="dateStart"
                id="dateStart"
              />
            </div>
            -
            <div className="position-relative w-auto h-auto">
              <div
                className="bg-primary px-2 position-absolute rounded-end h-100"
                style={{ right: 0, top: 0, pointerEvents: 'none' }}
              >
                <BsCalendar3 color="white" />
              </div>
              <input
                className="date-input ps-2 pb-1"
                type="date"
                name="dateStart"
                id="dateStart"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseAside;
