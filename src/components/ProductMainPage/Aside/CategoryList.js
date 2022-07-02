import { useState, useEffect } from 'react';

export default function CategoryList(props) {
  const [status, setStatus] = useState(0);
  useEffect(() => {
    status === 0
      ? props.setCurrentCategory()
      : props.setCurrentCategory(status);
  }, [status]);
  return (
    <ul className="list-unstyled d-grid gap-2">
      {props.list.map((v, i) => {
        return (
          <li key={i}>
            <a
              href="#/"
              className={status === i ? 'link-highlight ' : 'link-content'}
              onClick={() => {
                setStatus(i);
              }}
              onMouseLeave={(e) => {
                e.target.height = '100px';
              }}
            >
              {v.product_category_name}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
