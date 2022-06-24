import HotCard from './Cards/HotCard';

const datas = [];

const count = 7;
for (let i = 0; i < count; i++) {
  datas.push({
    image: require('../images/course/CourseImg1.jpg'),
    like: 1,
    title: '台中市-越野小學堂',
    price: '$22,000.00',
  });
}

const courseItems = [];
datas.map((v, i) => {
  courseItems.push(
    <HotCard
      key={i}
      width={20}
      image={datas[i].image}
      like={datas[i].like}
      title={datas[i].title}
      price={datas[i].price}
    />
  );
  return 0;
});
export default function HotSection({ title }) {
  return (
    <div className="bg-graybg pt-5">
      <h5 className="ps-5 mb-4">{title}</h5>
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
