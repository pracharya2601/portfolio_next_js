import styled from 'styled-components';
import Link from 'next/link';

import {Cross} from '@styled-icons/entypo/Cross';

export const Nav = styled.nav`
  font-size: 18px;
  width: 100%;
  position: absolute;
  top: 0;
  z-index: 999;
  height: 70px;

  background-color: ${({theme}) => theme.header || theme.bg};
  -webkit-box-shadow: 0px 0px 2px 0px ${({theme}) => theme.shadow}; 
  box-shadow: 0px 0px 2px 0px ${({theme}) => theme.shadow};
  display: flex;
  justify-content: center;
  align-items: center;
`
export const NavbarContainer = styled.header`
  margin: 0 auto;
  padding: 0 50px;
  max-width: 1300px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width:400px){
      padding: 0 10px;
  }
  @media (max-width:991px) {
      padding: 0 20px;
  }
  @media (min-width: 1500px) {
      max-width: 1500px;
  }
  @media (min-width: 1800px) {
      max-width: 1800px;
      padding: 0 30px;
  }
`
export const NavAnchor = styled.a`
  color: ${({theme}) => theme.text};
  cursor: pointer;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 1.9rem;
  font-weight: 800;
  transition: all .5s ease;
  text-transform: lowercase;
  &:hover{
      transform: scale(1.02);
      text-decoration: none;
      color: ${({theme}) => theme.textHover};
  }
  & > span {
    color: ${({theme}) => theme.textHover};
    padding: 0 5px;
  }
`;

export const MenuIcon = styled.div`
  display: none;
  & > * {
    color: ${({theme}) => theme.text};
  }
  @media (max-width: 1000px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 20%);
    font-size: 1.9rem;
    cursor: pointer;
    margin-right: 15px;
  }
`
export const ThemeIcon = styled.div`
  padding: 5px;
  margin: 0 0 0 auto;
  cursor: pointer;
  @media only screen and (max-width: 1000px) {
    margin: 0 50px 0 auto;
  }
`
export const CrossBtn = styled(Cross)`
display: none;
  @media only screen and (max-width: 1000px) {
    display: block;
    margin-right: auto;
    margin-left: 5px;
    margin-top: 5px;
    padding: 5px;
    border-radius: 5px;
    &:hover {
      transform: scale(1.02);
      text-decoration: none;
      cursor: pointer;
      color: ${({theme}) => theme.textHover};
      -webkit-box-shadow:0px 0px 5px 0px ${({theme}) => theme.shadow}; 
      box-shadow:0px 0px 5px 0px ${({theme}) => theme.shadow};
    }
  }
`;;

export const Menu = styled.ul`
  display: flex;
  align-items: left;
  text-align: left;
  @media only screen and (max-width:1000px) {
      display: flex;
      flex-direction: column;
      padding: 0;
      height: 100vh;
      position: absolute;
      background-color: ${({theme}) => theme.sidebar};
      top: 0;
      right:0;
      max-width: 320px;
      min-width: 300px;
      transition: all .5s ease;
      transform: ${({open}) => open ? 'translate(0)' : 'translate(100%)'};
      overflow-x: hidden;
  }
`;
export const MenuItem = styled.li`
  list-style: none;
  height: 100%;
  line-height: 70px;
  margin-top: 15px;
  @media only screen and (max-width:1000px){
    width: 100%;
    height: 70px;
    margin-top: 0;
    &:hover {
      border: none;
      -webkit-box-shadow:0px 0px 5px 0px ${({theme}) => theme.shadow}; 
      box-shadow:0px 0px 5px 0px ${({theme}) => theme.shadow};
    }
}
`
export const MenuLink = styled.a`
  text-decoration: none;
  font-weight: bold;
  font-size: 1.2rem;
  color: ${({theme})=> theme.text};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  transition: all .2s ease;
  text-decoration: none;
  padding: 0 15px 0 15px;
  background: ${({theme, bg}) => bg && theme.text};
  color: ${({theme, bg}) => bg && theme.textHover};
  &:hover {
    color: #E38B06;
    transform: traslateY(-3rem);
    text-decoration: none;
    cursor: pointer;
  }
  &:active {
      transform: traslateY(3rem);
      color: ${({theme, bg}) => !bg && theme.textHover};
  }
  @media only screen and (max-width:1000px){
      display: block;
      text-align: center;
      transition: all .2s ease;
      color: ${({theme, bg}) => bg && theme.textHover};
  }
`;

export const MenuItemBtn = styled.li`
  list-style: none;
  @media screen and (max-width:1000px){
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50%;
      height: 120px;
  }
`;

export const MenuLinkBtn = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
  & > a {
    text-decoration: none;
  }
`;