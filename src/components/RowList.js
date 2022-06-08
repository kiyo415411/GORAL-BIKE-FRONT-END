// 商品列表(橫向)
import RowCard from './RowCard';
const object = () => {
  const objectGroup = [];
  const objectCount = 7;
  for (let i = 0; i < objectCount; i++) {
    const index = 'o' + i;
    objectGroup.push(<RowCard key={index} height={230} />);
  }
  return objectGroup;
};
function RowList() {
  return <>{object()}</>;
}

export default RowList;
