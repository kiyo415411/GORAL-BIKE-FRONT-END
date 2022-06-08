// 標籤元件
function BadgeTag({ text, bg }) {
  return (
    <>
      <p
        className="badge rounded-pill px-3 fw-light"
        style={{ background: bg }}
      >
        {text}
      </p>
    </>
  );
}

export default BadgeTag;
