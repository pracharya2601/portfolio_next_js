import {useState} from 'react';
import BaseLayout from 'layout/baselayout';
import Pagelayout from 'layout/pagelayout';
import Meta from 'components/meta';
import { 
  Container,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Button
} from 'reactstrap';

import { Hr, H2, Header, Text } from 'components/common';
import { Chip, ChipContainer } from 'components/portfolio/project.styles';

import {Github} from '@styled-icons/boxicons-logos/Github';
import {Live} from '@styled-icons/fluentui-system-filled/Live';


import {createClient} from 'contentful';
import Skeleton from '../../components/skeleton';

const client = createClient({
  space:process.env.CONTENTFUL_SPACE_ID,
  accessToken:process.env.CONTENTFUL_ACCESS_KEY,
})


const ProjectPage = ({project}) => {
  if(!project) return <Skeleton splashText="Building static page..."/>
  const {fields:{id, title, subtitle, thumbnail, description,uri, url, technologyUsed}} = project;
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === url.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? url.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }
  const externalLink = (goto) => {
    document.location.href = goto;
  }

  const slides = url.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item}
      >
        <img src={item} alt={item.altText} style={{width: '100%', maxHeight: '500px', objectFit: 'contain'}}/>
      </CarouselItem>
    );
  });

  return(
    <BaseLayout>
      <Meta 
        title={`${title} | ${subtitle}`}
        description={description}
        previewImageURL={`https:${thumbnail.fields.file.url}`}
        currentURL={`https://acharyaprakash.com/portfolio/${id}`}
      />
      <Pagelayout>
        <Container>
            <Header>
              <H2>{title}</H2>
              <Text>{subtitle}</Text>
            </Header>
            <div style={{padding: '20px 0', marginTop: '-30px'}}>
            <Button size="sm" onClick={() => externalLink(`${uri['project']}`)} color="info"><Live size="20"/>Visit Website</Button>
            <Button size="sm" onClick={() => externalLink(`${uri['github']}`)} color="info" style={{marginLeft: '10px'}}><Github size="20"/>Github</Button>
            </div>
            <Hr />
            <Carousel
              activeIndex={activeIndex}
              next={next}
              previous={previous}
            
            >
              <CarouselIndicators items={url} activeIndex={activeIndex} onClickHandler={goToIndex} />
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
        </Container>
      </Pagelayout>
    </BaseLayout>
  )
}

export default ProjectPage;

export async function getStaticPaths(){
  const res = await client.getEntries({
    content_type: "portfolio",
  })
  const paths = res.items.map((item) => {
    return {
      params:{id: item.fields.id}
    }
  })
  return {
    paths,
    fallback: true,
  }
}

export async function getStaticProps({params}){
  const {items} = await client.getEntries({
    content_type: "portfolio",
    "fields.id": params.id,
  })
  return {
    props: {project: items[0]},
    revalidate: 1,
  }
}