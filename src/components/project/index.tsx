import Breadcrumb from '../../common/Breadcrumb';
import FooterOne from '../../layouts/footers/FooterOne';
import HeaderOne from '../../layouts/headers/HeaderOne';
import Wrapper from '../../layouts/Wrapper';
import ProjectArea from './ProjectArea';

export default function Project() {
  return (
    <Wrapper>
      <HeaderOne />
      <main>
        <Breadcrumb title="Our Projects" subtitle="Showcasing Our Work" />
        <ProjectArea />
      </main>
      <FooterOne />
    </Wrapper>
  );
}
