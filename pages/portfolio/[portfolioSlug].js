import server from 'config';
import BaseLayout from 'layout/baselayout';

const ProjectPage = (props) => {
  return(
    <BaseLayout>
      I am project
    </BaseLayout>
  )
}

export default ProjectPage;

ProjectPage.getInitialProps = async ({query}) => {
  const res = await fetch(`${server}/api/portfolio/${query.portfolioSlug}`);
  const json = await res.json();

  return {project: json};
}