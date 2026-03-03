import { useState } from 'react';
import { Link } from 'react-router-dom';

const ALL_BLOGS = [
  { id: 1, img: "assets/img/blog/blog-grid-1-1.png", author: "Business solution", date: "27 May, 2024", title: "Boost your startup business with our digital agency" },
  { id: 2, img: "assets/img/blog/blog-grid-1-2.png", author: "Business solution", date: "27 May, 2024", title: "Boost your startup business with our digital agency" },
  { id: 3, img: "assets/img/blog/blog-grid-1-3.png", author: "Business solution", date: "27 May, 2024", title: "Data Backup and Recovery Best Practices Small" },
  { id: 4, img: "assets/img/blog/blog-grid-1-4.png", author: "Business solution", date: "27 May, 2024", title: "Maximizing Productivity with IT Support Service" },
  { id: 5, img: "assets/img/blog/blog-grid-1-5.png", author: "Business solution", date: "27 May, 2024", title: "Leaves Should Be Shredded Before Used As Mulch" },
  { id: 6, img: "assets/img/blog/blog-grid-1-6.png", author: "Business solution", date: "27 May, 2024", title: "It's Time To Design Your Dream Outdoor Living Space" },
  { id: 7, img: "assets/img/blog/blog-grid-1-7.png", author: "Business solution", date: "27 May, 2024", title: "Distinctively revolutionary for chang the Seamlessly" },
  { id: 8, img: "assets/img/blog/blog-grid-1-8.png", author: "Business solution", date: "27 May, 2024", title: "Distinctively revolutionary for chang the Seamlessly" },
  { id: 9, img: "assets/img/blog/blog-grid-1-9.png", author: "Business solution", date: "27 May, 2024", title: "The website of your dream can be Built easily" },
  // Page 2
  { id: 10, img: "assets/img/blog/blog-grid-1-1.png", author: "Tech Trends", date: "28 May, 2024", title: "Future of AI in App Development" },
  { id: 11, img: "assets/img/blog/blog-grid-1-2.png", author: "Code Tips", date: "29 May, 2024", title: "Clean Code: Best Practices for React" },
  { id: 12, img: "assets/img/blog/blog-grid-1-3.png", author: "Security", date: "30 May, 2024", title: "Protecting User Data in 2024" },
  { id: 13, img: "assets/img/blog/blog-grid-1-4.png", author: "Productivity", date: "31 May, 2024", title: "Tools for Remote Development Teams" },
  { id: 14, img: "assets/img/blog/blog-grid-1-5.png", author: "UI/UX", date: "01 June, 2024", title: "Modern Design Trends for Mobile Apps" },
  { id: 15, img: "assets/img/blog/blog-grid-1-6.png", author: "Cloud", date: "02 June, 2024", title: "Serverless Architecture: Pros and Cons" },
  { id: 16, img: "assets/img/blog/blog-grid-1-7.png", author: "Marketing", date: "03 June, 2024", title: "SEO Strategies for Growing Businesses" },
  { id: 17, img: "assets/img/blog/blog-grid-1-8.png", author: "Business", date: "04 June, 2024", title: "Scaling Your Digital Agency Effectively" },
  { id: 18, img: "assets/img/blog/blog-grid-1-9.png", author: "Frontend", date: "05 June, 2024", title: "Next.js vs Vite: Choosing the Right Tool" },
  // Page 3
  { id: 19, img: "assets/img/blog/blog-grid-1-1.png", author: "Backend", date: "06 June, 2024", title: "Node.js Performance Optimization" },
  { id: 20, img: "assets/img/blog/blog-grid-1-2.png", author: "API", date: "07 June, 2024", title: "REST vs GraphQL: A Comprehensive Comparison" },
  { id: 21, img: "assets/img/blog/blog-grid-1-3.png", author: "Database", date: "08 June, 2024", title: "NoSQL vs SQL: When to Use Which" },
  { id: 22, img: "assets/img/blog/blog-grid-1-4.png", author: "Mobile", date: "09 June, 2024", title: "Flutter for Fast Prototyping" },
  { id: 23, img: "assets/img/blog/blog-grid-1-5.png", author: "Web3", date: "10 June, 2024", title: "Introduction to Blockchain Basics" },
  { id: 24, img: "assets/img/blog/blog-grid-1-6.png", author: "QA", date: "11 June, 2024", title: "Automated Testing for Web Applications" },
  { id: 25, img: "assets/img/blog/blog-grid-1-7.png", author: "Career", date: "12 June, 2024", title: "Top Skills for Developers in 2024" },
  { id: 26, img: "assets/img/blog/blog-grid-1-8.png", author: "Open Source", date: "13 June, 2024", title: "Contributing to the Community" },
  { id: 27, img: "assets/img/blog/blog-grid-1-9.png", author: "Hardware", date: "14 June, 2024", title: "Apple M3 Chip: What Developers Should Know" },
];

const POSTS_PER_PAGE = 9;

export default function BlogGridArea() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(ALL_BLOGS.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = ALL_BLOGS.slice(startIndex, startIndex + POSTS_PER_PAGE);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="tv-blog-area pt-130 pb-130 blog-grid">
      <div className="container">
        <div className="row">
          {currentPosts.map((blog, idx) => (
            <div
              key={blog.id}
              className="col-xl-4 col-lg-4 col-md-6 wow itfadeUp"
              data-wow-duration=".9s"
              data-wow-delay={`${0.3 + (idx % 3) * 0.2}s`}
            >
              <div className="single-blog-item style-2 style-3 mb-30">
                <img src={blog.img} alt={blog.title} />
                <div className="blog-content">
                  <div className="blog-meta">
                    <span className="author">{blog.author}</span>
                    <span className="date">{blog.date}</span>
                  </div>
                  <h2 style={{ height: '70px', overflow: 'hidden' }}>
                    <Link to="/blog-details">
                      {blog.title}
                    </Link>
                  </h2>
                  <Link className="read-more-btn" to="/blog-details">
                    Read More<i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="row">
          <div className="col-12 text-center">
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
      </div>
    </div>
  );
}
