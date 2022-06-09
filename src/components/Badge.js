// 標籤元件
function Badge({ text, className }) {
  return (
    <>
      <p className={className + ' badge rounded-pill px-3 fw-light'}>{text}</p>
    </>
  );
}

export default Badge;
