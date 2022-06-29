export default function CategoryList({ list, statu, setStatu, setPage }) {
  return (
    <ul className="list-unstyled d-grid gap-3 mb-5 ms-2">
      {list.map((v, i) => {
        return (
          <li key={i + 1}>
            <a
              href="#/"
              className={statu === i + 1 ? 'link-highlight' : 'link-content'}
              onClick={() => {
                if (statu === i + 1) {
                  setStatu('');
                } else {
                  setStatu(i + 1);
                }
                setPage(1);
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
