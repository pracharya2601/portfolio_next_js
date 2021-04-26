import styled from 'styled-components';
import Image from 'next/image';

import {Container, Media } from 'reactstrap';

export const BlogDetailContainer = styled(Container)`
  margin-top: 10px;
  background: ${({theme}) => theme.shadow};
  padding: 0;
`

export const BlogBox = styled.div`
  display: flex;
  flex-direction: row;
  background: ${({theme}) => theme.shadow};
  border: 1px solid ${({theme}) => theme.shadow};
  margin: 10px 0;
  padding: 5px 50px 5px 5px;
  position: relative;
  flex-grow: 1;

  &:hover {
    border-color: ${({theme}) => theme.text};
    cursor: pointer;
    & #iconcontainer {
      width: 50px;
      height: 100%;
    }
  }
  & #mediabody {
    padding-left: 10px;
  }
  & #subtitle {
    max-height: 70px;
    overflow: hidden;
  }
  @media (max-width:768px) {
    padding: 5px;
    & #subtitle {
      display: none;
    }
  }
  @media (max-width:499px){
    max-width: 300px;
    width: 300px;
    flex-direction: column;
    padding: 5px;
    & #subtitle {
      display: block;
    }
    & #mediabody {
      padding-left: 0;
    }
    &:hover {
      & #iconcontainer {
        height: 50px;
        width: 100%;
      }
    }
  }

`
export const Heading = styled(Media)`
  font-weight: 600;
  margin: 10px 0;
  padding: 4px 0;
  max-height: 90px;
  overflow: hidden;
`

export const IconContainer = styled.div`
  position: absolute;
  z-index: 100;
  top:0;
  right: 0;
  height: 100%;
  width: 0;
  overflow: hidden;
  background: ${({theme}) => theme.shadow};
  border-left: 1px solid ${({theme}) => theme.shadow};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  transition: all .5s ease;
  @media (max-width:768px) {
    left: 0;
    border-right: 1px solid ${({theme}) => theme.shadow};
    background: ${({theme}) => theme.shadow};
  }
  @media (max-width:499px){
    bottom: 0;
    flex-direction: row;
    height: 0;
    width: 100%;
    overflow: hidden;
    border-bottom: 1px solid ${({theme}) => theme.shadow};
    background:  ${({theme}) => theme.shadow};
  }
  & > * {
    border: 2px solid ${({theme}) => theme.bg};
    &:hover {
      cursor: pointer;
      border: 2px solid ${({theme}) => theme.shadow};
    }
  }
`

export const Paragraph = styled.p`
  font-size: 1.3rem;
  line-height: 1.3rem;
  padding: 0 10px;
  & > a  span {
    font-style: italic;
    transition: all 0.2s linear;
    text-decoration: underline;
    &:hover {
      cursor: pointer;
      transform: scale(1.03);
    }
  }
  & > span {
    display: inline-block;
    :nth-child(1) {
      text-indent: ${({textIntend}) => textIntend === 'true' ? '30px' : ""};
    } 
  }
  @media (max-width:499px){
    font-size: 1.0rem;
  }
`

export const Span = styled.span`
  margin-right: 3px;
  font-family: 'Montserrat', 'Helvetica';
  font-weight: ${({fontWeight}) => fontWeight || 'normal'};
  font-style: ${({fontStyle}) => fontStyle || 'normal'};
  text-decoration: ${({textDecoration}) => textDecoration || 'none'};
`

export const OutsideLink = styled.a`

`
export const ListItem = styled.li`

`

export const BlockQuote = styled.div`
  height: max-content;
  padding: 0 10px;
  & > div {
    border-left: 10px double ${({theme}) => theme.shadow};
  }
`
