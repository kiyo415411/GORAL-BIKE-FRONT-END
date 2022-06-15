// 底部分頁
import Pagination from 'react-bootstrap/Pagination';
import { RiArrowRightSLine, RiArrowLeftSLine } from 'react-icons/ri';

export default function PaginationActive() {
  return (
    <Pagination>
      <Pagination.Item>
        <RiArrowLeftSLine />
      </Pagination.Item>
      <Pagination.Item>{1}</Pagination.Item>
      <Pagination.Item active>{2}</Pagination.Item>
      <Pagination.Item>{3}</Pagination.Item>
      <Pagination.Item disabled>
        <RiArrowRightSLine />
      </Pagination.Item>
    </Pagination>
  );
}
