import { FaThLarge, FaThList, FaFilter } from 'react-icons/fa';
import Dropdown from 'react-bootstrap/Dropdown';
import { useState, useContext } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CategoryList from './Aside/CategoryList';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import { FiSearch } from 'react-icons/fi';
import { BsCalendar3 } from 'react-icons/bs';

export default function TopSort(props) {
  const Data = useContext(props.contextValue);
  const [show, setShow] = useState(false);

  // 價錢
  const handlePrice = (event, newPrice) => {
    Data.setPrice(newPrice);
  };

  // 人數
  const handlePerson = (event, newPerson) => {
    Data.setPerson(newPerson);
  };

  const handleSearch = (e) => {
    Data.setSearchWord(e.target.value);
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

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className={`d-flex justify-content-between px-3 ${props.className}`}>
      <ul className="list-unstyled d-flex gap-2">
        <li>
          <a
            href="#/"
            className={
              props.cardStyle === 'row' ? 'link-highlight' : 'link-content'
            }
            onClick={() => {
              props.setCardStyle('row');
              Data.setPage(1);
            }}
          >
            <FaThList />
          </a>
        </li>
        <li>
          <a
            href="#/"
            className={
              props.cardStyle === 'col' ? 'link-highlight' : 'link-content'
            }
            onClick={() => {
              props.setCardStyle('col');
              Data.setPage(1);
            }}
          >
            <FaThLarge />
          </a>
        </li>
      </ul>
      {/* ------------------------------------排序 */}
      <div className="mb-2 d-none d-xl-block">
        <Dropdown>
          <Dropdown.Toggle
            variant="white"
            id="dropdown-basic"
            className="link-highlight"
          >
            {props.sortMethod === 'newSort'
              ? '最新上架優先'
              : props.sortMethod === 'hotSort'
              ? '人數由多至少'
              : props.sortMethod === 'cheapSort'
              ? '價錢由低至高'
              : '價錢由高至低'}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item
              onClick={() => {
                props.setSortMethod('newSort');
              }}
            >
              最新上架優先
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                props.setSortMethod('hotSort');
              }}
            >
              人數由多至少
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                props.setSortMethod('cheapSort');
              }}
            >
              價錢由低至高
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                props.setSortMethod('expensiveSort');
              }}
            >
              價錢由高至低
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className="mb-2 d-block d-xl-none link-content">
        <FaFilter onClick={handleShow} />
        <Offcanvas show={show} onHide={handleClose} style={{ width: '20rem' }}>
          <div className="rwd-aside-scrollbar">
            <Offcanvas.Body className="pt-4">
              <div className="d-flex align-items-start">
                <Paper
                  className="border-secondary border-2 rounded-pill d-flex align-items-center ps-5 pe-3 mb-5"
                  variant="outlined"
                  sx={{ width: '15rem', height: '2rem', marginLeft: '-2rem' }}
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
                <Dropdown>
                  <Dropdown.Toggle
                    variant="white"
                    id="dropdown-basic"
                    className="link-secondary"
                  >
                    排序
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item
                      onClick={() => {
                        props.setSortMethod('newSort');
                      }}
                    >
                      最新上架優先
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => {
                        props.setSortMethod('hotSort');
                      }}
                    >
                      人數由多至少
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => {
                        props.setSortMethod('cheapSort');
                      }}
                    >
                      價錢由低至高
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => {
                        props.setSortMethod('expensiveSort');
                      }}
                    >
                      價錢由高至低
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className="list-title fs-4 mb-2 text-content">報名狀態</div>
              <div className="list-title-line border border-secondary mb-3 ms-1" />
              <CategoryList
                list={Data.state}
                statu={Data.statu}
                setStatu={Data.setStatu}
                setPage={Data.setPage}
                contextValue={props.contextValue}
              />
              <div className="list-title fs-4 mb-2 text-content">報名費用</div>
              <div className="list-title-line border border-secondary mb-3 ms-1" />
              <Box sx={{ width: 220 }} className="ms-3">
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
                  value={Data.price ? Data.price : []}
                  onChange={handlePrice}
                  step={100}
                  min={Data.originPrice[0]}
                  max={Data.originPrice[1]}
                />
              </Box>
              {/* toLocaleString() --> 將數字千位格式化*/}
              <div className="d-flex align-items-center justify-content-between px-3 mb-5">
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
                  className="btn badge fs-6 border-2 px-3 rounded-0 btn-primary rounded-pill"
                  onClick={() => {
                    Data.setPriceSubmit(Data.price);
                    Data.setPage(1);
                  }}
                >
                  篩選
                </button>
              </div>
              <div className="list-title fs-4 mb-2 text-content">報名人數</div>
              <div className="list-title-line border border-secondary mb-3 ms-1" />
              <Box sx={{ width: 220 }} className="ms-3">
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
              <div className="d-flex align-items-center justify-content-between px-3 mb-5">
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
                  className="btn badge fs-6 border-2 px-3 rounded-0 btn-primary rounded-pill"
                  onClick={() => {
                    Data.setPersonSubmit(Data.person);
                    Data.setPage(1);
                  }}
                >
                  篩選
                </button>
              </div>
              <div className="list-title fs-4 mb-2 text-content">類別篩選</div>
              <div className="list-title-line border border-secondary mb-4 ms-1" />
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
              <div className="list-title fs-4 mb-2 text-content">日期區間</div>
              <div className="list-title-line border border-secondary mb-4 ms-1" />
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
                      Data.startDateSubmit
                        ? Data.startDateSubmit
                        : Data.startDate
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
                    value={
                      Data.endDateSubmit ? Data.endDateSubmit : Data.endDate
                    }
                    min={
                      Data.startDateSubmit
                        ? Data.startDateSubmit
                        : Data.startDate
                    }
                    max={Data.endDate}
                    onChange={handleEndDate}
                  />
                </div>
              </div>
            </Offcanvas.Body>
          </div>
        </Offcanvas>
      </div>
    </div>
  );
}
