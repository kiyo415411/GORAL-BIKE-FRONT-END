import axios from 'axios';
import { useState, useEffect } from 'react';
function DataAPI() {
  const [response, setResponse] = useState([]);
  const url =
    'https://data.coa.gov.tw/Service/OpenData/DataFileService.aspx?UnitId=151';
  useEffect(() => {
    const data = async () => {
      // 連接政府81條林道 API資料
      const data = await axios.get(url);
      // 設定資料 setResponse->response
      setResponse(data.data);
    };
    data();
  }, []);

  return response;
}
export default DataAPI;
