import styled from 'styled-components';
import { Container, Row, Col, Button,  NavLink, Jumbotron,  } from 'reactstrap';

export const HeroContainer = styled(Container)`
  min-height: 100vh;
  background-image: url(${props => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding-top:70px;
  padding-bottom: 10px;
`

export const HeroBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 400px;
  width: 90%;
  margin: 0 auto;
  padding: 50px 20px;
  border-radius: 10px;
`
export const HeroImg = styled.img`
  width:100%;
  height:100%;
  max-height: 500px;
`
export const TextBox = styled.div`
  padding: 20px;
  background: ${({theme}) => theme.shadow}; 
  -webkit-box-shadow:0px 0px 15px 5px ${({theme}) => theme.shadow}; 
  box-shadow:0px 0px 15px 5px ${({theme}) => theme.shadow};
`
export const H2 = styled.h2`
  text-align: left;
  font-size: ${({size}) => size || '2rem'};
  font-weight:${({bold}) => bold ? '600' : '600'};
  color: ${({theme, color}) => theme[color] || theme.text};
  padding: 5px 0;
  border-bottom: ${({theme, underline}) => underline && `3px solid ${theme.textHover}`};
  & > span {
    color: ${({theme}) => theme.text};
    font-weight: 500;
  }
`
export const Text = styled.p`
  font-size: ${({size}) => `${size || `1rem`}`};
  text-transform: ${({uppercase}) => uppercase && `uppercase`};
  padding: 4px;
  font-weight: ${({weight}) => weight || 500 };
  max-width: ${({maxWidth}) => maxWidth || '100%'};
  margin: ${({maxWidth}) => maxWidth && '0 auto 0 0'};
  color: ${({theme, color}) => theme[color] || theme.text};
  cursor: ${({pointer}) => pointer && 'pointer'};
  @media only screen and (max-width:1000px) {
    margin: ${({maxWidth}) => maxWidth && '0 auto'};
  }
`
export const ContentHeader = styled.div`
  width:100%;
  position: relative;
  padding-top: 90px;
  padding-left: ${({nopadding}) => nopadding ? '0px' : '20px'};
  padding-right: 20px;
  padding-bottom: 30px;
  & > * {
    padding: 0;
  }
  & > div {
    position: absolute;
    left: 0;
    bottom: 5;
    height: 88px;
    width: 10px;
    background: ${({theme}) => theme.textHover};
  }
`
export const RowStyled = styled(Row)`
  min-height: ${({height}) => height || '90vh'};
  max-height: max-content;
`
export const ColStyled = styled(Col)`
  max-height: 100%;
  margin: auto 0;
  padding: 10px;
`
export const SkillBox = styled.div`
  width: 5rem;
  height: 6.5rem;
  margin: 1rem;
  position: relative;
  border: 1px solid ${({theme}) => theme.shadow};
  overflow:hidden;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  -webkit-box-shadow: 0px 0px 0px 1px ${({theme}) => theme.shadow}; 
  box-shadow: 0px 0px 0px 1px ${({theme}) => theme.shadow};
  display: flex;
  justify-content: center;
  &:hover {
    & > code {
      height: max-content;
    }
  }
  & > code {
    position: absolute;
    bottom:0;
    left: 0;
    width: 100%;
    text-align: center;
    color: ${({theme}) => theme.text};
    background: ${({theme}) => theme.shadow};
    height: 21px;
  }
  
  

`
export const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content:flex-start;
  min-height: 50vh;

  @media (max-width: 767px) {
    justify-content:center;
  }
`
export const StyledTabs = styled(NavLink)`
  color: ${({theme}) => theme.text};
  background: ${({theme, activetab}) => activetab && theme.shadow};
  &:hover {
    color: ${({theme}) => theme.text};
    background: ${({theme}) => theme.shadow};
    cursor: pointer;
  }
`

export const StyledJumb = styled(Jumbotron)`
  background: ${({theme}) => theme.shadow};
`
