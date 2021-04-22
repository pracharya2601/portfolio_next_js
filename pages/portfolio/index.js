import {useState} from 'react';
import Link from 'next/link';
import BaseLayout from 'layout/baselayout';
import Pagelayout from 'layout/pagelayout';

import server from 'config';
import { Container, Nav, NavItem, TabContent, TabPane } from 'reactstrap';
import {ColStyled,SkillsContainer, ContentHeader, H2, RowStyled, StyledTabs, Text} from 'layout/home/home.styles';
import Project from 'components/portfolio/Project';

const Portfolio = (props) => {
  const [activeTab, setActiveTab] = useState('all');
  const {project, technology} = props;

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  const renderPortfolio = (projects) => (
    projects.map(({id, title, subtitle, description, url, technologyUsed, imageUrl}) => (
      <div key={id} style={{width: '300px'}}>
        <Project 
          id={id}
          title={title}
          subtitle={subtitle}
          description={description}
          url={url}
          technologyUsed={technologyUsed}
          imageUrl={imageUrl}
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
                      {renderPortfolio(project)}
                    </SkillsContainer>
                  </TabPane>
                  {technology.map((item) => (
                    <TabPane tabId={item} key={item}>
                      <SkillsContainer>
                        {renderPortfolio(project.filter((p) => p.technologyUsed.includes(item)))}
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

Portfolio.getInitialProps = async (ctx) => {
  const res = await fetch(`${server}/api/portfolio`);
  const json = await res.json();
  const techArr = json.map(item => item.technologyUsed).join().split(',');
  return {
    project: json,
    technology: techArr.filter((c, index) => techArr.indexOf(c) === index),
  };
}