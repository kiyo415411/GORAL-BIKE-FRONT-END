import TextField from '@mui/material/TextField';
import { MdArticle } from 'react-icons/md';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

export default function CourseApply() {
  const validationSchema = yup.object({
    firstName: yup.string().required('請輸入姓氏'),
    lastName: yup.string().required('請輸入名字'),
    email: yup
      .string()
      .email('請輸入有效的電子信箱格式')
      .required('請輸入電子信箱'),
    phone: yup
      .string()
      .matches(/^(09)[0-9]{8}$/, '請輸入有效的手機號碼')
      .required('請輸入手機號碼'),
    contactPerson: yup.string().required('請輸入聯絡人姓名'),
    relationship: yup.string().required('請輸入關係'),
    contactPhone: yup
      .string()
      .matches(/^(09)[0-9]{8}$/, '請輸入有效的手機號碼')
      .required('請輸入手機號碼'),
  });

  const formik = useFormik({
    initialValues: {
      firstName: '羊',
      lastName: '百克',
      email: 'testemail@gmail.com',
      phone: '0912345678',
      contactPerson: '羊百客',
      relationship: '弟弟',
      contactPhone: '0923456789',
      rentBike: 'bikeYes',
      clothes: 'personal',
      illness: 'illnessNo',
      illnessText: '',
      food: 'meatYes',
      foodText: '',
      other: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      await new Promise((r) => setTimeout(r, 500));
      alert(JSON.stringify(formik.values, null, 2));
    },
  });

  return (
    <>
      {console.log(formik.values.food)}
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
        <form className="row gy-2 ps-5" onSubmit={formik.handleSubmit}>
          {/* ------------------------------- 基本資料 */}
          <div className="d-flex flex-nowrap col-12 ps-5">
            <p className="m-0 p-0 fs-5">基本資料 Personal Particulars</p>
          </div>
          {/* ----------------------- 姓 */}
          <div className="d-flex flex-nowrap align-items-center col-5 me-4 ps-5">
            <TextField
              id="firstName"
              name="firstName"
              label="姓 Fast Name"
              variant="standard"
              type="search"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              error={
                formik.touched.firstName && Boolean(formik.errors.firstName)
              }
              helperText={
                formik.errors.firstName ? formik.errors.firstName : null
              }
              className="text-field"
            />
          </div>
          {/* ----------------------- 名 */}
          <div className="d-flex flex-nowrap align-items-center col-5 me-4 ps-5">
            <TextField
              id="lastName"
              name="lastName"
              label="名 Last Name"
              variant="standard"
              type="search"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={
                formik.errors.lastName ? formik.errors.lastName : null
              }
              className="text-field"
            />
          </div>
          {/* ----------------------- 電子信箱 */}
          <div className="d-flex flex-nowrap align-items-center col-5 me-4 ps-5">
            <TextField
              id="email"
              name="email"
              label="電子信箱 E-mail"
              variant="standard"
              type="search"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.errors.email ? formik.errors.email : null}
              className="text-field"
            />
          </div>
          {/* ----------------------- 連絡電話 */}
          <div className="d-flex flex-nowrap align-items-center col-5 me-4 ps-5">
            <TextField
              id="phone"
              name="phone"
              label="連絡電話 Phone"
              variant="standard"
              type="search"
              value={formik.values.phone}
              onChange={formik.handleChange}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.errors.phone ? formik.errors.phone : null}
              className="text-field"
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
              variant="standard"
              type="search"
              value={formik.values.contactPerson}
              onChange={formik.handleChange}
              error={
                formik.touched.contactPerson &&
                Boolean(formik.errors.contactPerson)
              }
              helperText={
                formik.errors.contactPerson ? formik.errors.contactPerson : null
              }
              className="text-field"
            />
          </div>
          {/* ----------------------- 關係 */}
          <div className="d-flex flex-nowrap align-items-center col-5 me-4 ps-5">
            <TextField
              id="relationship"
              name="relationship"
              label="關係 Relationship"
              variant="standard"
              type="search"
              value={formik.values.relationship}
              onChange={formik.handleChange}
              error={
                formik.touched.relationship &&
                Boolean(formik.errors.relationship)
              }
              helperText={
                formik.errors.relationship ? formik.errors.relationship : null
              }
              className="text-field"
            />
          </div>
          {/* ----------------------- 連絡電話 */}
          <div className="d-flex flex-nowrap align-items-center col-5 me-4 ps-5">
            <TextField
              id="contactPhone"
              name="contactPhone"
              label="聯絡電話 Contact Phone"
              variant="standard"
              type="search"
              value={formik.values.contactPhone}
              onChange={formik.handleChange}
              error={
                formik.touched.contactPhone &&
                Boolean(formik.errors.contactPhone)
              }
              helperText={
                formik.errors.contactPhone ? formik.errors.contactPhone : null
              }
              className="text-field"
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
              name="rentBike"
              value={formik.values.rentBike}
              onChange={formik.handleChange}
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
          <div className="d-flex flex-nowrap align-items-center col-5 me-4 ps-5">
            <FormControl variant="standard" sx={{ mt: 2, minWidth: 200 }}>
              <InputLabel id="demo-simple-select-standard-label">
                車衣尺寸
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                name="demo-simple-select-standard"
                label="車衣尺寸"
                className="text-content"
                defaultValue={formik.values.clothes}
                onChange={formik.handleChange}
              >
                <MenuItem value="personal">自備車衣</MenuItem>
                <MenuItem value="S">S</MenuItem>
                <MenuItem value="M">M</MenuItem>
                <MenuItem value="L">L</MenuItem>
                <MenuItem value="XL">XL</MenuItem>
                <MenuItem value="XXL">XXL</MenuItem>
                <MenuItem value="3XL">3XL</MenuItem>
                <MenuItem value="XS">XS</MenuItem>
              </Select>
            </FormControl>
          </div>
          {/* ----------------------- 特殊病史 */}
          <div className="d-flex flex-nowrap align-items-center col-5 me-4 ps-5">
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="illness"
              value={formik.values.illness}
              onChange={formik.handleChange}
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
                value={formik.values.illnessText}
                onChange={formik.handleChange}
                sx={{ mb: 2 }}
              />
            </RadioGroup>
          </div>
          {/* ----------------------- 飲食習慣 */}
          <div className="d-flex flex-nowrap align-items-center col-6 ps-5">
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="food"
              value={formik.values.food}
              onChange={formik.handleChange}
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
                value={formik.values.contactText}
                onChange={formik.handleChange}
                sx={{ mb: 2, width: 200 }}
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
              value={formik.values.other}
              onChange={formik.handleChange}
              sx={{ width: 480 }}
            />
          </div>
          <div className="col-12 d-flex justify-content-end mt-3 pe-5">
            <button
              className="text-nowrap m-0 btn fs-6 border-2 px-4 py-1 me-5 rounded-0 btn-primary rounded-pill"
              type="submit"
            >
              送出
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
