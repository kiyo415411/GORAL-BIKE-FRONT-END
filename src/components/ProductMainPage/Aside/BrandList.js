import { useState, useEffect } from 'react';

export default function CategoryList(props) {
  const [status, setStatus] = useState(0);

  useEffect(() => {
    status === 0 ? props.setCurrentBrand() : props.setCurrentBrand(status);
  }, [status]);
  return (
    <ul className="list-unstyled d-grid gap-2">
      {props.brand.map((v, i) => {
        return (
          <li key={i}>
            <a
              href="#/"
              className={status === i ? 'link-highlight' : 'link-content'}
              onClick={() => {
                setStatus(i);
              }}
            >
              {v.brand_name}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
