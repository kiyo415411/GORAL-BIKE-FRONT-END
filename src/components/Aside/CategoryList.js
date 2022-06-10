export default function CategoryList({ list }) {
  return (
    <ul className="list-unstyled d-grid gap-3 mb-5">
      {list.map((v, i) => {
        return (
          <li key={i}>
            <a href="#/">{v}</a>
          </li>
        );
      })}
    </ul>
  );
}
