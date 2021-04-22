import {useContext, useState} from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link'
import Typed from 'react-typed';
import {Messages} from '@styled-icons/typicons/Messages';

import { 
  Container,
  Row, 
  Col, 
  Button, 
  Table,
  Nav ,
  NavItem,
  NavLink,
  TabContent,
  TabPane, 
  Form,
  FormGroup,
  Label,
  Input,

} from 'reactstrap';
import {
  HeroContainer,
  HeroBox,
  HeroImg,
  TextBox,
  H2,
  Text,
  ContentHeader,
  RowStyled,
  ColStyled,
  SkillBox,
  StyledTabs,
  SkillsContainer,
  StyledJumb,
} from './home.styles';

import skills from 'utils/skills';
import themecontext from "context/theme/themecontext";

export const HeroLayout = (props) => {
  const {theme} = useContext(themecontext);
  const router = useRouter()
  return (
    <HeroContainer img={theme === 'light' ? '/images/bg-lighta.png' : '/images/bg-darka.png'} fluid={true} id="home">
      <Container>
        <RowStyled>
        <ColStyled lg="6">
            <HeroBox>
              <HeroImg src={theme === 'light' ? `/svgs/hero-light.svg`: `/svgs/hero-dark.svg`}/>
            </HeroBox>
          </ColStyled>
          <ColStyled lg="6">
              <TextBox>
                <H2
                  color="textHover"
                  size="3.5rem"
                  bold
                >
                  Hi, <span>I'm Prakash</span>
                </H2>
                <H2>
                  I am Frontend Engineer
                </H2>
              <Text 
                size="1.5rem" 
              >
                Thankyou for visiting my portfolio. Get Informed, collabotate and discover projects i was working through years. Don't forget to checkout my blogs.
              </Text>
              <Button color="info" onClick={() => router.push("/#contact")}><Messages size="25" style={{margin: '0 4px'}}/>Get in Touch</Button>
              <Text 
                size="2rem" 
                weight="600"
                color="textHover"
              >
                <Typed 
                  strings={[`Javascript `, `Reactjs `, `Nodejs `, `Nextjs `, `Typescript `]}
                  typeSpeed={70}
                  backSpeed={50}
                  loop
                />
              </Text>      
              </TextBox>
          </ColStyled>
        </RowStyled>
    </Container>
  </HeroContainer>
  )
}

export const AboutLayout = (props) => {
  const router = useRouter();
  const externalLink = () => {
    document.location.href = 'http://www.acharyaprakash.com/';
  }
  return(
    <Container id="about">
      <RowStyled>
        <ColStyled sm="12">
          <ContentHeader>
            <div />
            <H2
              size="3rem"
            >
              About Me
            </H2>
            <Text>
              Want to know more about me
            </Text>
          </ContentHeader>
        </ColStyled>
        <ColStyled sm="12" padding="true">
          <Text
            size="1.5rem"
            weight="600"
          >
            I am Prakash Acharya and Frontend Engineer
          </Text>
          <Text
            size="1.2rem"
          >
            I am a Front-end engineer continually searching for approaches to develop and pursue my new passion for solving problems through code. I care about what I build and the way I build it. I enjoy being challenged and fascinating with projects that expect me to work outside my solace and knowledge set, as continuing to learn new languages and development techniques is essential to me and the accomplishment of an association that I will be working. With years of experience as a Developer, I've acquired the abilities and knowledge necessary to create a project hit. I enjoy every step of themethod, from discussion and collaboration to concept and execution. I am dedicated in driving innovation with ability to follow industry and technological trends, and faciliting early adoption of innovation.
          </Text>
        </ColStyled>
        <ColStyled sm="12" padding ="true">
          <Table borderless>
            <tbody>
              <tr>
                <td><Text weight="600">City</Text></td>
                <td><Text>San Francisco, CA</Text></td>
              </tr>
              <tr>
                <td><Text weight="600">Website</Text></td>
                <td><Text pointer color="textHover" onClick={externalLink}>www.acharyaprakash.com</Text></td>
              </tr>
              <tr>
                <td><Text weight="600">Interests</Text></td>
                <td><Text>Video Games, Soccer, Basketball</Text></td>
              </tr>
            </tbody>
          </Table>
          <Button color="info" onClick={() => router.push('/portfolio')}><Messages size="25" style={{margin: '0 4px'}}/>See my work</Button>
        </ColStyled>
        <div style={{height: '5vh', width: '100%'}}/>
      </RowStyled>
    </Container>
  )
}

export const SkillLayout = (props) => {
  const [activeTab, setActiveTab] = useState('all');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  const tabs = [
    {name: 'All', tech: 'all'},
    {name: 'Frontend', tech: 'frontend'},
    {name: 'Backend', tech: 'backend'},
    {name: 'Framework', tech: 'framework'},
    {name: 'Database', tech: 'database'},
    {name: 'Other', tech: 'other'},
  ]

  const renderSkills = (skills) => (
    skills.map(({id, logo, name}) => (
      <SkillBox key={id}>
        {logo}
        <code>{name}</code>
    </SkillBox>
    )))
  return(
    <Container id="skills">
      <RowStyled>
        <ColStyled sm="12">
        <ContentHeader>
            <div />
            <H2 size="3rem"> Skills </H2>
            <Text>Checkout my Skills</Text>
        </ContentHeader>
        </ColStyled>
        <ColStyled sm="12">
          <Nav tabs>
            {tabs.map(({name, tech}) => (
              <NavItem 
                key={tech}
                onClick={() => toggle(tech)}
              >
                <StyledTabs
                  activetab={activeTab === tech? 'true' : ''}
                >
                  {name}
                </StyledTabs>
              </NavItem>
            ))}
          </Nav>
          <TabContent activeTab={activeTab}>
            
            {tabs.map(({tech}) => (
              <TabPane tabId={tech} key={tech}>
                <SkillsContainer>
                {renderSkills(skills.filter((item) => item.tech.includes(tech)))}
              </SkillsContainer>
            </TabPane>
            ))}
          </TabContent>
        </ColStyled>
      </RowStyled>
    </Container>
  )
}

export const ContactLayout = (props) => {
  return (
    <Container id="contact">
      <RowStyled>
      <ColStyled sm="12">
        <ContentHeader>
            <div />
            <H2 size="3rem">Contact</H2>
            <Text>Get in  touch with me</Text>
        </ContentHeader>
        </ColStyled>
        <ColStyled sm='12'>
          <RowStyled height="55vh">
          <Col sm="12" md="6">
          <StyledJumb>
            <Text size="1.5rem" weight="600">Get in Touch</Text>
            <Text weight="600">Prakash Acharya</Text>
            <p>Address: San Francisco, Ca, United States</p>
            Email: <Link href="mailto:pracharya2601@gmail.com">
              <a>pracharya2601@gmail.com</a>
            </Link>
            <br />
            Phone: <Link href="tel:+15106821709">
              <a>+1 (510)6821709</a>
            </Link>
            <br/ >
            Website: acharyaprakash.com
          </StyledJumb>
          </Col>
          <Col sm="12" md="6">
          <Form>
            <FormGroup>
              <Label for="name">Full Name</Label>
              <Input type="text" id="name" placeholder="Your Full Name" />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input type="email" id="email" placeholder="Email address" />
            </FormGroup>
            <FormGroup>
              <Label for="telephone">Contact</Label>
              <Input type="telephone" id="telephone" placeholder="Contact number" />
            </FormGroup>
            <FormGroup>
              <Label for="message">Message</Label>
              <Input type="textarea" id="message" placeholder="Write a message" />
            </FormGroup>
            <Button color="info">Submit</Button>
          </Form>
          </Col>
          </RowStyled>
        </ColStyled>
      </RowStyled>
    </Container>
  )
}


