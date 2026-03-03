import Breadcrumb from '../../common/Breadcrumb';
import FooterOne from '../../layouts/footers/FooterOne';
import HeaderOne from '../../layouts/headers/HeaderOne';
import Wrapper from '../../layouts/Wrapper';
import MobileAppHero from './MobileAppHero';
import MobileAppAbout from './MobileAppAbout';
import MobileAppTechSlider from './MobileAppTechSlider';
import MobileAppStriking from './MobileAppStriking';
import MobileAppExpertise from './MobileAppExpertise';
import MobileAppProcess from './MobileAppProcess';
import MobileAppFaq from './MobileAppFaq';
import CtaHomeOne from '../homes/home-1/CtaHomeOne';

export default function MobileAppDevelopment() {
    return (
        <Wrapper>
            <HeaderOne />
            <main>
                <Breadcrumb title="Mobile App Design & Development" subtitle="Digital Solutions / Mobile Apps" />
                <MobileAppHero />
                <MobileAppAbout />
                <MobileAppTechSlider />
                <MobileAppStriking />
                <MobileAppExpertise />
                <MobileAppProcess />
                <MobileAppFaq />
                <CtaHomeOne />
            </main>
            <FooterOne />
        </Wrapper>
    );
}
