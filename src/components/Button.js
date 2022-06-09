export default function Button({ text, onClick, className }) {
  return (
    <a
      href="#/"
      className={className + ' btn fs-6 rounded-pill border-2 px-4 py-1'}
      onClick={onClick}
    >
      {text}
    </a>
  );
}
