export default function CategoryList({ list, statu, setStatu }) {
  return (
    <ul className="list-unstyled d-grid gap-3 mb-5">
      {list.map((v, i) => {
        return (
          <li key={i + 1}>
            <a
              href="#/"
              className={statu === i + 1 ? 'link-hightlight' : 'link-content'}
              onClick={() => {
                setStatu(i + 1);
              }}
            >
              {v}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
