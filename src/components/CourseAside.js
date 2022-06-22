import AsideTitle from './Aside/AsideTitle';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import CategoryList from './Aside/CategoryList';
import { BsCalendar3 } from 'react-icons/bs';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import { FiSearch } from 'react-icons/fi';

function CourseAside({
  // ------------------------------ 篩選邊欄 props
  statu,
  setStatu,
  setPriceSubmit,
  setPersonSubmit,
  category,
  setCategory,
  startDate,
  startDateSubmit,
  setStartDateSubmit,
  endDate,
  endDateSubmit,
  setEndDateSubmit,
  state,
  categoryLabel,
  price,
  setPrice,
  person,
  setPerson,
  searchWord,
  setSearchWord,
  setSearch,
}) {
  // ----------------------------------------------- 變化處理

  // 價錢
  const handlePrice = (event, newPrice) => {
    setPrice(newPrice);
  };
  // 人數
  const handlePerson = (event, newPerson) => {
    setPerson(newPerson);
  };
  // 最早日期
  const handleStartDate = (e) => {
    const startDateValue = e.target.value;
    setStartDateSubmit(startDateValue);
  };
  // 最晚日期
  const handleEndDate = (e) => {
    const endDateValue = e.target.value;
    setEndDateSubmit(endDateValue);
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

  const handleSearch = (e) => {
    setSearchWord(e.target.value);
  };

  // ----------------------------------------------- 頁面呈現

  return (
    <div className="sticky-top">
      <div className="Space" style={{ height: '3rem' }} />
      <div className="scrollbar-space shadow pe-2">
        <div className="course-list-aside p-4" style={{ height: '51rem' }}>
          {/* ----------------------------- 關鍵字篩選 */}
          <div className="pt-3 px-1 pb-5 d-flex justify-content-center">
            <Paper
              className="border-primary border-2 rounded-pill d-flex align-items-center ps-4 pe-3"
              variant="outlined"
              sx={{ width: '18rem', height: '2.5rem' }}
            >
              <InputBase
                placeholder="搜尋課程名稱"
                value={searchWord}
                onChange={handleSearch}
              />
              <IconButton
                className="text-line"
                type="submit"
                sx={{ p: '10px' }}
                aria-label="search"
                onClick={() => {
                  setSearch(searchWord);
                }}
              >
                <FiSearch size={26} strokeWidth={3} />
              </IconButton>
            </Paper>
          </div>
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
          <div className="d-flex gap-1 mb-5 px-2">
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
                value={startDateSubmit ? startDateSubmit : startDate}
                min={startDate}
                max={endDateSubmit ? endDateSubmit : endDate}
                onChange={handleStartDate}
                required
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
                name="dateEnd"
                id="dateEnd"
                value={endDateSubmit ? endDateSubmit : endDate}
                min={startDateSubmit ? startDateSubmit : startDate}
                max={endDate}
                onChange={handleEndDate}
                required
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseAside;
