import Breadcrumb from '../../common/Breadcrumb';
import FooterOne from '../../layouts/footers/FooterOne';
import HeaderOne from '../../layouts/headers/HeaderOne';
import Wrapper from '../../layouts/Wrapper';
import EcommerceHero from './EcommerceHero';
import EcommerceAbout from './EcommerceAbout';
import EcommerceTechSlider from './EcommerceTechSlider';
import EcommerceFeatures from './EcommerceFeatures';
import EcommerceProcess from './EcommerceProcess';
import EcommerceFaq from './EcommerceFaq';
import PricingSection from '../common/PricingSection';
import CtaHomeOne from '../homes/home-1/CtaHomeOne';

export default function EcommerceDevelopment() {
  return (
    <Wrapper>
      <HeaderOne />
      <main>
        <Breadcrumb title="E-Commerce Design & Development" subtitle="Digital Solutions / E-com" />
        <EcommerceHero />
        <EcommerceAbout />
        <EcommerceTechSlider />
        <EcommerceFeatures />
        <EcommerceProcess />
        <PricingSection />
        <EcommerceFaq />
        <CtaHomeOne />
      </main>
      <FooterOne />
    </Wrapper>
  );
}
