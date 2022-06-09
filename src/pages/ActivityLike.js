// 活動收藏頁面
// 元件引入
import TopSection from '../components/TopSection';
import UserAside from '../components/UserAside';
import Pagination from '../components/Pagination';
import RowCard from '../components/RowCard';
// 圖片引入
import BannerBackground from '../images/activity/ActivityBanner.jpg';
import Image from '../images/activity/ActivityImg1.jpg';

const activitys = [];

const count = 7;
for (let i = 0; i < count; i++) {
  activitys.push({
    image: Image,
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

const courseItems = [];
activitys.map((v, i) => {
  const index = 'o' + i;
  courseItems.push(
    <RowCard
      key={index}
      height={250}
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
  return 0;
});

function ActivityLike() {
  return (
    <>
      <TopSection title="活動收藏" bg={BannerBackground} />
      <div className="container">
        <div className="row gx-5 justify-content-center my-5 flex-nowrap">
          {/* -----------------------------左區塊 */}
          <div className="col-auto">
            {/* 邊攔 */}
            <UserAside />
          </div>
          {/* -----------------------------右區塊 */}
          <div className="col-auto">
            {/* 卡片清單 */}
            {courseItems}
            {/* 分頁 */}
            <Pagination />
          </div>
        </div>
      </div>
    </>
  );
}

export default ActivityLike;
