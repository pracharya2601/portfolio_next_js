import Head from 'next/head';
import styled from 'styled-components';

import Header from "layout/header";

const BaseLayout = ({children}) => {
  return(
    <AppContainer>
      <Header />
      {children}
    </AppContainer>
  )
}

export default BaseLayout;

const AppContainer = styled.main`
  height: 100%;
  width: 100%;
  overflow: hidden;
`

