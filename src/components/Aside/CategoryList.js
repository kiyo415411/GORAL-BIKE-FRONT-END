import { useContext } from 'react';
import { ActivityValue } from '../../pages/ActivityList';
import { CourseValue } from '../../pages/CourseList';
import Skeleton from '@mui/material/Skeleton';
export default function CategoryList({
  list,
  statu,
  setStatu,
  setPage,
  contextValue,
}) {
  const Data = useContext(contextValue);
  const stateSkeletonGroup = [];
  Data.state.map((v, i) => {
    stateSkeletonGroup.push(
      <Skeleton
        key={i}
        animation="wave"
        variant="rectangular"
        width={210}
        height={20}
      />
    );
    return 0;
  });
  return (
    <>
      {Data.isLoading ? (
        <div className="d-grid gap-3 mt-3 mb-5 ms-2">{stateSkeletonGroup}</div>
      ) : (
        <ul className="list-unstyled d-grid gap-xl-3 mb-5 ms-2">
          {list.map((v, i) => {
            return (
              <li key={i + 1}>
                <a
                  href="#/"
                  className={
                    statu === i + 1 ? 'link-highlight' : 'link-content'
                  }
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
      )}
    </>
  );
}
