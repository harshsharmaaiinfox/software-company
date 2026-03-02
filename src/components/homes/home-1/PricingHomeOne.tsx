import { Link } from 'react-router-dom';

interface PricingHomeOneProps {
  style_2?: boolean;
}

const pricingPlans = [
  {
    package: 'Startup Plan',
    price: '99',
    features: [
      'Modern UI/UX Design',
      'Responsive Web Development',
      'Standard SEO Optimization',
      'Email Support',
      '1 Year Domain Hosting'
    ],
    delay: '.3s',
    active: false
  },
  {
    package: 'Professional Plan',
    popular: true,
    price: '249',
    features: [
      'Custom Creative Design',
      'Full Stack Development',
      'Advanced SEO Strategy',
      '24/7 Priority Support',
      'Unlimited Revisions'
    ],
    delay: '.5s',
    active: true
  },
  {
    package: 'Enterprise Plan',
    price: '499',
    features: [
      'Tailored Software Solutions',
      'Mobile App Integration',
      '360° Digital Marketing',
      'Dedicated Account Manager',
      'White-Label Solutions'
    ],
    delay: '.7s',
    active: false
  }
];

export default function PricingHomeOne({ style_2 }: PricingHomeOneProps) {
  return (
    <div
      className={`pb-130   ${style_2 ? 'tv-area-section pt-130' : 'tv-pricing-area pt-228'}`}
      style={{ background: '#f8faff' }}
    >
      <div className="container">
        {!style_2 && (
          <div className="row align-items-center">
            <div className="col-12 text-center">
              <div className="tv-section-title-box mb-60">
                <span className="tv-section-subtitle tv-spltv-text tv-spltv-in-right" style={{ color: '#2B4DFF', fontWeight: 700 }}>
                  Flexible Pricing
                </span>
                <h4 className="tv-section-title tv-spltv-text tv-spltv-in-right" style={{ fontSize: '40px', fontWeight: 800, color: '#1a1a2e' }}>
                  Value-Driven Pricing Plans <br /> For Your Business Scale
                </h4>
              </div>
            </div>
          </div>
        )}

        <div className="row">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="col-xl-4 col-lg-6 col-md-6 wow itfadeUp"
              data-wow-duration=".9s"
              data-wow-delay={plan.delay}
            >
              <div
                className={`single-price-box mb-30 ${plan.active ? 'active' : ''}`}
                style={{
                  borderRadius: '24px',
                  padding: '50px 40px',
                  background: plan.active ? 'linear-gradient(135deg, #2B4DFF 0%, #1a3ae0 100%)' : '#fff',
                  color: plan.active ? '#fff' : '#1a1a2e',
                  boxShadow: '0 20px 60px rgba(43,77,255,0.08)',
                  border: plan.active ? 'none' : '1px solid #f0f3ff'
                }}
              >
                {plan.popular && <span className="tag" style={{ background: plan.active ? '#fff' : '#2B4DFF', color: plan.active ? '#2B4DFF' : '#fff', fontWeight: 700, borderRadius: '50px' }}>POPULAR</span>}
                <h4 className="price-package" style={{ color: plan.active ? '#fff' : '#1a1a2e', fontSize: '20px', marginBottom: '20px' }}>{plan.package}</h4>
                <h3 className="price" style={{ color: plan.active ? '#fff' : '#2B4DFF', fontSize: '48px', marginBottom: '30px', fontWeight: 800 }}>
                  ${plan.price} <span style={{ fontSize: '16px', color: plan.active ? 'rgba(255,255,255,0.7)' : '#888' }}>/Month</span>
                </h3>
                <ul style={{ marginBottom: '40px' }}>
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} style={{ color: plan.active ? 'rgba(255,255,255,0.85)' : '#555', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <i className="fa-regular fa-check" style={{ color: plan.active ? '#fff' : '#2B4DFF' }}></i> {feature}
                    </li>
                  ))}
                </ul>
                <div className="price-box-btn">
                  <Link
                    to="/contact"
                    className="tv-btn-primary p-relative"
                    style={{
                      width: '100%',
                      textAlign: 'center',
                      background: plan.active ? '#fff' : '#2B4DFF',
                      color: plan.active ? '#2B4DFF' : '#fff',
                      border: 'none',
                      borderRadius: '12px',
                      boxShadow: '0 8px 15px rgba(0,0,0,0.1)'
                    }}
                    onMouseEnter={(e) => {
                      if (plan.active) {
                        (e.currentTarget as HTMLElement).style.background = '#f0f3ff';
                      } else {
                        (e.currentTarget as HTMLElement).style.background = '#1a3ae0';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (plan.active) {
                        (e.currentTarget as HTMLElement).style.background = '#fff';
                      } else {
                        (e.currentTarget as HTMLElement).style.background = '#2B4DFF';
                      }
                    }}
                  >
                    <span className="btn-wrap">
                      <span className="btn-text1">Get Started Now</span>
                      <span className="btn-text2">Get Started Now</span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
