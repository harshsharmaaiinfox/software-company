export default function PrivacyContent() {
  const sections = [
    {
      title: '1. Information We Collect',
      content: 'We may collect personal information such as your name, email address, phone number, company name, and project requirements when you contact us, request a quote, or use our services. We also collect technical data including IP address and browser information when you visit our website.'
    },
    {
      title: '2. How We Use Your Information',
      content: 'We use your information to provide and improve our services, communicate with you about projects, send relevant updates, process payments, and comply with legal obligations. We do not sell your personal information to third parties.'
    },
    {
      title: '3. Information Sharing',
      content: 'We may share your information with trusted service providers who assist us in operating our business (such as payment processors) under strict confidentiality agreements. We may also disclose information when required by law or to protect our rights.'
    },
    {
      title: '4. Data Security',
      content: 'We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.'
    },
    {
      title: '5. Cookies',
      content: 'Our website may use cookies and similar technologies to enhance your experience, analyze traffic, and remember your preferences. You can control cookie settings through your browser.'
    },
    {
      title: '6. Data Retention',
      content: 'We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, comply with legal obligations, or resolve disputes.'
    },
    {
      title: '7. Your Rights',
      content: 'You have the right to access, correct, or delete your personal information. You may also opt out of marketing communications at any time. Contact us at info@mangaltech.com to exercise these rights.'
    },
    {
      title: '8. Children\'s Privacy',
      content: 'Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children.'
    },
    {
      title: '9. Changes to This Policy',
      content: 'We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the updated policy on this page with a revised date.'
    },
    {
      title: '10. Contact Us',
      content: 'For questions about this Privacy Policy or our data practices, please contact us at info@mangaltech.com or call (+91) 9528323105.'
    }
  ];

  return (
    <div className="tv-legal-area pt-130 pb-130">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-10">
            <div className="tv-legal-content">
              {sections.map((section, index) => (
                <div key={index} className="tv-legal-section mb-40">
                  <h4 className="tv-legal-title mb-20" style={{ color: '#036278', fontSize: '20px', fontWeight: 700 }}>
                    {section.title}
                  </h4>
                  <p className="tv-legal-text" style={{ color: '#555', lineHeight: 1.8, marginBottom: 0 }}>
                    {section.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
