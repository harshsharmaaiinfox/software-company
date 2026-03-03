import Breadcrumb from '../../common/Breadcrumb';
import FooterOne from '../../layouts/footers/FooterOne';
import HeaderOne from '../../layouts/headers/HeaderOne';
import Wrapper from '../../layouts/Wrapper';
import LogoHero from './LogoHero';
import LogoPortfolio from './LogoPortfolio';
import LogoPricing from './LogoPricing';
import LogoFeatures from './LogoFeatures';
import LogoProcess from './LogoProcess';
import CtaHomeOne from '../homes/home-1/CtaHomeOne';

export default function LogoDesigning() {
    return (
        <Wrapper>
            <HeaderOne />
            <main>
                <Breadcrumb title="Logo Designing" subtitle="Creative / Identity" />
                <LogoHero />
                <LogoPortfolio />
                <LogoPricing />
                <LogoFeatures />
                <LogoProcess />
                <CtaHomeOne />
            </main>
            <FooterOne />
        </Wrapper>
    );
}
