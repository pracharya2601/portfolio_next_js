import styled, { keyframes } from "styled-components";

const ContainerSplash = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1;
    height: ${({height}) => height || `100%`};
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background:${({theme}) => theme.bg};
`
const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  border-top: 2px solid transparent;
  border-right: 4px solid black;
  border-bottom: 2px solid transparent;
  border-left: 4px solid black;
  background: transparent;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Skeleton = ({splashText}) => {
  return (
      <ContainerSplash>
          <Spinner />
          {splashText && <h2>{splashText}</h2>}
      </ContainerSplash>
  )
}

export default Skeleton;