// 底部分頁
import Pagination from 'react-bootstrap/Pagination';
import { RiArrowRightSLine, RiArrowLeftSLine } from 'react-icons/ri';

export default function PaginationActive({ page, setPage, lastPage }) {
  return (
    <Pagination className="mt-4">
      {/* ---------------------------------------- 上一頁  */}
      <Pagination.Item
        disabled={page === 1 ? 'disabled' : ''}
        onClick={(e) => {
          setPage(page - 1);
        }}
      >
        <RiArrowLeftSLine />
      </Pagination.Item>
      {/* ---------------------------------------- 中間頁  */}
      {lastPage >= 3 && page === 1 ? (
        <>
          <Pagination.Item
            active={page === 1 ? 'active' : ''}
            onClick={(e) => {
              setPage(page);
            }}
          >
            {page}
          </Pagination.Item>
          <Pagination.Item
            onClick={(e) => {
              setPage(page + 1);
            }}
          >
            {page + 1}
          </Pagination.Item>
          <Pagination.Item
            onClick={(e) => {
              setPage(page + 2);
            }}
          >
            {page + 2}
          </Pagination.Item>
        </>
      ) : lastPage >= 3 && page + 1 <= lastPage ? (
        <>
          <Pagination.Item
            onClick={(e) => {
              setPage(page - 1);
            }}
          >
            {page - 1}
          </Pagination.Item>
          <Pagination.Item
            active
            onClick={(e) => {
              setPage(page);
            }}
          >
            {page}
          </Pagination.Item>
          <Pagination.Item
            onClick={(e) => {
              setPage(page + 1);
            }}
          >
            {page + 1}
          </Pagination.Item>
        </>
      ) : lastPage >= 3 && page === lastPage ? (
        <>
          <Pagination.Item
            onClick={(e) => {
              setPage(page - 2);
            }}
          >
            {page - 2}
          </Pagination.Item>
          <Pagination.Item
            active={page === lastPage - 1 ? 'active' : ''}
            onClick={(e) => {
              setPage(page - 1);
            }}
          >
            {page - 1}
          </Pagination.Item>
          <Pagination.Item
            active={page === lastPage ? 'active' : ''}
            onClick={(e) => {
              setPage(page);
            }}
          >
            {page}
          </Pagination.Item>
        </>
      ) : lastPage === 2 && page === 1 ? (
        <>
          <Pagination.Item
            active={page === lastPage - 1 ? 'active' : ''}
            onClick={(e) => {
              setPage(page);
            }}
          >
            {page}
          </Pagination.Item>
          <Pagination.Item
            onClick={(e) => {
              setPage(page + 1);
            }}
          >
            {page + 1}
          </Pagination.Item>
        </>
      ) : lastPage === 2 && page !== 1 ? (
        <>
          <Pagination.Item
            onClick={(e) => {
              setPage(page - 1);
            }}
          >
            {page - 1}
          </Pagination.Item>
          <Pagination.Item
            active={page === lastPage ? 'active' : ''}
            onClick={(e) => {
              setPage(page);
            }}
          >
            {page}
          </Pagination.Item>
        </>
      ) : (
        <Pagination.Item
          active
          onClick={(e) => {
            setPage(page);
          }}
        >
          {page}
        </Pagination.Item>
      )}
      {/* ---------------------------------------- 下一頁  */}
      <Pagination.Item
        disabled={page === lastPage ? 'disabled' : ''}
        onClick={(e) => {
          setPage(page + 1);
        }}
      >
        <RiArrowRightSLine />
      </Pagination.Item>
    </Pagination>
  );
}
