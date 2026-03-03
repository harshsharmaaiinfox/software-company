import { useParams, Link } from 'react-router-dom';
import project_data from '../../data/project-data';

export default function ProjectDetailsArea() {
  const { id } = useParams();
  const project = project_data.find((item) => item.id === Number(id)) || project_data[0];
  
  // Get related projects (3 random projects excluding the current one)
  const relatedProjects = project_data
    .filter((item) => item.id !== project.id)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  return (
    <>
      <div className="tv-blog-area tv-project-details pt-130 pb-130">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 col-12">
              <div className="tv-blog-list-wrap">
                <div className="tv-blog-details">
                  <div className="tv-blog-details-content">
                    <div className="tv-project-content">
                      <h2 style={{ color: '#036278', fontWeight: '800' }}>{project.title}</h2>
                      <p className="mb-30">{project.description}</p>
                    </div>

                    <div className="tv-blog-details-thumb-img d-flex justify-content-between mb-40 gap-3">
                      {project.images.map((img, idx) => (
                        <div key={idx} style={{ flex: '1' }}>
                          <img src={img} alt={`${project.title} detail ${idx}`} style={{ borderRadius: '15px', width: '100%' }} />
                        </div>
                      ))}
                    </div>

                    <div className="tv-project-content mb-40">
                      <h2 style={{ color: '#036278', fontWeight: '800' }}>Challenge & Solution</h2>
                      <h5 style={{ color: '#4EB985', marginBottom: '15px' }}>The Challenge:</h5>
                      <p className="mb-30">{project.challenge}</p>
                      <h5 style={{ color: '#4EB985', marginBottom: '15px' }}>Our Solution:</h5>
                      <p className="mb-30">{project.solution}</p>
                    </div>

                    <div className="tv-project-content bottom">
                      <h2 style={{ color: '#036278', fontWeight: '800' }}>Final Result</h2>
                      <p className="mb-40" style={{ fontSize: '18px', lineHeight: '1.6', color: '#555' }}>
                        {project.result}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-12">
              <div className="tv-project-sidebar-details" style={{ 
                background: '#f8faff', 
                padding: '40px', 
                borderRadius: '20px', 
                boxShadow: '0 10px 30px rgba(3, 98, 120, 0.05)',
                border: '1px solid rgba(78, 185, 133, 0.1)'
              }}>
                <h4 style={{ color: '#036278', marginBottom: '30px', fontWeight: '800' }}>Project Overview</h4>
                <div className="tv-project-list-item">
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li className="d-flex justify-content-between mb-20 pb-15" style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                      <span className="name" style={{ fontWeight: '700', color: '#036278' }}>Client:</span>
                      <span style={{ color: '#555' }}>{project.client}</span>
                    </li>
                    <li className="d-flex justify-content-between mb-20 pb-15" style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                      <span className="name" style={{ fontWeight: '700', color: '#036278' }}>Category:</span>
                      <span style={{ color: '#555' }}>{project.category}</span>
                    </li>
                    <li className="d-flex justify-content-between mb-20 pb-15" style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                      <span className="name" style={{ fontWeight: '700', color: '#036278' }}>Launch Date:</span>
                      <span style={{ color: '#555' }}>{project.date}</span>
                    </li>
                    <li className="d-flex justify-content-between mb-20 pb-15">
                      <span className="name" style={{ fontWeight: '700', color: '#036278' }}>Website:</span>
                      <span><a href="#" style={{ color: '#4EB985', fontWeight: '600' }}>{project.website}</a></span>
                    </li>
                  </ul>
                </div>

                <div className="tv-header-top-social-box mt-30 d-flex gap-3">
                  {[
                    { icon: 'fa-facebook-f', color: '#3b5998' },
                    { icon: 'fa-twitter', color: '#1da1f2' },
                    { icon: 'fa-linkedin-in', color: '#0077b5' },
                    { icon: 'fa-instagram', color: '#e1306c' }
                  ].map((social, idx) => (
                    <a key={idx} href="#" style={{ 
                      width: '40px', 
                      height: '40px', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      background: '#fff', 
                      color: social.color,
                      borderRadius: '50%',
                      boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
                      transition: 'all 0.3s ease'
                    }}>
                      <i className={`fa-brands ${social.icon}`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Projects Section */}
      <div className="related-projects-area pb-130" style={{ background: '#fff' }}>
        <div className="container">
          <div className="row mb-50">
            <div className="col-12">
              <div className="section-title">
                <span style={{ color: '#4EB985', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase' }}>Recently Shared</span>
                <h2 style={{ color: '#036278', fontSize: '36px', fontWeight: '800' }}>Related Case Studies</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {relatedProjects.map((item) => (
              <div key={item.id} className="col-xl-4 col-lg-4 col-md-6">
                <div className="single-project-item mb-30" style={{ overflow: 'hidden', borderRadius: '20px' }}>
                  <img src={item.image} alt={item.title} style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
                  <span className="icon">
                    <Link to={`/project-details/${item.id}`} onClick={() => window.scrollTo(0, 0)}>
                      <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </span>
                  <div className="single-project-content" style={{ padding: '25px' }}>
                    <h3 style={{ fontSize: '20px' }}>{item.title}</h3>
                    <div className="project-cat">
                      <span>{item.category}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .tv-header-top-social-box a:hover {
            transform: translateY(-5px);
            background: #4EB985 !important;
            color: #fff !important;
        }
        .single-project-item:hover img {
            transform: scale(1.1);
        }
        .single-project-item .icon {
            z-index: 10;
        }
      `}} />
    </>
  );
}
