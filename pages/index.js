import {useContext} from 'react';
import styled from 'styled-components';
import Typed from 'react-typed';

import BaseLayout from 'layout/baselayout';
import { Container, Row, Col } from 'reactstrap';

import themecontext from "context/theme/themecontext";



export default function Home(props) {
  const {theme} = useContext(themecontext);
  console.log(theme);
  return (
    <BaseLayout>
      <HeroContainer img={theme === 'light' ? '/images/bg-lighta.png' : '/images/bg-darka.png'} fluid={true}>
        <RowStyled>
          <ColStyled lg="6">
            <HeroImage img={theme === 'light'? '/images/hero-image-light.jpg': '/images/hero-image-dark.jpg'}>
              <H2>
                Frontend Engineer
              </H2>
              <Text>
                Checkout my portfolio.
              </Text>
            </HeroImage>
          </ColStyled>
          <ColStyled lg="6">
              <Text 
                size="2rem" 
                maxWidth="350px"
              >
                Thankyou for visiting my portfolio. Get Informed, collabotate and discover projects i was working through years. Don't forget to checkout my blogs.
              </Text>
              <Text 
                size="2rem" 
                maxWidth="350px"
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
          </ColStyled>
        </RowStyled>

      </HeroContainer>
      
    </BaseLayout>
  )
}

const HeroContainer = styled(Container)`
  padding: 70px 0 10px 0;
  min-height: 92.8vh;
  width: 100%;
  background-image: url(${props => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`
const HeroImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 500px;
  max-width: 350px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  border-radius: 10px;
  color: ${({theme}) => theme.text};
  background-color: ${({theme}) => theme.bg};
  background-image: url(${props => props.img});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  -webkit-box-shadow:0px 0px 15px 5px ${({theme}) => theme.shadow}; 
  box-shadow:0px 0px 15px 5px ${({theme}) => theme.shadow};
`
const H2 = styled.h3`
  text-align: left;
  font-weight:600;
  color: ${({theme}) => theme.textHover};
`
const Text = styled.p`
  font-size: ${({size}) => `${size || `1rem`}`};
  text-transform: ${({uppercase}) => uppercase && `uppercase`};
  padding: 4px;
  font-weight: ${({weight}) => weight || 500 };
  max-width: ${({maxWidth}) => maxWidth || '350px'};
  margin: ${({maxWidth}) => maxWidth && '0 auto 0 0'};
  color: ${({theme, color}) => theme[color] || theme.text};
  @media only screen and (max-width:1000px) {
    margin: ${({maxWidth}) => maxWidth && '0 auto'};
  }
`
const RowStyled = styled(Row)`
  min-height: 90vh;
  max-height: max-content;
`
const ColStyled = styled(Col)`
  max-height: 100%;
  margin: auto 0;
  padding: 10px 0;
`

