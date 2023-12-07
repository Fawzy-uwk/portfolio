import styled from "styled-components";

const Section = styled.section`
  height: 100vh;
  scroll-snap-align: center;
  background: url(${(props) => props.bg}) no-repeat;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
`;


export default Section;
