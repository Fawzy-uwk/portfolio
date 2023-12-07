import { Canvas } from "@react-three/fiber";

import { OrbitControls, Stage } from "@react-three/drei";

import React from "./React";
import styled from "styled-components";

const Card = styled.div`
  background-color: #3b79ea;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  color: #FFF;
  align-items: center;
  justify-content: center;
  
  position: absolute;
  right:10%;
  font-weight: 550;
  bottom: 5%;
  font-size: 18px;
  width: 20%;
  @media only screen and (max-width:768px) {
    height: 160px;
    top: 50px;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    width: 200px;
    padding: 5px !important;
    font-size:15px;
  }
`;
function ReactJs() {
  return (
    <>
      <Canvas style={{ padding: "15px", zIndex: 7000 }}>
        <Stage environment="city" intensity={0.8}>
          <React />
        </Stage>
        <OrbitControls enableZoom={false} />
      </Canvas>
      <Card>
        A free and open-source front-end JavaScript library for building user
        interfaces based on components. It is maintained by Meta (formerly
        Facebook).
      </Card>
    </>
  );
}

export default ReactJs;
