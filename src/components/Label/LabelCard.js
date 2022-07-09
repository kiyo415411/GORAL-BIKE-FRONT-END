import { IMAGE_URL } from '../../utils/config';
import useWindowSize from '../hooks/useWindowSize';
function LabelCard(props) {
  let WindowSize = useWindowSize();
  return (
    <div
      className="bg-line py-md-5 justify-content-center col-lg-2 col-4 d-flex align-items-center flex-column overflow-hidden"
      style={WindowSize < 500 ? { height: '100px', width: '100px' } : {}}
    >
      <img
        src={`${IMAGE_URL}/bikes/parts/${props.partsIMG.replace(/ /g, '%20')}`}
        alt="bike"
        className="img-fluid"
      />
      <p className="text-center m-1 d-none d-sm-block">{props.partsName}</p>
    </div>
  );
}

export default LabelCard;
