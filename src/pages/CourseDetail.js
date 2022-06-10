import { BsHeart } from 'react-icons/bs';
import TopSection from '../components/TopSection';
export default function CourseDetail() {
  return (
    <>
      <TopSection
        title="越野小學堂"
        bg={require('../images/course/CourseBanner.jpg')}
      />
      <div className="container">
        <div className="d-flex justify-content-between">
          <ul className="list-unstyled">
            <li>
              <div className="text-hightlight">
                <BsHeart />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
