import { Link } from 'react-router-dom';

const blogs = [
  {
    author: 'Admin',
    date: 'March 15, 2026',
    title: 'Boost your Startup Business With our Digital Solutions',
    img: 'assets/img/blog/blog-thumb-1.png',
    delay: '.3s',
    isLarge: true
  },
  {
    author: 'Admin',
    date: 'March 18, 2026',
    title: 'Planning your Online Business Goals With a Specialist',
    img: 'assets/img/blog/blog-thumb-2.png',
    delay: '.5s',
    isLarge: false
  },
  {
    author: 'Admin',
    date: 'March 20, 2026',
    title: 'Including Animation In Your Branding System',
    img: 'assets/img/blog/blog-thumb-3.png',
    delay: '.7s',
    isLarge: false
  }
];

export default function BlogHomeOne() {
  return (
    <div className="tv-blog-area pt-130 pb-130" style={{ background: '#ffffff' }}>
      <div className="container">
        <div className="row align-items-end">
          <div className="col-xl-6 col-lg-6">
            <div className="tv-section-title-box">
              <span className="tv-section-subtitle tv-spltv-text tv-spltv-in-right" style={{ color: '#2B4DFF', fontWeight: 700 }}>
                Our Latest Insights
              </span>
              <h4 className="tv-section-title pb-20 tv-spltv-text tv-spltv-in-right" style={{ fontSize: '42px', fontWeight: 800, color: '#1a1a2e' }}>
                Recent Blog & Articles <br /> About Creative Tech
              </h4>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 text-end">
            <div
              className="tv-fade-anim button"
              data-fade-from="top"
              data-ease="bounce"
              data-delay=".5"
            >
              <Link to="/blog-details" className="tv-btn-primary p-relative" style={{ background: '#2B4DFF', padding: '15px 40px', borderRadius: '50px', border: 'none' }}>
                <span className="btn-wrap">
                  <span className="btn-text1">View All Insights</span>
                  <span className="btn-text2">View All Insights</span>
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div className="tv-blog-wrap mt-60">
          <div className="row">
            {blogs.map((blog, index) => (
              <div
                key={index}
                className={`${blog.isLarge ? 'col-lg-6 col-xl-6' : 'col-lg-6 col-xl-3'} col-md-6 wow itfadeUp`}
                data-wow-duration=".9s"
                data-wow-delay={blog.delay}
              >
                <div
                  className={`single-blog-item ${blog.isLarge ? 'first' : ''} mb-30`}
                  style={{
                    borderRadius: '24px',
                    overflow: 'hidden',
                    background: '#fff',
                    border: '1px solid #f0f3ff',
                    boxShadow: '0 15px 45px rgba(43,77,255,0.05)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div style={{ overflow: 'hidden' }}>
                    <img src={blog.img} alt={blog.title} style={{ width: '100%', transition: 'transform 0.5s ease' }} className="blog-thumb" />
                  </div>
                  <div className="blog-content" style={{ padding: '30px' }}>
                    <div className="blog-meta" style={{ marginBottom: '15px', color: '#666', fontSize: '14px', display: 'flex', gap: '20px' }}>
                      <span className="author" style={{ fontWeight: 600, color: '#2B4DFF' }}><i className="fa-solid fa-user" style={{ marginRight: '8px' }}></i>{blog.author}</span>
                      <span className="date"><i className="fa-solid fa-calendar-days" style={{ marginRight: '8px' }}></i>{blog.date}</span>
                    </div>
                    <h2 style={{ fontSize: blog.isLarge ? '26px' : '20px', fontWeight: 800, lineHeight: 1.4 }}>
                      <Link to="/blog-details" style={{ color: '#1a1a2e', textDecoration: 'none', transition: 'color 0.3s' }}>
                        {blog.title}
                      </Link>
                    </h2>
                    <div style={{ marginTop: '20px' }}>
                      <Link to="/blog-details" style={{ color: '#2B4DFF', fontWeight: 700, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '14px' }}>
                        Read More <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
