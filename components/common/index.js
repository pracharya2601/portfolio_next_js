import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  padding: 30px 10px 10px;
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
  @media only screen and (max-width:500px) {
    font-size: 1.4rem;
  } 
`

export const Text = styled.p`
  font-size: ${({size}) => `${size || `1rem`}`};
  text-transform: ${({uppercase}) => uppercase && `uppercase`};
  padding: 4px;
  font-weight: ${({weight}) => weight || 500 };
  font-style: ${({fontStyle}) => fontStyle ? fontStyle : 'normal'};
  text-decoration: ${({underline}) => underline && 'underline'};
  max-width: ${({maxWidth}) => maxWidth || '100%'};
  margin: ${({maxWidth}) => maxWidth && '0 auto 0 0'};
  color: ${({theme, color}) => theme[color] || theme.text};
  cursor: ${({pointer}) => pointer && 'pointer'};
  & > #strong {
    text-decoration: none;
    font-style: normal;
  }
  @media only screen and (max-width:1000px) {
    margin: ${({maxWidth}) => maxWidth && '0 auto'};
  }
`

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  padding: 5px 0 20px 0;
  & > * {
    margin-top: 5px;
  }
`
export const Hr = styled.hr`
  color: ${({theme}) => theme.text};
  background-color: ${({theme}) => theme.shadow};
  margin-top: 0;
  margin-bottom: 20px;
`