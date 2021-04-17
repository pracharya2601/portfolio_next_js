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
  max-height: 100vh;
  min-height:100vh;
  width: 100%;
  overflow-x: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
`

