import Breadcrumb from '../../common/Breadcrumb';
import FooterOne from '../../layouts/footers/FooterOne';
import HeaderOne from '../../layouts/headers/HeaderOne';
import Wrapper from '../../layouts/Wrapper';
import PrivacyContent from './PrivacyContent';

export default function PrivacyPolicy() {
  return (
    <Wrapper>
      <HeaderOne />
      <main>
        <Breadcrumb title="Privacy Policy" subtitle="Legal" />
        <PrivacyContent />
      </main>
      <FooterOne />
    </Wrapper>
  );
}
