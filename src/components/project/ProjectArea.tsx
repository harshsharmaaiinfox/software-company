import { Link } from 'react-router-dom';
import project_data from '../../data/project-data';

export default function ProjectArea() {
  return (
    <div className="tv-area-section pt-130 pb-130">
      <div className="container">
        <div className="row">
          {project_data.map((item) => (
            <div
              key={item.id}
              className={`${item.colClass} wow itfadeUp`}
              data-wow-duration={`${item.animation.duration}s`}
              data-wow-delay={`${item.animation.delay}s`}
            >
              <div className="single-project-item mb-30">
                <img src={item.image} alt={item.title} />
                <span className="icon">
                  <Link to={`/project-details/${item.id}`}>
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </span>
                <div className="single-project-content">
                  <h3>{item.title}</h3>
                  <div className="project-cat">
                    <span>{item.category}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="row">
          <div className="col text-center">
            <div className="tv-pagination mt-50">
              <nav>
                <ul>
                  <li><a href="#">1</a></li>
                  <li><a href="#">2</a></li>
                  <li className="current"><a href="#">3</a></li>
                  <li>
                    <a href="#">
                      <i className="fa-solid fa-angle-right"></i>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
