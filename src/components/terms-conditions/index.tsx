import Breadcrumb from '../../common/Breadcrumb';
import FooterOne from '../../layouts/footers/FooterOne';
import HeaderOne from '../../layouts/headers/HeaderOne';
import Wrapper from '../../layouts/Wrapper';
import TermsContent from './TermsContent';

export default function TermsConditions() {
  return (
    <Wrapper>
      <HeaderOne />
      <main>
        <Breadcrumb title="Terms & Conditions" subtitle="Legal" />
        <TermsContent />
      </main>
      <FooterOne />
    </Wrapper>
  );
}
