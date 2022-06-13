import HotCard from './Cards/HotCard';

const courses = [];

const count = 7;
for (let i = 0; i < count; i++) {
  courses.push({
    image: require('../images/course/CourseImg1.jpg'),
    score: 3,
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
  courseItems.push(
    <HotCard
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
  return 0;
});
export default function HotSection() {
  return (
    <div className="bg-graybg pt-5">
      <h5 className="ps-5 mb-4">推薦課程</h5>
      <div
        className="w-100 overflow-hidden position-relative"
        style={{ height: '28rem' }}
      >
        <div
          className="d-inline-flex justify-content-center position-absolute"
          style={{ left: '-3rem' }}
        >
          {courseItems}
        </div>
      </div>
    </div>
  );
}
