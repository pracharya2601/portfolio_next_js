import Link from 'next';
import { NavbarContainer } from 'layout/header/header.styles';
import { 
  FootContainer,
  SocialMediaContainer,
  MediaBtn,

} from './footer.styled';

import {Github} from '@styled-icons/bootstrap/Github';
import {Linkedin} from '@styled-icons/bootstrap/Linkedin';
import {TwitterSquare} from '@styled-icons/fa-brands/TwitterSquare';
import {Email} from '@styled-icons/material-rounded/Email';

const Footer = (props) => {
  return (
    <FootContainer id="footer">
        <SocialMediaContainer>
          <MediaBtn>
            <Github size="30" />
          </MediaBtn>
          <MediaBtn>
            <Linkedin size="30" />
          </MediaBtn>
          <MediaBtn>
            <TwitterSquare size="30" />
          </MediaBtn>
          <MediaBtn>
            <Email size="30" />
          </MediaBtn>
        </SocialMediaContainer>
        <div style={{textAlign: 'center', width: '100%' }}>Copyright@2020</div>
    </FootContainer>
  )
}

export default Footer;