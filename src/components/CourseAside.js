import AsideTitle from './Aside/AsideTitle';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import CategoryList from './Aside/CategoryList';
import { BsCalendar3 } from 'react-icons/bs';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import { FiSearch } from 'react-icons/fi';
import { useContext } from 'react';
import { ActivityValue } from '../pages/ActivityList';
import { CourseValue } from '../pages/CourseList';

function CourseAside({ contextValue }) {
  const Data = useContext(contextValue);

  // ----------------------------------------------- 變化處理

  // 價錢
  const handlePrice = (event, newPrice) => {
    Data.setPrice(newPrice);
  };
  // 人數
  const handlePerson = (event, newPerson) => {
    Data.setPerson(newPerson);
  };
  // 最早日期
  const handleStartDate = (e) => {
    const startDateValue = e.target.value;
    Data.setPage(1);
    Data.setStartDateSubmit(startDateValue);
  };
  // 最晚日期
  const handleEndDate = (e) => {
    const endDateValue = e.target.value;
    Data.setPage(1);
    Data.setEndDateSubmit(endDateValue);
  };

  // 難度
  const handleChecked = (e) => {
    const value = Number(e.target.value);
    if (!Data.category.includes(value))
      return Data.setCategory([...Data.category, value]);
    if (Data.category.includes(value)) {
      const newCategory = Data.category.filter((v) => v !== value);
      Data.setPage(1);
      Data.setCategory(newCategory);
    }
  };

  const handleSearch = (e) => {
    Data.setSearchWord(e.target.value);
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
                placeholder="搜尋名稱"
                value={Data.searchWord}
                onChange={handleSearch}
              />
              <IconButton
                className="text-line"
                type="submit"
                sx={{ p: '10px' }}
                aria-label="search"
                onClick={() => {
                  Data.setPage(1);
                  Data.setSearch(Data.searchWord);
                }}
              >
                <FiSearch size={26} strokeWidth={3} />
              </IconButton>
            </Paper>
          </div>
          {/* 報名狀態篩選 */}
          <AsideTitle text="報名狀態" />
          <CategoryList
            list={Data.state}
            statu={Data.statu}
            setStatu={Data.setStatu}
            setPage={Data.setPage}
            contextValue={contextValue}
          />
          {/* 報名費用篩選 */}
          <AsideTitle text="報名費用" />
          <Box sx={{ width: 250 }} className="mx-auto">
            <Slider
              getAriaLabel={() => 'Minimum distance'}
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
              value={Data.price ? Data.price : []}
              onChange={handlePrice}
              step={100}
              min={Data.originPrice[0]}
              max={Data.originPrice[1]}
            />
          </Box>
          {/* toLocaleString() --> 將數字千位格式化*/}
          <div className="d-flex align-items-center justify-content-between px-2 mb-5">
            <p className="m-0 fs-6">
              {Data.price
                ? '$ ' +
                  Data.price[0].toLocaleString() +
                  ' - ' +
                  '$ ' +
                  Data.price[1].toLocaleString()
                : ''}
            </p>
            <button
              className="btn fs-6 border-2 px-4 py-1 rounded-0 btn-primary rounded-pill"
              onClick={() => {
                Data.setPriceSubmit(Data.price);
                Data.setPage(1);
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
              value={Data.person ? Data.person : []}
              onChange={handlePerson}
              step={5}
              min={Data.originPerson[0]}
              max={Data.originPerson[1]}
            />
          </Box>
          {/* toLocaleString() --> 將數字千位格式化*/}
          <div className="d-flex align-items-center justify-content-between px-2 mb-5">
            <p className="m-0 fs-6">
              {Data.person
                ? Data.person[0].toLocaleString() +
                  ' 人' +
                  ' - ' +
                  Data.person[1].toLocaleString() +
                  ' 人'
                : ''}
            </p>
            <button
              className="btn fs-6 border-2 px-4 py-1 rounded-0 btn-primary rounded-pill"
              onClick={() => {
                Data.setPersonSubmit(Data.person);
                Data.setPage(1);
              }}
            >
              篩選
            </button>
          </div>
          {/* 活動地點 */}
          <AsideTitle text="類別篩選" />
          <div className="mb-5 ms-2 row">
            {Data.categoryLabel.map((v, i) => {
              return (
                <div
                  className="form-check text-primary col-6"
                  key={'Data.category' + i}
                >
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={'Data.category' + i}
                    value={Number(i + 1)}
                    checked={Data.category.includes(i + 1)}
                    onChange={handleChecked}
                  />
                  <label
                    className="form-check-label"
                    htmlFor={'Data.category' + i}
                  >
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
                value={
                  Data.startDateSubmit ? Data.startDateSubmit : Data.startDate
                }
                min={Data.startDate}
                max={Data.endDateSubmit ? Data.endDateSubmit : Data.endDate}
                onChange={handleStartDate}
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
                value={Data.endDateSubmit ? Data.endDateSubmit : Data.endDate}
                min={
                  Data.startDateSubmit ? Data.startDateSubmit : Data.startDate
                }
                max={Data.endDate}
                onChange={handleEndDate}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseAside;
