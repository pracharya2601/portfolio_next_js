import {useContext} from 'react';
import { useRouter } from 'next/router';
import Typed from 'react-typed';
import {Messages} from '@styled-icons/typicons/Messages';
import { Container,Row, Col, Button, Table,  } from 'reactstrap';
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
} from './home.styles';

import themecontext from "context/theme/themecontext";

export const HeroLayout = (props) => {
  const {theme} = useContext(themecontext);
  return (
    <HeroContainer img={theme === 'light' ? '/images/bg-lighta.png' : '/images/bg-darka.png'} fluid={true}>
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
              <Button color="info"><Messages size="25" style={{margin: '0 4px'}}/>Get in Touch</Button>
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
        <ColStyled sm="12" padding>
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
        <ColStyled sm="12" padding>
          <Table borderless>
            <tbody>
              <tr>
                <td><Text weight="600">City</Text></td>
                <td><Text>San Francisco, CA</Text></td>
              </tr>
              <tr>
                <td><Text weight="600">Website</Text></td>
                <td><Text pointer onClick={externalLink}>www.acharyaprakash.com</Text></td>
              </tr>
              <tr>
                <td><Text weight="600">Interests</Text></td>
                <td><Text>Video Games, Soccer, Basketball</Text></td>
              </tr>
              <tr>
                <Button color="info" onClick={() => router.push('/portfolio')}><Messages size="25" style={{margin: '0 4px'}}/>See my work</Button>
              </tr>
            </tbody>
          </Table>
        </ColStyled>
        <div style={{height: '5vh', width: '100%'}}/>
      </RowStyled>
    </Container>
  )
}

