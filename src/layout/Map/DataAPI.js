import axios from 'axios';

// 以函式呼叫的方式請求政府公開平台-林道81條的API的資料
// 不可以使用REACT元件形式呼叫，寫法上可以執行，但是無法使用useStates儲存

async function getData() {
  try {
    const url =
      'https://data.coa.gov.tw/Service/OpenData/DataFileService.aspx?UnitId=151';
    const respones = await axios.get(url);

    // 回傳資料
    return respones.data;
  } catch (e) {
    throw new Error(e);
  }
}

export default getData;
