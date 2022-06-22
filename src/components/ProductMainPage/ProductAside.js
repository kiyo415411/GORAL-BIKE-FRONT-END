import AsideTitle from '../Aside/AsideTitle';
import RangeSlider from '../Aside/RangeSlider';
import SearchInput from '../Aside/SearchInput';
import CategoryList from '../Aside/CategoryList';
import ColorPalette from '../Aside/ColorPalette';

// 商品篩選邊攔
export default function ActivityAside(props) {
  // const [color, setColor] = useState([]);

  // useEffect(() => {
  //   const getColor = async () => {
  //     const response = await axios.get(API_URL + '/product/product_color');
  //     setColor(response.data.data);
  //   };
  //   getColor();
  // }, []);

  const status = ['報名開放中', '報名未開放', '報名已結束'];
  return (
    <div
      className="product-aside shadow p-4 sticky-top mt-3"
      style={{ width: '324px', height: '600px' }}
    >
      {/* 關鍵字篩選 */}
      <SearchInput />
      {/* 報名狀態篩選 */}
      <AsideTitle text="車款分類" />
      <CategoryList list={status} />
      {/* 報名費用篩選 */}
      <AsideTitle text="價錢區間" />
      <RangeSlider
        startunit="$ "
        text="篩選"
        price={props.price}
        setPrice={props.setPrice}
      ></RangeSlider>
      {/* 報名人數篩選 */}
      <AsideTitle text="顏色篩選" />
      <ColorPalette
        color={props.color}
        setCurrentColor={props.setCurrentColor}
        currentColor={props.currentColor}
      />
    </div>
  );
}
