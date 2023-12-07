import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import {  OrbitControls } from "@react-three/drei";


import Section from "../UI/Section";
import Cube from "./Cube";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;



function Test() {
  return (
    <Section bg="./bg.jpeg">
      <Container>
        <Canvas>
          <OrbitControls enableZoom={false} autoRotate/>
          <ambientLight intensity={2} />
          <directionalLight position={[3, 2, 1]} />
          <Cube />
        </Canvas>
      </Container>
    </Section>
  );
}

export default Test;
