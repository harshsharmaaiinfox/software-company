import { useState } from 'react';
import { Link } from 'react-router-dom';

const ALL_BLOG_LIST = [
  { id: 1, img: "assets/img/blog/blog-list-thum-1.png", author: "Business solution", date: "27 May, 2024", title: "Boost your Startup Business With our Digital Agency", desc: "Each demo built with Teba will look different. You can customize almost anything in appearance of your website with only a few clicks." },
  { id: 2, img: "assets/img/blog/blog-list-thum-2.png", author: "Business solution", date: "27 May, 2024", title: "Boost your Startup Business With our Digital Agency", desc: "Each demo built with Teba will look different. You can customize almost anything in appearance of your website with only a few clicks." },
  { id: 3, img: "assets/img/blog/blog-list-thum-3.png", author: "Business solution", date: "27 May, 2024", title: "Data Backup and Recovery Best Practices Small", desc: "Each demo built with Teba will look different. You can customize almost anything in appearance of your website with only a few clicks." },
  // Page 2
  { id: 4, img: "assets/img/blog/blog-list-thum-1.png", author: "Tech Trends", date: "28 May, 2024", title: "Future of AI in App Development", desc: "Artificial intelligence is reshaping how we think about mobile software and user interfaces." },
  { id: 5, img: "assets/img/blog/blog-list-thum-2.png", author: "Code Tips", date: "29 May, 2024", title: "Clean Code: Best Practices for React", desc: "Writing maintainable code is essential for long-term project success and team collaboration." },
  { id: 6, img: "assets/img/blog/blog-list-thum-3.png", author: "Security", date: "30 May, 2024", title: "Protecting User Data in 2024", desc: "Security is not an afterthought. Learn how to secure your applications from day one." },
  // Page 3
  { id: 7, img: "assets/img/blog/blog-list-thum-1.png", author: "Success", date: "01 June, 2024", title: "How to Scale Your Business", desc: "Scaling requires more than just more users; it requires a robust technical foundation." },
  { id: 8, img: "assets/img/blog/blog-list-thum-2.png", author: "Design", date: "02 June, 2024", title: "Micro-interactions in UI/UX", desc: "Small details make a big difference in how users perceive and interact with your app." },
  { id: 9, img: "assets/img/blog/blog-list-thum-3.png", author: "Mobile", date: "03 June, 2024", title: "Native vs Hybrid Development", desc: "Choosing the right development path for your mobile app is a critical business decision." },
];

const ITEMS_PER_PAGE = 3;

export default function BlogListArea() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(ALL_BLOG_LIST.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = ALL_BLOG_LIST.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="tv-blog-area pt-130 pb-130">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-8 col-12">
            <div className="tv-blog-list-wrap">
              {currentItems.map((blog, idx) => (
                <div
                  key={blog.id}
                  className="single-blog-item blog-list mb-30 wow itfadeUp"
                  data-wow-duratoin=".9s"
                  data-wow-delay={`${0.3 + idx * 0.2}s`}
                >
                  <img src={blog.img} alt={blog.title} />
                  <div className="blog-content">
                    <div className="blog-meta">
                      <span className="author">{blog.author}</span>
                      <span className="date">{blog.date}</span>
                    </div>
                    <h2>
                      <Link to="/blog-details">
                        {blog.title}
                      </Link>
                    </h2>
                    <p>{blog.desc}</p>
                    <Link className="read-more-btn" to="/blog-details">
                      Read More<i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              ))}

              <div className="tv-pagination mt-80">
                <nav>
                  <ul>
                    {[...Array(totalPages)].map((_, i) => (
                      <li key={i + 1} className={currentPage === i + 1 ? "current" : ""}>
                        <button
                          onClick={() => handlePageChange(i + 1)}
                          style={{
                            background: currentPage === i + 1 ? '#4EB985' : '#f8f9fa',
                            color: currentPage === i + 1 ? '#fff' : '#111',
                            border: 'none',
                            padding: '10px 18px',
                            borderRadius: '8px',
                            margin: '0 5px',
                            fontWeight: 600,
                            cursor: 'pointer',
                            transition: 'all 0.3s'
                          }}
                        >
                          {i + 1}
                        </button>
                      </li>
                    ))}
                    {currentPage < totalPages && (
                      <li>
                        <button
                          onClick={() => handlePageChange(currentPage + 1)}
                          style={{
                            background: '#f8f9fa',
                            color: '#111',
                            border: 'none',
                            padding: '10px 18px',
                            borderRadius: '8px',
                            margin: '0 5px',
                            fontWeight: 600,
                            cursor: 'pointer'
                          }}
                        >
                          <i className="fa-solid fa-angle-right"></i>
                        </button>
                      </li>
                    )}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-12">
            <div className="tv-sidebar-area">
              <div
                className="tv-widget widget mb-30 wow itfadeUp"
                data-wow-duratoin=".9s"
                data-wow-delay=".3s"
              >
                <h4>Search Here</h4>
                <div className="widget-search-form">
                  <input type="search" placeholder="search" />
                  <button type="button">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </button>
                </div>
              </div>
              <div
                className="tv-widget widget mb-30  wow-itfadeUp"
                data-wow-duratoin=".9s"
                data-wow-delay=".3s"
              >
                <h4>Categories</h4>
                <ul>
                  <li className="cat-item">
                    <a href="">Technology</a>
                    (03)
                  </li>
                  <li className="cat-item">
                    <a href="">Apps Development </a>
                    (01)
                  </li>
                  <li className="cat-item">
                    <a href="">Business</a>
                    (05)
                  </li>
                  <li className="cat-item">
                    <a href="">Social Marketing</a>
                    (02)
                  </li>
                  <li className="cat-item">
                    <a href="">Business Intelligence</a>
                    (04)
                  </li>
                </ul>
              </div>
              <div
                className="tv-widget widget mb-30  wow itfadeUp"
                data-wow-duratoin=".9s"
                data-wow-delay=".3s"
              >
                <h4>Recent Post</h4>
                <div className="widget-latest-post d-flex">
                  <div className="widget-thumb">
                    <img src="assets/img/blog/blog-grid-1-1.png" alt="" />
                  </div>
                  <div className="widget-content">
                    <h6>
                      <Link to="/blog-details">
                        Boost your startup business with our digital agency
                      </Link>
                    </h6>
                    <p>26 June 2024</p>
                  </div>
                </div>
                <div className="widget-latest-post d-flex">
                  <div className="widget-thumb">
                    <img src="assets/img/blog/blog-grid-1-2.png" alt="" />
                  </div>
                  <div className="widget-content">
                    <h6>
                      <Link to="/blog-details">
                        Boost your startup business with our digital agency
                      </Link>
                    </h6>
                    <p>26 June 2024</p>
                  </div>
                </div>
                <div className="widget-latest-post d-flex">
                  <div className="widget-thumb">
                    <img src="assets/img/blog/blog-grid-1-3.png" alt="" />
                  </div>
                  <div className="widget-content">
                    <h6>
                      <Link to="/blog-details">
                        Boost your startup business with our digital agency
                      </Link>
                    </h6>
                    <p>26 June 2024</p>
                  </div>
                </div>
              </div>
              <div
                className="tv-widget widget mb-30  wow itfadeUp"
                data-wow-duratoin=".9s"
                data-wow-delay=".3s"
              >
                <h4>Tag Cloud</h4>
                <div className="tagcloud">
                  <a href="#">Brand</a>
                  <a href="#">Business</a>
                  <a href="#"> Development</a>
                  <a href="#"> Marketing</a>
                  <a href="#">SaaS</a>
                  <a href="#">Technology</a>
                  <a href="#">Startup</a>
                  <a href="#">Services</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
