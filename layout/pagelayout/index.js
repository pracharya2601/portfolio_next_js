import styled from 'styled-components';
import { Container } from 'reactstrap';
import Footer from 'layout/footer';

const Pagelayout = ({children, nopadding}) => {
  return (
    <PageContainer fluid={true}>
      <MainContainer padding={nopadding} id="maincontainer">
        {children}
      </MainContainer>
      <Footer />
    </PageContainer>
  )
}

export default Pagelayout;

const PageContainer = styled(Container)`
  max-height: 100vh;
  height: 100vh;
  width: 100%;
  padding:0;
  overflow: auto;
  display: flex;
  flex-flow: column;
`
const MainContainer = styled.div`
  padding-top: ${({padding}) => !padding && '70px'};
  flex-grow:  1;
`