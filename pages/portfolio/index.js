import Link from 'next/link';
import BaseLayout from 'layout/baselayout';
import server from 'config';

const Portfolio = (props) => {
  const {project} = props;
  return (
    <BaseLayout>
      {project.map(({id, name, description}) => (
        <li key={id}>
          <Link href={`/portfolio/${id}`}>
            <a>
            {name}, {description}
            </a>
          </Link>
        </li>
      ))}
    </BaseLayout>
  )
}

export default Portfolio;

Portfolio.getInitialProps = async (ctx) => {
  const res = await fetch(`${server}/api/portfolio`);
  const json = await res.json();

  return {project: json};
}