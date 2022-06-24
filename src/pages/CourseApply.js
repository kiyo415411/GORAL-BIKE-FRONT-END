import TextField from '@mui/material/TextField';
import { MdArticle } from 'react-icons/md';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

export default function CourseApply() {
  const [member, setMember] = useState({
    firstName: '羊',
    lastName: '百克',
    email: 'testemail@gmail.com',
    phone: '0912345678',
    contactPerson: 'Goral Bike',
    relationship: '弟弟',
    contactPhone: '0923456789',
    rentBike: 'bikeYes',
    clothes: 0,
    illness: 'illnessNo',
    illnessText: '',
    food: 'meatYes',
    foodText: '',
    other: '',
  });

  function handleChange(e) {
    setMember({ ...member, [e.target.name]: e.target.value });
    console.log(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      // let response = await axios.post(`${API_URL}/auth/register`, member);
      // // console.log(response.data);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <>
      <div className="col-4 shadow text-content py-5 m-5">
        {/* ----------------------- 表頭 */}
        <div className="d-flex flex-nowrap align-items-center col-12 ms-5 mb-4">
          <h4 className="m-0 p-0">
            <span className="text-highlight me-2">
              <MdArticle />
            </span>
            課程報名表
          </h4>
        </div>
        <div className="row gy-2 ps-5">
          {/* ------------------------------- 基本資料 */}
          <div className="d-flex flex-nowrap col-12 ps-5">
            <p className="m-0 p-0 fs-5">基本資料 Personal Particulars</p>
          </div>
          {/* ----------------------- 姓 */}
          <div className="d-flex flex-nowrap align-items-center col-5 me-4 ps-5">
            <TextField
              id="firstName"
              label="姓 First Name"
              type="search"
              variant="standard"
              name="firstName"
              defaultValue={member.firstName}
              onChange={handleChange}
              required
            />
          </div>
          {/* ----------------------- 名 */}
          <div className="d-flex flex-nowrap align-items-center col-5 me-4 ps-5">
            <TextField
              id="lastName"
              name="lastName"
              label="名 Last Name"
              type="search"
              variant="standard"
              defaultValue={member.lastName}
              onChange={handleChange}
              required
            />
          </div>
          {/* ----------------------- 電子信箱 */}
          <div className="d-flex flex-nowrap align-items-center col-5 me-4 ps-5">
            <TextField
              id="email"
              name="email"
              label="電子信箱 E-mail"
              type="search"
              variant="standard"
              defaultValue={member.email}
              onChange={handleChange}
              required
            />
          </div>
          {/* ----------------------- 連絡電話 */}
          <div className="d-flex flex-nowrap align-items-center col-5 me-4 ps-5">
            <TextField
              id="phone"
              name="phone"
              label="聯絡電話 Phone"
              type="search"
              variant="standard"
              defaultValue={member.phone}
              onChange={handleChange}
              required
            />
          </div>
          {/* ------------------------------- 緊急聯絡 */}
          <div className="d-flex flex-nowrap col-12 mt-5 ps-5">
            <p className="m-0 p-0 fs-5">緊急聯絡 Emergency Contact</p>
          </div>
          {/* ----------------------- 緊急聯絡人 */}
          <div className="d-flex flex-nowrap align-items-center col-5 me-4 ps-5">
            <TextField
              id="contactPerson"
              name="contactPerson"
              label="緊急聯絡人 Contact Person"
              type="search"
              variant="standard"
              defaultValue={member.contactPerson}
              onChange={handleChange}
              required
            />
          </div>
          {/* ----------------------- 關係 */}
          <div className="d-flex flex-nowrap align-items-center col-5 me-4 ps-5">
            <TextField
              id="relationship"
              name="relationship"
              label="關係 Relationship"
              type="search"
              variant="standard"
              defaultValue={member.relationship}
              onChange={handleChange}
              required
            />
          </div>
          {/* ----------------------- 連絡電話 */}
          <div className="d-flex flex-nowrap align-items-center col-5 me-4 ps-5">
            <TextField
              id="contactPhone"
              name="contactPhone"
              label="聯絡電話 Contact Phone"
              type="search"
              variant="standard"
              defaultValue={member.contactPhone}
              onChange={handleChange}
              required
            />
          </div>
          {/* ------------------------------- 需求資料 */}
          <div className="d-flex flex-nowrap col-12 mt-5 mb-3 ps-5">
            <p className="m-0 p-0 fs-5">需求填寫 Eequirement </p>
          </div>
          {/* ----------------------- 單車租借 */}
          <div className="d-flex flex-nowrap align-items-center col-5 me-4 ps-5">
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              defaultValue={member.rentBike}
              onChange={handleChange}
            >
              <p className="m-0 col-12 mb-3">單車租借</p>
              <FormControlLabel
                value="bikeYes"
                control={
                  <Radio
                    size="small"
                    sx={{
                      color: 'var(--bs-secondary)',
                      '&.Mui-checked': {
                        color: 'var(--bs-secondary)',
                      },
                    }}
                  />
                }
                label="需要"
              />
              <FormControlLabel
                value="bikeNo"
                control={
                  <Radio
                    size="small"
                    sx={{
                      color: 'var(--bs-secondary)',
                      '&.Mui-checked': {
                        color: 'var(--bs-secondary)',
                      },
                    }}
                  />
                }
                label="不需要"
              />
            </RadioGroup>
          </div>
          {/* ----------------------- 車衣尺寸 */}
          <div className="d-flex flex-nowrap align-items-center col-6">
            <FormControl variant="standard" sx={{ mt: 2, minWidth: 200 }}>
              <InputLabel id="demo-simple-select-standard-label">
                車衣尺寸
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                label="車衣尺寸"
                className="text-content"
                defaultValue={member.clothes}
                onChange={handleChange}
              >
                <MenuItem value={0}>自備車衣</MenuItem>
                <MenuItem value={1}>S</MenuItem>
                <MenuItem value={2}>M</MenuItem>
                <MenuItem value={3}>L</MenuItem>
                <MenuItem value={4}>XL</MenuItem>
                <MenuItem value={5}>XXL</MenuItem>
                <MenuItem value={6}>3XL</MenuItem>
                <MenuItem value={7}>XS</MenuItem>
              </Select>
            </FormControl>
          </div>
          {/* ----------------------- 特殊病史 */}
          <div className="d-flex flex-nowrap align-items-center col-5 me-4 ps-5">
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              defaultValue={member.illness}
              onChange={handleChange}
            >
              <p className="m-0 col-12">特殊病史</p>
              <FormControlLabel
                value="illnessNo"
                control={
                  <Radio
                    size="small"
                    sx={{
                      color: 'var(--bs-secondary)',
                      '&.Mui-checked': {
                        color: 'var(--bs-secondary)',
                      },
                    }}
                  />
                }
                label="無"
              />
              <FormControlLabel
                value="illnessYes"
                control={
                  <Radio
                    size="small"
                    sx={{
                      color: 'var(--bs-secondary)',
                      '&.Mui-checked': {
                        color: 'var(--bs-secondary)',
                      },
                    }}
                  />
                }
                label="有"
                className="d-flex me-4 ps-5"
              />
              <TextField
                id="illnessText"
                name="illnessText"
                label="病史描述"
                type="search"
                variant="standard"
                defaultValue={member.illnessText}
                onChange={handleChange}
                required
                sx={{ mb: 2 }}
              />
            </RadioGroup>
          </div>
          {/* ----------------------- 飲食習慣 */}
          <div className="d-flex flex-nowrap align-items-center col-6">
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              defaultValue={member.food}
              onChange={handleChange}
            >
              <p className="m-0 col-12">飲食習慣</p>
              <FormControlLabel
                value="meatYes"
                control={
                  <Radio
                    size="small"
                    sx={{
                      color: 'var(--bs-secondary)',
                      '&.Mui-checked': {
                        color: 'var(--bs-secondary)',
                      },
                    }}
                  />
                }
                label="葷食"
              />
              <FormControlLabel
                value="meatNo"
                control={
                  <Radio
                    size="small"
                    sx={{
                      color: 'var(--bs-secondary)',
                      '&.Mui-checked': {
                        color: 'var(--bs-secondary)',
                      },
                    }}
                  />
                }
                label="素食"
                className="d-flex me-4 ps-5"
              />
              <TextField
                id="foodText"
                name="foodText"
                label="其他飲食習慣"
                type="search"
                variant="standard"
                defaultValue={member.foodText}
                onChange={handleChange}
                sx={{ mb: 2 }}
              />
            </RadioGroup>
          </div>
          {/* ----------------------- 備註 */}
          <div className="d-flex flex-nowrap align-items-center col-12 ps-5">
            <TextField
              id="other"
              name="other"
              label="備註 | 如需特殊協助請於此欄詳細說明，將於報名確認後由專人與您聯繫。"
              type="search"
              variant="standard"
              defaultValue={member.other}
              onChange={handleChange}
              sx={{ width: 470 }}
            />
          </div>
          <Link to={''}>
            <div className="col-12 d-flex justify-content-end mt-3 pe-5">
              <p
                className="text-nowrap m-0 btn fs-6 border-2 px-4 py-1 me-5 rounded-0 btn-primary rounded-pill"
                onClick={handleSubmit}
              >
                送出
              </p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
