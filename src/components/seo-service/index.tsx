
import HeaderOne from '../../layouts/headers/HeaderOne';
import Breadcrumb from '../../common/Breadcrumb';
import FooterOne from '../../layouts/footers/FooterOne';
import SeoHero from './SeoHero';
import CtaHomeOne from '../homes/home-1/CtaHomeOne';

const SeoService = () => {
    return (
        <>
            <HeaderOne />
            <main>
                <Breadcrumb title="SEO Optimization" subtitle="Service" />
                <SeoHero />
                <CtaHomeOne />
            </main>
            <FooterOne />
        </>
    );
};

export default SeoService;
