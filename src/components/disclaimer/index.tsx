import Breadcrumb from '../../common/Breadcrumb';
import FooterOne from '../../layouts/footers/FooterOne';
import HeaderOne from '../../layouts/headers/HeaderOne';
import Wrapper from '../../layouts/Wrapper';
import DisclaimerContent from './DisclaimerContent';

export default function Disclaimer() {
  return (
    <Wrapper>
      <HeaderOne />
      <main>
        <Breadcrumb title="Disclaimer" subtitle="Legal" />
        <DisclaimerContent />
      </main>
      <FooterOne />
    </Wrapper>
  );
}
