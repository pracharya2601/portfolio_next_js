import {useState} from 'react';
import server from 'config';
import BaseLayout from 'layout/baselayout';
import Pagelayout from 'layout/pagelayout';
import { 
  Container,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Button
} from 'reactstrap';

import {ColStyled,SkillsContainer, ContentHeader, H2, RowStyled, StyledTabs, Text} from 'layout/home/home.styles';
import { Chip, ChipContainer } from 'components/portfolio/project.styles';

import {Github} from '@styled-icons/boxicons-logos/Github';
import {Live} from '@styled-icons/fluentui-system-filled/Live';

const ProjectPage = ({project, ...rest}) => {
  const {imageUrl, id, title, subtitle, description, url, technologyUsed} = project;
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === imageUrl.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? imageUrl.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }
  const externalLink = (goto) => {
    document.location.href = goto;
  }

  const slides = imageUrl.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} width="100%"/>
        <CarouselCaption captionText={item.caption} />
      </CarouselItem>
    );
  });


  return(
    <BaseLayout>
      <Pagelayout>
        <Container>
          <RowStyled>
          <ColStyled sm="12">
            <ContentHeader nopadding="true">
              <H2 size="2rem">{project.title}</H2>
              <Text>{project.subtitle}</Text>
            </ContentHeader>
            <div style={{padding: '20px 0', marginTop: '-30px'}}>
            <Button size="sm" onClick={() => externalLink(`${url['project']}`)} color="info"><Live size="20"/>Visit Website</Button>
            <Button size="sm" onClick={() => externalLink(`${url['project']}`)} color="info" style={{marginLeft: '10px'}}><Github size="20"/>Github</Button>
            </div>
            <Carousel
              activeIndex={activeIndex}
              next={next}
              previous={previous}
            >
              <CarouselIndicators items={imageUrl} activeIndex={activeIndex} onClickHandler={goToIndex} />
              {slides}
              <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
              <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
            </Carousel>
            <ChipContainer>
            {technologyUsed.map((item, index) => (
              <Chip key={index}>{item}</Chip>
            ))}
            </ChipContainer>
            <Text size="1.5rem" weight="600">About this Project</Text>
            <Text size="1.4rem">
              {description}
            </Text>
            </ColStyled>
          </RowStyled>
        </Container>
      </Pagelayout>
    </BaseLayout>
  )
}

export default ProjectPage;

ProjectPage.getInitialProps = async ({query}) => {
  const res = await fetch(`${server}/api/portfolio/${query.portfolioSlug}`);
  const json = await res.json();

  return {project: json};
}