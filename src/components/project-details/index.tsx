import { useParams } from 'react-router-dom';
import Breadcrumb from '../../common/Breadcrumb';
import FooterOne from '../../layouts/footers/FooterOne';
import HeaderOne from '../../layouts/headers/HeaderOne';
import Wrapper from '../../layouts/Wrapper';
import ProjectDetailsArea from './ProjectDetailsArea';
import project_data from '../../data/project-data';

export default function ProjectDetails() {
  const { id } = useParams();
  const project = project_data.find((item) => item.id === Number(id)) || project_data[0];

  return (
    <Wrapper>
      <HeaderOne />
      <main>
        <Breadcrumb title={project.title} subtitle={`Case Study / ${project.category}`} />
        <ProjectDetailsArea />
      </main>
      <FooterOne />
    </Wrapper>
  );
}
