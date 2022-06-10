export default function Button({ type, text, onClick, className }) {
  return (
    <button
      type={type}
      className={'btn fs-6 border-2 px-4 py-1 rounded-0 ' + className}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
