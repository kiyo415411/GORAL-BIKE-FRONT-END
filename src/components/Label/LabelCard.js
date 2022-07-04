import { IMAGE_URL } from '../../utils/config';

function LabelCard(props) {
  return (
    <div className="bg-line py-5 border border-white border-5 col-2 d-flex justify-content-center align-items-center flex-column">
      <img
        src={`${IMAGE_URL}/bikes/parts/${props.partsIMG.replace(/ /g, '%20')}`}
        alt="bike"
      />
      <p className="text-center m-1">{props.partsName}</p>
    </div>
  );
}

export default LabelCard;
