import { styled } from "styled-components";
const Container = styled.div`
  height: 100vh;
  background-color: transparent;
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
  overflow-y: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export default Container;
