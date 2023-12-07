import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import Button from "../UI/Button";
import { useState } from "react";

const StyledNav = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
    position: relative;
    z-index: 50000;
    position: fixed;
  }
`;
const Container = styled.div`
  width: 1400px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0px;
  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
    flex-direction: column;
    align-items: start;
    /* background-color:#092147; */
    color: #000;
    /* From https://css.glass */

    -webkit-backdrop-filter: blur(8.7px);
    background: rgba(24, 7, 99, 0.5);
    border-radius: 2px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(50px);
    -webkit-backdrop-filter: blur(50px);
  }
`;
const UL = styled.ul`
  list-style: none;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
    flex-direction: column;
    display: ${(props) => (props.show ? "block" : "none")};
  }
`;
const LI = styled.li`
  list-style: none;
  color: #fff;
  display: flex;
  align-items: center;

  gap: 30px;

  @media only screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;
const A = styled.a`
  text-decoration: none;
  font-size: 18px;
  font-weight: 550;
  color: #fff;
  text-transform: capitalize;
  cursor: pointer;
  &:hover {
    color: #f527c3;
  }
`;
const Icons = styled.div`
  display: flex;
  align-items: center;
  margin-left: 8px;
  @media only screen and (max-width: 768px) {
    margin-bottom: 10px;
    display: ${(props) => (props.show ? "block" : "none")};
  }
`;

const List = styled.div``;
function Nav() {
  const [show, setShow] = useState(false);

  return (
    <StyledNav>
      <Container show={!show}>
        <List className="flex items-center md:flex-row  flex-col gap-[20px] relative">
          <img style={{ height: "50px" }} src="./logo.png" />
          <UL show={show}>
            <LI>
              <A>Home</A>
              <A>studio</A>
              <A>work</A>
              <A>Contact</A>
            </LI>
          </UL>
        </List>

        <Icons className="hidden md:block" show={show}>
          <Button h="auto" w={100}>
            Login
          </Button>
        </Icons>

        {
          <FaBars
            className="md:hidden absolute top-0 right-0 text-gray-50 text-2xl m-5"
            onClick={() => setShow(!show)}
          />
        }
      </Container>
    </StyledNav>
  );
}

export default Nav;
