import TopSection from '../components/TopSection';
import CourseAside from '../components/CourseAside';
import Pagination from '../components/Pagination';
import RowCard from '../components/Cards/RowCard';
import ColCard from '../components/Cards/ColCard';
import TopSort from '../components/TopSort';

const cardStyle = 'col'; // 切換排版 | row/col
const courses = [];

const count = 7;
for (let i = 0; i < count; i++) {
  courses.push({
    image: require('../images/course/CourseImg1.jpg'),
    score: 4,
    like: 1,
    title: '台中市-越野小學堂',
    price: '$22,000.00',
    time: '2022-07-16',
    location: '東部',
    statu: '報名開放中',
    text: '鋁合金單避震登山車，採用較為直挺的騎乘幾何設定，Shimano Deore 1x10零組件搭配，Suntour避震前叉。 鋁合金單避震登山車，採用較為直挺的騎乘幾何設定，Shimano Deore 1x10零組件搭配，Suntour避震前叉。',
  });
}

const courseItems = [];
courses.map((v, i) => {
  if (cardStyle === 'row') {
    courseItems.push(
      <RowCard
        key={i}
        height={15.625}
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
  } else {
    courseItems.push(
      <ColCard
        key={i}
        width={20}
        image={courses[i].image}
        like={courses[i].like}
        title={courses[i].title}
        price={courses[i].price}
        time={courses[i].time}
        location={courses[i].location}
        statu={courses[i].statu}
        text={courses[i].text}
      />
    );
  }
  return 0;
});

export default function CourseList() {
  return (
    <>
      <TopSection
        title="課程"
        bg={require('../images/course/CourseBanner.jpg')}
      />
      <div className="row gx-5 justify-content-center my-5 flex-nowrap">
        {/* -----------------------------左區塊 */}
        <div className="col-auto">
          {/* 邊攔 */}
          <CourseAside />
        </div>
        {/* -----------------------------右區塊 */}
        <div className="col-auto">
          {/* 排序 */}
          <TopSort />
          {/* 卡片清單 */}
          <div
            className={cardStyle === 'col' ? 'd-flex flex-wrap mt-2' : 'mt-2'}
            style={{ width: '63rem' }}
          >
            {courseItems}
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
