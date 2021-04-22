import styled from 'styled-components';
import { Container } from 'reactstrap';
import Footer from 'layout/footer';

const Pagelayout = ({children, nopadding, onScroll}) => {
  return (
    <PageContainer fluid={true} id="pagecontainer">
      <MainContainer padding={nopadding} id="maincontainer" onScroll={onScroll}>
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
  scroll-behavior: smooth;
`
const MainContainer = styled.div`
  padding-top: ${({padding}) => !padding && '70px'};
  flex-grow:  1;
  scroll-behavior: smooth;
`