export default function TermsContent() {
  const sections = [
    {
      title: '1. Acceptance of Terms',
      content: 'By accessing and using the services provided by Mangal Tech ("we", "our", or "us"), you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.'
    },
    {
      title: '2. Services',
      content: 'Mangal Tech provides IT services including but not limited to website design and development, e-commerce solutions, mobile app development, logo design, and related digital services. The scope of services will be defined in individual project agreements or statements of work.'
    },
    {
      title: '3. Payment Terms',
      content: 'Payment terms will be specified in your project agreement. Generally, we require an advance payment or milestone-based payments for projects. All prices are subject to applicable taxes unless otherwise stated.'
    },
    {
      title: '4. Intellectual Property',
      content: 'Upon full payment, you will receive ownership of the deliverables as specified in the project agreement. Mangal Tech retains the right to showcase completed projects in our portfolio unless a confidentiality agreement specifies otherwise.'
    },
    {
      title: '5. Confidentiality',
      content: 'We respect the confidentiality of your business information and project details. We will not disclose your confidential information to third parties without your consent, except as required by law.'
    },
    {
      title: '6. Revisions and Support',
      content: 'Revision rounds and post-delivery support are defined in each project agreement. Any additional revisions or support beyond the agreed scope may be subject to additional charges.'
    },
    {
      title: '7. Limitation of Liability',
      content: 'Mangal Tech shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services. Our liability is limited to the amount paid for the specific service in question.'
    },
    {
      title: '8. Termination',
      content: 'Either party may terminate the agreement as per the terms specified in the project contract. Upon termination, you will be liable for payment for work completed up to that date.'
    },
    {
      title: '9. Changes to Terms',
      content: 'We reserve the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the modified terms.'
    },
    {
      title: '10. Contact',
      content: 'For any questions regarding these Terms and Conditions, please contact us at info@mangaltech.com or call (+91) 9528323105.'
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
