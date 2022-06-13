import AsideTitle from './Aside/AsideTitle';
import RangeSlider from './Aside/RangeSlider';
import CheckBox from './Aside/CheckBox';
import SearchInput from './Aside/SearchInput';
import CategoryList from './Aside/CategoryList';
import ColorPalette from './Aside/ColorPalette';
import { useState } from 'react';

// 商品篩選邊攔
export default function ActivityAside() {
  const status = ['報名開放中', '報名未開放', '報名已結束'];
  return (
    <div className="product-aside shadow p-4 sticky-top mt-3">
      {/* 關鍵字篩選 */}
      <SearchInput />
      {/* 報名狀態篩選 */}
      <AsideTitle text="車款分類" />
      <CategoryList list={status} />
      {/* 報名費用篩選 */}
      <AsideTitle text="價錢區間" />
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
      <AsideTitle text="顏色篩選" />
      <ColorPalette />
    </div>
  );
}
