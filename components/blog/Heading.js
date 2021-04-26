import styled from 'styled-components';

const Heading = ({type, children}) => {
  switch(type) {
    case "h1": return <H1>{children}</H1>;
    case "h2": return <H2>{children}</H2>;
    case "h3": return <H3>{children}</H3>;
    case "h4": return <H4>{children}</H4>;
    case "h5": return <H5>{children}</H5>;
    case "h6": return <H6>{children}</H6>;
    default: return <h2>{children}</h2>;
  }
}

export default Heading;

const H1 = styled.h1`
padding: 0 10px;
@media (max-width:499px){
  font-size: 1.3rem;
}
`
const H2 = styled.h2`
padding: 0 10px;
@media (max-width:499px){
  font-size: 1.2rem;
}
`
const H3 = styled.h3`
padding: 0 10px;
@media (max-width:499px){
  font-size: 1.1rem;
}
`
const H4 = styled.h4`
padding: 0 10px;
@media (max-width:499px){
  font-size: 1.0rem;
}
`
const H5 = styled.h5`
padding: 0 10px;
@media (max-width:499px){
  font-size: 0.9rem;
}
`
const H6 = styled.h6`
padding: 0 10px;
@media (max-width:499px){
  font-size: 0.8rem;
}
`