# Goral 前端專案

MFEE25 第六組大專 Goral

## 開啟專案

1. `git clone https://github.com/Zaynliao/GORAL-BIKE-FRONT-END`
2. `npm i`
3. `npm start`

## 關於切版分支

- 分支這樣開: 功能名稱 `ex. course`, 功能名稱用`-`連接
- 請在完成"切版"或完成"功能"後 merge 回 `develop` 分支
- merge 前請先將自己的功能分支所有的變更 push 到遠端

- merge 步驟 :
  1. 先切換至 `develope` 做 `git pull` 將遠端版本跟本地同步
  2. 在自己的功能分支 `git merge develope`

```bash=
  #範例
  ~/Documents/GORAL-BIKE-FRONT-END (shoppingcart)
  git merge develope
```

3. 如果有衝突需先解決衝突
4. 有解決衝突請再做一次

```bash=
  #範例
  git add .
  git commit -m "[UPDATE]Merge develop into shoppingcart"
  git push

```

5. 切換到 `develope` 分支再輸入 `git merge "你的分支名稱"`
6. 在 `develope` 分支做 `git push` 將 merge 完成的結果推回遠端

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
