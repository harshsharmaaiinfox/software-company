import Breadcrumb from '../../common/Breadcrumb';
import FooterOne from '../../layouts/footers/FooterOne';
import HeaderOne from '../../layouts/headers/HeaderOne';
import Wrapper from '../../layouts/Wrapper';
import WebDevHero from './WebDevHero';
import WebDevAbout from './WebDevAbout';
import WebDevTechSlider from './WebDevTechSlider';
import WebDevFeatures from './WebDevFeatures';
import WebDevProcess from './WebDevProcess';
import WebDevFaq from './WebDevFaq';
import CtaHomeOne from '../homes/home-1/CtaHomeOne';

export default function WebDevelopment() {
  return (
    <Wrapper>
      <HeaderOne />
      <main>
        <Breadcrumb title="Website Design & Development" subtitle="web-development" />
        <WebDevHero />
        <WebDevAbout />
        <WebDevTechSlider />
        <WebDevFeatures />
        <WebDevProcess />
        <WebDevFaq />
        <CtaHomeOne />
        {/* Additional sections can be added here */}
      </main>
      <FooterOne />
    </Wrapper>
  );
}
