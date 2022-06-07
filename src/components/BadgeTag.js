function BadgeTag({ text, bg }) {
  return (
    <>
      <h4 className="badge rounded-pill px-3 fs-6 fw-light bg-success">
        {text}
      </h4>
    </>
  );
}

export default BadgeTag;
