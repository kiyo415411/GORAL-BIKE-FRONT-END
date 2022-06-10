import TopSection from '../components/TopSection';
import ActivityAside from '../components/ActivityAside';
import Pagination from '../components/Pagination';
import RowCard from '../components/RowCard';
import ColCard from '../components/ColCard';
import TopSort from '../components/TopSort';
const cardStyle = 'col'; // 切換排版 | row/col
const activitys = [];

const count = 7;
for (let i = 0; i < count; i++) {
  activitys.push({
    image: require('../images/activity/ActivityImg1.jpg'),
    score: 3,
    like: 1,
    title: '知本林道消暑秘境',
    price: '$2,000',
    time: '2022-07-16',
    location: '東部',
    statu: '報名開放中',
    text: '知本林道位於台東縣卑南鄉，路線途經利嘉溪與知本溪集水區範圍知本林道位於台東縣卑南鄉，路線途經利嘉溪與知本溪集水區範圍知本林道位於台東縣卑南鄉，路線途經利嘉溪與知本溪集水區範圍',
  });
}

const activityItems = [];
activitys.map((v, i) => {
  if (cardStyle === 'row') {
    activityItems.push(
      <RowCard
        key={i}
        height={15.625}
        image={activitys[i].image}
        score={activitys[i].score}
        like={activitys[i].like}
        title={activitys[i].title}
        price={activitys[i].price}
        time={activitys[i].time}
        location={activitys[i].location}
        statu={activitys[i].statu}
        text={activitys[i].text}
      />
    );
  } else {
    activityItems.push(
      <ColCard
        key={i}
        width={20}
        image={activitys[i].image}
        like={activitys[i].like}
        title={activitys[i].title}
        price={activitys[i].price}
        time={activitys[i].time}
        location={activitys[i].location}
        statu={activitys[i].statu}
        text={activitys[i].text}
      />
    );
  }
  return 0;
});

export default function ActivityList() {
  return (
    <>
      <TopSection
        title="活動"
        bg={require('../images/activity/ActivityBanner.jpg')}
      />
      <div className="row gx-5 justify-content-center my-5 flex-nowrap">
        {/* -----------------------------左區塊 */}
        <div className="col-auto">
          {/* 邊攔 */}
          <ActivityAside />
        </div>
        {/* -----------------------------右區塊 */}
        <div className="col-auto">
          {/* 排序 */}
          <TopSort />
          {/* 卡片清單 */}
          <div
            className={cardStyle === 'col' ? 'd-flex flex-wrap' : ''}
            style={{ width: '63rem' }}
          >
            {activityItems}
          </div>
          {/* 分頁 */}
          <div>
            <Pagination />
          </div>
        </div>
      </div>
    </>
  );
}
