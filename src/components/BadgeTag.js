// 標籤元件
function BadgeTag({ text, bg }) {
  return (
    <>
      <h4 className="badge rounded-pill px-3 fs-6 fw-light bg-secondary">
        {text}
      </h4>
    </>
  );
}

export default BadgeTag;
