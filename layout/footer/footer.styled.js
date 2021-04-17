import styled from 'styled-components';

export const FootContainer = styled.footer`
  width: 100%;
  min-height: max-content;
  background-color: ${({theme}) => theme.bg};
  -webkit-box-shadow:0px -1px 15px 6px ${({theme}) => theme.shadow}; 
  box-shadow:0px -1px 15px 6px ${({theme}) => theme.shadow};
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  padding-bottom: 30px;

`
export const SocialMediaContainer = styled.div`
  display: flex;
  @media (max-width: 1000px) {
    width:100%;
    justify-content: center;
  }
`
export const MediaBtn = styled.div`
  height: 50px;
  width: 50px;
  padding: 3px;
  margin: 8px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid transparent;
  &:hover {
    cursor: pointer;
    color: ${({theme})=> theme.textHover};
    background-color: ${({theme}) => theme.shadow};
    border: 1px solid ${({theme})=> theme.textHover};
  }
`