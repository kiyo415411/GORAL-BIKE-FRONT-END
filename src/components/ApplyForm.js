import Modal from 'react-bootstrap/esm/Modal';
import TextField from '@mui/material/TextField';
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
import { MdArticle } from 'react-icons/md';
import swal from 'sweetalert';
import { useCourseCart } from '../utils/useCourseCart';
import { useActivityCart } from '../utils/useActivityCart';

export default function ApplyForm({
  formName,
  show,
  handleClose,
  id,
  name,
  image,
  price,
  quantity,
  cartMethod,
}) {
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

  const CourseCart = useCourseCart();
  const ActivityCart = useActivityCart();

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      contactPerson: '',
      relationship: '',
      contactPhone: '',
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
      alert(JSON.stringify({ id, name, image, price, quantity }, null, 2));
      handleClose();
      if (cartMethod === 'course') {
        CourseCart.addItem({ id, name, image, price, quantity });
      } else if (cartMethod === 'activity') {
        ActivityCart.addItem({ id, name, image, price, quantity });
      }
      swal('加入購物車', '成功', 'success');
    },
  });

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton></Modal.Header>
      {/* ----------------------- 表單內容 */}
      <Modal.Body>
        <div className="mb-4">
          <h4 className="m-0 p-0 ms-3">
            <span className="text-highlight me-2">
              <MdArticle />
            </span>
            {formName}
          </h4>
        </div>
        <form
          className="row gy-3 px-5"
          onReset={formik.handleReset}
          onSubmit={formik.handleSubmit}
        >
          {/* ------------------------------- 基本資料 */}
          <div className="text-nowrap">
            <p className="m-0 p-0 fs-5">基本資料 Personal Particulars</p>
          </div>
          {/* ----------------------- 姓 */}
          <div className="d-flex flex-nowrap col-6">
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
          <div className="d-flex flex-nowrap col-6">
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
          <div className="d-flex flex-nowrap col-6">
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
          <div className="d-flex flex-nowrap col-6">
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
          <div className="text-nowrap">
            <p className="m-0 p-0 fs-5">緊急聯絡 Emergency Contact</p>
          </div>
          {/* ----------------------- 緊急聯絡人 */}
          <div className="d-flex flex-nowrap col-6">
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
          <div className="d-flex flex-nowrap col-6">
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
          <div className="d-flex flex-nowrap col-6">
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
          <div className="text-nowrap">
            <p className="m-0 p-0 fs-5">需求填寫 Eequirement </p>
          </div>
          {/* ----------------------- 單車租借 */}
          <div className="d-flex flex-nowrap col-6">
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="rentBike"
              value={formik.values.rentBike}
              onChange={formik.handleChange}
            >
              <p className="col-12 text-label fs-7 m-0 p-0">單車租借</p>
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
          <div className="d-flex flex-nowrap col-6">
            <FormControl variant="standard" className="col-12">
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
          <div className="d-flex flex-nowrap col-6">
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="illness"
              value={formik.values.illness}
              onChange={formik.handleChange}
            >
              <p className="col-12 text-label fs-7 m-0 p-0">特殊病史</p>
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
              />
            </RadioGroup>
          </div>
          <div className="d-flex flex-nowrap col-6">
            <TextField
              id="illnessText"
              name="illnessText"
              label="病史描述"
              type="search"
              variant="standard"
              value={formik.values.illnessText}
              onChange={formik.handleChange}
            />
          </div>
          {/* ----------------------- 飲食習慣 */}
          <div className="d-flex flex-nowrap col-6">
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="food"
              value={formik.values.food}
              onChange={formik.handleChange}
            >
              <p className="col-12 text-label fs-7 m-0 p-0">飲食習慣</p>
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
              />
            </RadioGroup>
          </div>
          <div className="d-flex flex-nowrap col-6">
            <TextField
              id="foodText"
              name="foodText"
              label="其他飲食習慣"
              type="search"
              variant="standard"
              value={formik.values.contactText}
              onChange={formik.handleChange}
            />
          </div>
          {/* ----------------------- 備註 */}
          <div className="d-flex flex-nowrap col-12">
            <TextField
              id="other"
              name="other"
              label="備註"
              type="search"
              variant="standard"
              value={formik.values.other}
              onChange={formik.handleChange}
              className="col-12"
              helperText="其他協助請於此說明，結帳完成後由專人與您聯繫。"
            />
          </div>
          <div className="d-flex justify-content-between mt-4 mb-2">
            <button
              className="text-nowrap m-0 btn fs-6 border-2 px-5 py-1 rounded-0 btn-primary rounded-pill"
              type="reset"
            >
              清除
            </button>
            <button
              className="text-nowrap m-0 btn fs-6 border-2 px-5 py-1 rounded-0 btn-outline-primary rounded-pill"
              type="submit"
            >
              加入購物車
            </button>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
}
