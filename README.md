# Goral 前端專案

MFEE25 第六組大專 Goral

## 開啟專案

1. `git clone https://github.com/Zaynliao/GORAL-BIKE-FRONT-END`
2. `npm i`
3. `npm start`

## 關於切版分支

- 分支這樣開: 功能名稱 `ex. course`, 功能名稱用`-`連接
- 完成後 merge 回: `develope`
  - 先切換到 develope 再輸入 git merge "你的分支名稱"

## 關於 style

- `all.scss` 用於 import 所有 scss 檔案
- 其餘的 scss 統一前綴加`_` 表示是被 import 的檔案
- scss 統一放在 stylesheet
- `/stylesheet/helper/_variables` 是放置 bootstrap 變數，如有修改請增加註解
- `/stylesheet/_global` 是放置全域的 css 設定
- class 命名原則：BEM 規範思維

## 關於頁面

- 放在 pages 資料夾
- 命名原則：大駝峰式命名 ex.ResetPassword.js

## 關於 font-size

- 分頁標題：H1
- 卡片標題：H3
- 活動/課程日期：H5
- 按鈕文字：H6
- 內文：P
- 篩選標題：H4

## 關於 commit message

- `[ADD]:` 新增檔案
- `[FIX]:` 修正 BUG
- `[DELETE]:` 刪除檔案
- `[UPDATE]:` 修改既有檔案
