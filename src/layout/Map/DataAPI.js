import axios from 'axios';

async function getData() {
  try {
    const url =
      'https://data.coa.gov.tw/Service/OpenData/DataFileService.aspx?UnitId=151';
    const respones = await axios.get(url);
    return respones.data;
  } catch (e) {
    throw new Error(e);
  }
}

export default getData;
