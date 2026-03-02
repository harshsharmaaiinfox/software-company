import { Link } from 'react-router-dom';

const projects = [
  {
    title: 'Premium Ecommerce Platform',
    img: 'assets/img/project/project-1-1.png',
    cats: ['Ecommerce', 'Development'],
    delay: '.3s',
  },
  {
    title: 'Enterprise Software Solution',
    img: 'assets/img/project/project-1-2.png',
    cats: ['Software', 'Architecture'],
    delay: '.5s',
  },
  {
    title: 'Creative Branding & Identity',
    img: 'assets/img/project/project-1-3.png',
    cats: ['Design', 'Branding'],
    delay: '.7s',
  },
];

export default function ProjectHomeOne() {
  return (
    <div className="tv-project-area pt-130 pb-130 light-bg" style={{ background: '#ffffff' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <div className="tv-section-title-box mb-60">
              <span
                className="tv-section-subtitle tv-spltv-text tv-spltv-in-right"
                style={{ color: '#2B4DFF', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}
              >
                Our Masterpieces
              </span>
              <h4 className="tv-section-title pb-20 tv-spltv-text tv-spltv-in-right" style={{ fontSize: '42px', fontWeight: 800, color: '#1a1a2e' }}>
                Delivering Excellence Through <br /> Our Works
              </h4>
            </div>
          </div>
        </div>
        <div className="row g-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="col-lg-4 col-xl-4 col-md-6 wow itfadeUp"
              data-wow-duration=".9s"
              data-wow-delay={project.delay}
            >
              <div
                className="single-project-item mb-30"
                style={{
                  borderRadius: '24px',
                  overflow: 'hidden',
                  boxShadow: '0 20px 50px rgba(43,77,255,0.06)',
                  background: '#fff',
                  border: '1px solid #f0f3ff'
                }}
              >
                <div style={{ overflow: 'hidden', position: 'relative' }}>
                  <img
                    src={project.img}
                    alt={project.title}
                    style={{ width: '100%', transition: 'transform 0.5s ease' }}
                    className="project-thumb"
                  />
                  <span className="icon" style={{ background: '#2B4DFF' }}>
                    <Link to="/project-details">
                      <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </span>
                </div>
                <div className="single-project-content" style={{ padding: '30px', textAlign: 'left' }}>
                  <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#1a1a2e', marginBottom: '10px' }}>
                    {project.title}
                  </h3>
                  <div className="project-cat">
                    {project.cats.map((cat, i) => (
                      <span
                        key={i}
                        style={{
                          fontSize: '14px',
                          color: '#2B4DFF',
                          fontWeight: 600,
                          backgroundColor: 'rgba(43,77,255,0.05)',
                          padding: '4px 12px',
                          borderRadius: '50px',
                          marginRight: '8px'
                        }}
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-12 text-center mt-30 ">
            <div
              className="tv-fade-anim"
              data-fade-from="top"
              data-ease="bounce"
              data-delay=".5"
            >
              <Link to="/project" className="tv-btn-primary" style={{ background: '#2B4DFF', padding: '15px 40px', borderRadius: '50px', border: 'none' }}>
                <span className="btn-wrap">
                  <span className="btn-text1">View Our Portfolio</span>
                  <span className="btn-text2">View Our Portfolio</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
