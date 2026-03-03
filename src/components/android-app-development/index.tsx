import Breadcrumb from '../../common/Breadcrumb';
import FooterOne from '../../layouts/footers/FooterOne';
import HeaderOne from '../../layouts/headers/HeaderOne';
import Wrapper from '../../layouts/Wrapper';
import AndroidHero from './AndroidHero';
import AndroidSuit from './AndroidSuit';
import AndroidAdvantages from './AndroidAdvantages';
import AndroidFeatures from './AndroidFeatures';
import AndroidTestimonials from './AndroidTestimonials';
import CtaHomeOne from '../homes/home-1/CtaHomeOne';

export default function AndroidAppDevelopment() {
    return (
        <Wrapper>
            <HeaderOne />
            <main>
                <Breadcrumb title="Android App Development" subtitle="Technology / Mobile" />
                <AndroidHero />
                <AndroidSuit />
                <AndroidAdvantages />
                <AndroidFeatures />
                <AndroidTestimonials />
                <CtaHomeOne />
            </main>
            <FooterOne />
        </Wrapper>
    );
}
