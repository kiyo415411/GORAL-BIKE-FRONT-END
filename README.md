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
    # 範例
    ~/Documents/GORAL-BIKE-FRONT-END (shoppingcart)
    git merge develope
  ```

  3. 如果有衝突需先解決衝突, 沒有衝突直接到步驟 5
  4. 有解決衝突請再做一次

  ```bash=
    # 範例
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


# GoralBike 羊百克
## 設計

<br/> 

![](https://i.imgur.com/5N9OKN4.png)

> **主色 - 穩重的深綠**
 
適騎於山林的登山車，帶來的是穩定的安全感及信任。

> **輔助色 - 輕巧的草綠及灰色**

如同山羚一般，易於穿梭在山林之間。

> **強調色 - 明亮的柿子橙**

象徵自信、隨興及新的開始。
## 首頁
<br/>

| 使用技術/套件 | 
| ---------- | 
| react-slick、Swiper |

<br/>

![](https://i.imgur.com/eqaWh1o.png)
> RWD 響應式網頁設計

減少使用者進行縮放、平移等操作行為，
改善各尺寸裝置的使用者體驗。
<br/>

![](https://i.imgur.com/NTHm2yN.jpg)

![](https://i.imgur.com/FQhY2MV.jpg)
> 動態影片

使用者一進到網站，
即能感受騎乘登山車時的冒險、刺激。

> 資訊輪播

左右切換品項，
可快速獲得概略資訊。

> 專屬區塊連結

透過首頁動態的資訊呈現，
引導使用者至符合需求之頁面。

<br/>

## 會員登入與註冊

<br/>

| 使用技術/套件 | 
| ---------- | 
| formik、yup、sendgrid、passport、sweetalert2、react-bootstrap、moment、material-UI | 

<br/>

![](https://i.imgur.com/ybUOMez.png)

![](https://i.imgur.com/8EGtoHN.png)


> 全站登入、註冊功能

全站皆可藉由導覽列進行會員登入，
方便使用者註冊、加入會員，
快速享受會員專屬的功能。

> 格式驗證機制

提供資料格式的驗證，
並協助輸入正確格式的資料，
提升資料的正確率與有效性。

> 第三方登入

提供快速登入，
減少輸入帳號密碼的時間。
 
> 彈跳式視窗提醒

利用彈跳式視窗，
增加網頁互動回饋感與明確性。

<br />

## 會員中心

<br/>

| 使用技術/套件 | 
| ---------- | 
| formik、yup、passport、sweetalert2、react-bootstrap、moment、material-UI | 

<br/>

![](https://i.imgur.com/ayk2VEn.png)

> 格式驗證

資料修改皆有防呆機制，
避免資料格式錯誤，
減少修改動作的次數。

> 自動安全登出功能

更新密碼後會自動登出，
讓使用者透過新的密碼重新登入，

<br/>

![](https://i.imgur.com/GKNV8ud.png)

> 訂單紀錄

可查看過往訂單紀錄，備有訂單狀態，
提供清楚透明，令人安心的購物環境。

<br/>

![](https://i.imgur.com/amA9xc3.png)

> 最愛收藏 - 課程 | 活動 | 商品

提供個人收藏進行排序、移除、閱覽等動作，
讓使用者能夠快速地找到自己的慾望商品，
並依照自己的需求進行多方考慮，
增進使用者購物的便捷性。

![](https://i.imgur.com/WSEQcPr.png)

> 優惠券

可查看目前所擁有的優惠券，
提供已使用及未使用的分類頁面，
並附有鼠標滑入回饋，
協助資料聚焦，增加網頁互動回饋。

<br/>

## 小羊導覽系統

<br/>

| 使用技術/套件 | 
| ---------- | 
| react-bootstrap、material-UI | 

<br/>

![](https://i.imgur.com/vOaCEE8.jpg)

> 全站浮動

藉由全站浮動，讓導覽羊陪著網站，
給予使用者活潑、可愛的感覺。

<br/>

![](https://i.imgur.com/ONxkhwh.jpg)

> 樣板顏色選擇

提供主色、兩種輔色與白色主題，
皆可切換透明度，增加使用者與網頁的互動性與專屬感。

> 類服務體驗

附有基本需求選單，
可利用滾輪向右滾動。

選擇後會將關鍵字匯入訊息欄位，
發送出去後會收到相對應的回覆，
協助連結至與需求相符的頁面，
給予使用者虛擬服務的體驗。

> 聊天互動

可和小羊進行聊天互動，
提升網頁互動體驗。

<br/>

## 最新消息

<br/>

| 使用技術/套件 | 
| ---------- | 
| swiper、react-bootstrap | 

<br/>

![](https://i.imgur.com/MK6pqB0.jpg)

> 文章搜尋

使用前端陣列篩選減少 axios 次數，
幫助使用者快速尋找資訊。

> 觀看次數

提供觀看次數累計，
增加使用者參與網頁的體驗。

> 熱門文章

依照觀看次數由多至少排列，
幫助使用者得知其他人較為關注的訊息。

<br/>

## 場地資訊

<br/>

| 使用技術/套件 | 
| ---------- | 
| react-leaflet、proj4 | 

<br/>

![](https://i.imgur.com/OXCZHCE.png)

![](https://i.imgur.com/XZFCCS2.jpg)

> 地圖渲染

使用 react-leaflet 進行地圖渲染，
額外繪製台灣各縣市區域，允許使用者直覺操作，
獲取自己想知道的詳細資訊。

> 地圖樣式切換

使用者可選擇自己喜歡的樣式，
增加畫面互動性與豐富表現性。

> 政府公開資料串接

連結政府 81 條林道 API 資料，
透過 proj4 轉換經緯度格式，
提供精確的座標與直覺的圖示標記。

<br/>

## 商品

<br/>

| 使用技術/套件 | 
| ---------- | 
| sweetalert、material-UI、swiper、react-bootstrap | 

<br/>

![](https://i.imgur.com/JVTTOSE.png)

> 篩選器

附有多種條件的選項，
協助快速找到符合需求的資料。

> 呈現方式切換

使用者可依據習慣閱覽的方式，
切換為橫式或直式卡片，提升舒適感。

也可選擇以熱門、新品或價錢調整排序，
減少尋找心儀商品的時間成本。

> 詳細介紹

運用簡潔的排版避免雜亂的資訊，
幫助使用者聚焦在品項資訊上，
給予舒適的網購體驗。

> 品項輪播

在詳細介紹下方備有品項輪播圖，
給予使用者看到更多商品的機會。

<br/>

## 課程

<br/>

| 使用技術/套件 | 
| ---------- | 
| sweetalert、material-UI、formik、yup、swiper、react-bootstrap | 

<br/>

![](https://i.imgur.com/MJErOpX.jpg)

> 篩選器

附有多種條件的選項，
協助快速找到符合需求的課程。

> 呈現方式切換

使用者可依據習慣閱覽的方式，
切換為橫式或直式卡片，提升舒適感。

也可選擇以熱門、新品或價錢調整排序，
減少尋找心儀課程的時間成本。

> 詳細介紹

運用簡潔的排版避免雜亂的資訊，
幫助使用者聚焦在品項資訊上，
給予舒適的網購體驗。

> 浮動報名箱

隨著使用者移動的報名按鈕，
可在閱讀詳細資訊的任何時間點選擇報名或返回列表，
減少使用者反覆捲動的動作，增加網頁使用方便性。

> 報名資料格式驗證

提供資料格式的驗證，
並協助輸入正確格式的資料，
提升資料的正確率與有效性。

> 品項輪播

在詳細介紹下方備有課程輪播圖，
給予使用者看到更多課程的機會。

<br/>


## 活動

<br/>

| 使用技術/套件 | 
| ---------- | 
| sweetalert、material-UI、formik、yup、swiper、react-bootstrap | 

<br/>

![](https://i.imgur.com/SQ9lh59.jpg)



> 篩選器

附有多種條件的選項，
協助快速找到符合需求的活動。

> 呈現方式切換

使用者可依據習慣閱覽的方式，
切換為橫式或直式卡片，提升舒適感。

也可選擇以熱門、新品或價錢調整排序，
減少尋找心儀活動的時間成本。

> 詳細介紹

運用簡潔的排版避免雜亂的資訊，
幫助使用者聚焦在活動資訊上，
給予舒適的網購體驗。

> 浮動報名箱

隨著使用者移動的報名按鈕，
可在閱讀詳細資訊的任何時間點選擇報名或返回列表，
減少使用者反覆捲動的動作，增加網頁使用方便性。

> 報名資料格式驗證

提供資料格式的驗證，
並協助輸入正確格式的資料，
提升資料的正確率與有效性。

> 品項輪播

在詳細介紹下方備有活動輪播圖，
給予使用者看到更多活動的機會。

<br/>


## 客製化

<br/>

| 使用技術/套件 | 
| ---------- | 
| react-three:drei/fiber/gltfjsx、formik、yup、react-bootstrap、react-colorful、sweetalert2 | 

<br/>

![](https://i.imgur.com/hs1o67I.png)

> 線上 3D 客製登山車

運用 react-three 建置 3D 場景，
提升視覺動態效果，讓使用者有更直覺的客製呈現。

> 16 個登山車零件顏色自訂

提供多達 16 個部位顏色調配，
提升客製慾望。

> 設計紀錄儲存

會員專屬功能，可儲存多種客製版本，
也可對過往設計進行修改，給予使用者自由調整的空間。

> 資料格式驗證

提供資料格式的驗證，
並協助輸入正確格式的資料，
提升資料的正確率與有效性。

> 會員資料自動填入功能

會員專屬功能，在登入狀態下申請客製化時，
表單會自動填入會員資料，減少會員重複輸入資料的動作。

## 購物車

<br/>

| 使用技術/套件 | 
| ---------- | 
| formik、yup、sweetalert2、react-bootstrap、moment | 

<br/>

![](https://i.imgur.com/Yg5Oq4Z.png)

> 批次處理

提供批次勾選，對複數品項進行快速選擇或移除。

> 即時編輯

可進行數量修改、收藏編輯、
選擇這次想購買的品項，也可以移除商品。

> 優惠券使用

利用選單輔以優惠券內容說明，
協助使用者使用優惠券，體驗節慶優惠的喜悅。


