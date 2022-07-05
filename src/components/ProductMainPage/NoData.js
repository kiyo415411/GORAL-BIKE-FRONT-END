import { IMAGE_URL } from '../../utils/config';

export default function NoData() {
  return (
    <div className="d-flex justify-content-center flex-column">
      <div
        style={{ background: '#FFC0CB', color: 'red', height: '100px' }}
        className="d-flex justify-content-center align-items-center"
      >
        No Data
      </div>
    </div>
  );
}
