import {useState} from 'react';
import BaseLayout from 'layout/baselayout';
import Pagelayout from 'layout/pagelayout';

import { Container, Nav, NavItem, TabContent, TabPane } from 'reactstrap';
import {ColStyled,SkillsContainer, ContentHeader, H2, RowStyled, StyledTabs, Text} from 'layout/home/home.styles';
import Project from 'components/portfolio/Project';

import {createClient} from 'contentful';

const client = createClient({
  space:process.env.CONTENTFUL_SPACE_ID,
  accessToken:process.env.CONTENTFUL_ACCESS_KEY,
})


const Portfolio = (props) => {
  const [activeTab, setActiveTab] = useState('all');
  const {portfolios, technology} = props;

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  const renderPortfolio = (projects) => (
    projects.map(({fields: {id, title, subtitle, description, technologyUsed, thumbnail, uri}}) => (
      <div key={id} style={{width: '300px'}}>
        <Project 
          id={id}
          title={title}
          subtitle={subtitle}
          description={description}
          url={uri}
          technologyUsed={technologyUsed}
          thumbnail={thumbnail.fields.file.url}
        />
    </div>
    )))

  return (
    <BaseLayout>
      <Pagelayout>
        <Container id="portfolio">
          <RowStyled>
            <ColStyled sm="12">
              <ContentHeader>
                <div />
                <H2 size="3rem">Portfolio</H2>
                <Text>View my portfolio</Text>
              </ContentHeader>
            </ColStyled>
            <ColStyled sm="12">
              <Nav tabs>
              <NavItem>
                <StyledTabs
                    activetab={activeTab === 'all' ? 'true' : ''}
                    onClick={() => toggle('all')}
                  >
                    All
                  </StyledTabs>
                </NavItem>
                {technology.map((item) => (
                  <NavItem 
                    key={item}
                    onClick={() => toggle(item)}
                  >
                    <StyledTabs
                      activetab={activeTab === item ? 'true' : ''}
                    >
                      {item}
                    </StyledTabs>
                </NavItem>
                ))}
              </Nav>
              <TabContent activeTab={activeTab}>
                  <TabPane tabId={'all'}>
                    <SkillsContainer>
                      {renderPortfolio(portfolios)}
                    </SkillsContainer>
                  </TabPane>
                  {technology.map((item) => (
                    <TabPane tabId={item} key={item}>
                      <SkillsContainer>
                        {renderPortfolio(portfolios.filter((p) => p.fields.technologyUsed.includes(item)))}
                      </SkillsContainer>
                    </TabPane>
                  ))}
              </TabContent>
            </ColStyled>
        </RowStyled>
        </Container>
      </Pagelayout>
    </BaseLayout>
  )
}

export default Portfolio;

export async function getStaticProps(){
  const {items} = await client.getEntries({content_type: "portfolio"})
  const techArr = items.map(item => item.fields.technologyUsed).join().split(',');
  return {
    props: {
      portfolios: items,
      technology: techArr.filter((c, index) => techArr.indexOf(c) === index),
    }
  }
}