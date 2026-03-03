import Breadcrumb from '../../common/Breadcrumb';
import HeaderOne from '../../layouts/headers/HeaderOne';
import FooterOne from '../../layouts/footers/FooterOne';
import MarketingHero from './MarketingHero';
import MarketingOutcome from './MarketingOutcome';
import MarketingFeatures from './MarketingFeatures';
import CtaHomeOne from '../homes/home-1/CtaHomeOne';

const DigitalMarketing = () => {
    return (
        <>
            <HeaderOne />
            <main>
                <Breadcrumb title="Digital Marketing" subtitle="Service" />
                <MarketingHero />
                <MarketingOutcome />
                <MarketingFeatures />
                <CtaHomeOne />
            </main>
            <FooterOne />
        </>
    );
};

export default DigitalMarketing;
