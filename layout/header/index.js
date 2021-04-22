import React, { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {Sun} from '@styled-icons/boxicons-regular/Sun';
import {Moon} from '@styled-icons/boxicons-regular/Moon';
import {Cross} from '@styled-icons/entypo/Cross';
import {Navicon} from '@styled-icons/evil/Navicon';
import {
  Nav,
  NavbarContainer,
  NavAnchor,
  MenuIcon,
  Menu,
  MenuItem,
  MenuLink,
  CrossBtn,
  ThemeIcon

} from './header.styles';

import themecontext from "context/theme/themecontext";

const Header = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter()


  const handleClick = () => setOpen(!open);
  const handleClose = (to) => {
    router.push(to);
    setOpen(false);
  }
  const {theme, changeTheme} = useContext(themecontext);
  return (
    <Nav>
      <NavbarContainer>
        <NavAnchor onClick={() => handleClose('/#home')}>
          <span>{"<"}</span>
          Prakash
          <span>{"/>"}</span>
        </NavAnchor>
        <ThemeIcon onClick={() => changeTheme(theme)}>
          {theme === 'dark' ? <Sun color="yellow" size="40" />: <Moon color="black" size="30" />}
        </ThemeIcon>
        <MenuIcon onClick = {handleClick}>
          {open ? <Cross size="38" />: <Navicon size="38"/>}
        </MenuIcon>
        <Menu open={open} onClick = {handleClick}>
          <CrossBtn size="48"/>
          <MenuItem>
            <MenuLink 
              onClick={() => handleClose('/#about')}
              >About</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink 
              onClick={() => handleClose('/#skills')}
              >Skills</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink onClick={() => handleClose('/portfolio')}>Portfolio</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink onClick={() => handleClose('/cv')}>CV</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink onClick={() => handleClose('/blog')}>Blog</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink 
              onClick={() => handleClose('/#contact')}
              >Contact</MenuLink>
          </MenuItem>
          {/* {router.pathname && (
            <>
            { <MenuItem onClick={() => handleClose('/api/login')}>
              <MenuLink bg >Login</MenuLink>
            </MenuItem>}
            </>
          )} */}
        </Menu>
      </NavbarContainer>
    </Nav>
  )
}

export default Header;
