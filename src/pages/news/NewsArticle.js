import { Link } from 'react-router-dom';
import { IMAGE_URL } from '../../utils/config';
import PaginationActive from '../../components/Pagination';

export default function NewsArticle(props) {
  console.log('props->', props.filterNews);
  return (
    <>
      <article className="col-8 g-4 mt-5">
        <h3 className="col text-primary mb-3">最新新聞</h3>
        <div className="row">
          {props.filterNews.map((value) => {
            const date = value.date.split('T').shift();
            return (
              <div key={value.id} className="col col-md-6 mb-4">
                <Link to={`/news/${value.id}`}>
                  <div className="card h-100">
                    <img
                      src={`${IMAGE_URL}/news/${value.name}`}
                      className="card-img-top overflow-hidden m-auto"
                      alt="..."
                      style={{ height: '200px', objectFit: 'cover' }}
                    />
                    <div className="card-body">
                      <p>{date}</p>
                      <h5 className="card-title">{value.title}</h5>
                      <p className="card-text col-card-news-text col-card-text">
                        {value.content}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
        <div className="d-flex justify-content-center">
          <PaginationActive
            page={props.page}
            setPage={props.setPage}
            lastPage={props.lastPage}
          />
        </div>
      </article>
    </>
  );
}
