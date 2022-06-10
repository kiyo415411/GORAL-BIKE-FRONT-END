export default function RangeSlider({
  min, // 最小值
  max, // 最大值
  step, // 間隔
  setmin, // 範圍最小值選擇
  setmax, // 範圍最大值選擇
  startunit, // 前綴單位
  endunit, // 後綴單位
  text, // 按鈕字串
}) {
  return (
    <div>
      <input
        type="range"
        className="form-range"
        min={min}
        max={max}
        step={step}
      />
      <div className="d-flex align-items-center justify-content-between  mb-5">
        <p className="m-0 fs-5">
          {startunit}
          {setmin} {endunit} - {startunit}
          {setmax} {endunit}
        </p>
        <button className="btn fs-6 border-2 px-4 py-1 rounded-0 btn-primary rounded-pill">
          篩選
        </button>
      </div>
    </div>
  );
}
