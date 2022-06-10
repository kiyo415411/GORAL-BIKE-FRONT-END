export default function CheckBox({ text, id }) {
  return (
    <div className="form-check text-primary">
      <input className="form-check-input" type="checkbox" id={id} />
      <label className="form-check-label" htmlFor={id}>
        {text}
      </label>
    </div>
  );
}
