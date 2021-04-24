import styled from 'styled-components';
import Image from 'next/image';

import { Media } from 'reactstrap';

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
    & #iconcontainer {
      width: 50px;
      height: 100%;
    }
  }
  & #mediabody {
    padding-left: 10px;
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
