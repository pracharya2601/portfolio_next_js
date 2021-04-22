import { Text } from 'layout/home/home.styles';
import {useRouter} from 'next/router';
import {GithubWithCircle} from '@styled-icons/entypo-social/GithubWithCircle';
import {Live} from '@styled-icons/fluentui-system-filled/Live';
import {
  CardImg, 
  CardBody,
  CardTitle, 
  CardSubtitle, 
  Button,
} from 'reactstrap';

import {
  StyledCard,
  AbsoluteCard,
  TopLine,
  Git,
  Chip
} from './project.styles';

const Project = ({
  id,
  title, 
  subtitle,
  url,
  technologyUsed,
  imageUrl,
}) => {
  const router = useRouter();
  const externalLink = (goto) => {
    document.location.href = goto;
  }
  return(
      <StyledCard>
        <CardImg top width="100%" src={imageUrl[0].src} alt="image description" />
        <CardBody>
          <CardTitle style={{height: '31px', overflow: 'hidden'}}>
            <Text size="1.2rem" weight="600">
              {title}
            </Text>
          </CardTitle>
          <CardSubtitle style={{height: '31px', overflow: 'hidden'}}>            
            <Text size="1rem">
              {subtitle}
            </Text>
          </CardSubtitle>
        </CardBody>
        <CardBody style={{display: 'flex', justifyContent: 'space-between',marginTop: '-20px', zIndex: '100'}}>
          <Button size="sm" onClick={() => router.push(`/portfolio/${id}`)} color="info">View Detail</Button>
          <Button size="sm" onClick={() => externalLink(`${url['project']}`)} color="info"><Live size="20"/>Live</Button>
        </CardBody>
        <TopLine onClick={() => externalLink(`${url['github']}`)}>
          <Git size="50"/>
        </TopLine>
        <AbsoluteCard id="mask">
          {technologyUsed.map((item, index) => (
            <Chip key={index}>{item}</Chip>
          ))}
        </AbsoluteCard>
      </StyledCard>
  )
}
export default Project;

