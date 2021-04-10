import React, { Fragment, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'
import {
  Nav,
  NavbarContainer,
  NavAnchor,
  MenuIcon,
  Menu,
  MenuItem,
  MenuLink,
  CrossBtn

} from './header.styles';

import {Cross} from '@styled-icons/entypo/Cross';
import {Navicon} from '@styled-icons/evil/Navicon';

const Header = () => {
  const [open, setOpen] = useState(false);

  const router = useRouter()

  const handleClick = () => setOpen(!open);
  const handleClose = (to) => {
    router.push(to);
    setOpen(false);
  }
  return (
    <Nav>
      <NavbarContainer>
        <Link href="/">
          <NavAnchor>Prakash Ac.</NavAnchor>
        </Link>
        <MenuIcon onClick = {handleClick}>
          {open ? <Cross size="38" />: <Navicon size="38"/>}
        </MenuIcon>
        <Menu open={open} onClick = {handleClick}>
          <CrossBtn size="48"/>
          <MenuItem>
            <MenuLink onClick={() => handleClose('/about')}>About</MenuLink>
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
        </Menu>
      </NavbarContainer>
    </Nav>
  )
}

export default Header;
