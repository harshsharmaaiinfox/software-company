import HeaderOne from '../../layouts/headers/HeaderOne';
import Breadcrumb from '../../common/Breadcrumb';
import FooterOne from '../../layouts/footers/FooterOne';
import ShopifyHero from './ShopifyHero';
import ShopifySuit from './ShopifySuit';
import ShopifyServicesGrid from './ShopifyServicesGrid';
import ShopifyCounter from './ShopifyCounter';
import ShopifyFaq from './ShopifyFaq';
import CtaHomeOne from '../homes/home-1/CtaHomeOne';

const ShopifyDevelopment = () => {
    return (
        <>
            <HeaderOne />
            <main>
                <Breadcrumb title="Shopify Development" subtitle="Service" />
                <ShopifyHero />
                <ShopifySuit />
                <ShopifyServicesGrid />
                <ShopifyCounter />
                <ShopifyFaq />
                <CtaHomeOne />
            </main>
            <FooterOne />
        </>
    );
};

export default ShopifyDevelopment;
