import styled from "styled-components";

import Section from "../UI/Section";

import Button from "../UI/Button";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Cube from "./Cube";
import { StyleSheetManager } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";

const Contain = styled.div`
  scroll-snap-align: center;
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 30px !important;
  width: 1400px;
  height: 100vh;
  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 100vh;
    flex-direction: column !important;
    justify-content: center;

    gap: 0px !important;
  }
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.3rem;
  width: 100%;
  text-align: center;
  @media only screen and (max-width: 768px) {
    padding: 0 10px;
  }
`;
const Left = styled.div`
  flex: 1;
  position: relative;
  @media only screen and (max-width: 768px) {
    height: 400px;
  }
`;
/*eslint-disable */
function Who() {
  return (
    <StyleSheetManager shouldForwardProp={(bg) => isPropValid(bg)}>
      <Section bg="./bg.jpeg">
        <Contain>
          <Left>
            <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
              <OrbitControls
                enableZoom={false}
                autoRotate
                autoRotateSpeed={Math.PI / 2}
              />
              <ambientLight intensity={2} />
              <directionalLight position={[3, 2, 1]} />
              <Cube />
            </Canvas>
          </Left>
          <Right>
            <h1 className="text-3xl md:text-6xl text-white font-bold">
              Think Outside The Box
            </h1>
            <span className=" capitalize text-pink-500 md:text-[20px]  font-semibold">
              ---- what we do
            </span>
            <p className="text-pink-100 md:text-[20px] font-semibold  ">
              We enjoy creating something that delights you and you will be
              happy to see
            </p>
            <Button w={35} h="auto">
              See Our Work
            </Button>
          </Right>
        </Contain>
      </Section>
    </StyleSheetManager>
  );
}

export default Who;
