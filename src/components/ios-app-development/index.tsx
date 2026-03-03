
import HeaderOne from '../../layouts/headers/HeaderOne';
import Breadcrumb from '../../common/Breadcrumb';
import FooterOne from '../../layouts/footers/FooterOne';
import IosHero from './IosHero';
import IosSuit from './IosSuit';
import IosAdvantages from './IosAdvantages';
import IosFeatures from './IosFeatures';
import IosTestimonials from './IosTestimonials';
import CtaHomeOne from '../homes/home-1/CtaHomeOne';

const IosAppDevelopment = () => {
    return (
        <>
            <HeaderOne />
            <main>
                <Breadcrumb title="iOS App Development" subtitle="Service" />
                <IosHero />
                <IosSuit />
                <IosAdvantages />
                <IosFeatures />
                <IosTestimonials />
                <CtaHomeOne />
            </main>
            <FooterOne />
        </>
    );
};

export default IosAppDevelopment;
