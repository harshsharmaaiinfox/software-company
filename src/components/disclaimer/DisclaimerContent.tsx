export default function DisclaimerContent() {
  const sections = [
    {
      title: '1. General Disclaimer',
      content: 'The information provided on the Mangal Tech website is for general informational purposes only. While we strive to keep the information up to date and accurate, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the website or the information, products, services, or related graphics contained on the website.'
    },
    {
      title: '2. No Professional Advice',
      content: 'The content on this website does not constitute professional advice. Any reliance you place on such information is strictly at your own risk. For specific technical, legal, or business advice, please consult qualified professionals.'
    },
    {
      title: '3. Third-Party Links',
      content: 'Our website may contain links to external websites. We have no control over the nature, content, or availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorsement of the views expressed within them.'
    },
    {
      title: '4. Service Outcomes',
      content: 'Results from our IT services may vary based on project requirements, client cooperation, and other factors. Past performance or case studies do not guarantee future results. Each project is unique and outcomes depend on specific circumstances.'
    },
    {
      title: '5. Technical Information',
      content: 'Technical specifications, pricing, and service descriptions may change without notice. We reserve the right to modify our services and pricing. Please contact us for the most current information.'
    },
    {
      title: '6. Limitation of Liability',
      content: 'In no event will Mangal Tech be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website or our services.'
    },
    {
      title: '7. Contact',
      content: 'If you have any questions about this Disclaimer, please contact us at info@mangaltech.com or call (+91) 9528323105.'
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
