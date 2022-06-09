// 課程收藏頁面
// 元件引入
import TopSection from '../components/TopSection';
import UserAside from '../components/UserAside';
import Pagination from '../components/Pagination';
import RowCard from '../components/RowCard';
// 圖片引入
import BannerBackground from '../images/course/CourseBanner.jpg';
import Image from '../images/course/CourseImg1.jpg';

const courses = [];

const count = 7;
for (let i = 0; i < count; i++) {
  courses.push({
    image: Image,
    score: 3,
    like: 1,
    title: '台中市-越野小學堂',
    price: '$22,000.00',
    time: '2022-07-16',
    location: '東部',
    statu: '報名開放中',
    text: '鋁合金單避震登山車，採用較為直挺的騎乘幾何設定，Shimano Deore 1x10零組件搭配，Suntour避震前叉。 ',
  });
}

const courseItems = [];
courses.map((v, i) => {
  const index = 'o' + i;
  courseItems.push(
    <RowCard
      key={index}
      height={250}
      image={courses[i].image}
      score={courses[i].score}
      like={courses[i].like}
      title={courses[i].title}
      price={courses[i].price}
      time={courses[i].time}
      location={courses[i].location}
      statu={courses[i].statu}
      text={courses[i].text}
    />
  );
  return 0;
});

function CourseLike() {
  return (
    <>
      <TopSection title="課程收藏" bg={BannerBackground} />
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
    </>
  );
}

export default CourseLike;
