function LabelCard(props) {
  return (
    <div className="bg-line py-5 border border-white border-5 col-2 d-flex justify-content-center align-items-center flex-column">
      <img src={require(`../../images/bikes/${props.name}.png`)} alt="bike" />
      <p className="text-center m-1">{props.name}</p>
    </div>
  );
}

export default LabelCard;
