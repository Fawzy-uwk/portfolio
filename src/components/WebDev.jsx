import { Canvas } from "@react-three/fiber";

import { OrbitControls, Stage } from "@react-three/drei";

import Web from "./Web";
import styled from "styled-components";
const Card = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* text-align: center; */
  position: absolute;
  right: 50px;
  font-weight:550;
  top: 15%;
  font-size: 18px;
  width:250px;
  @media only screen and (max-width:768px) {
    height: 120px;
    top: 50px;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    width: 200px;
    padding: 5px !important;
    font-size:16px;
  }
`;
function WebDev() {
  return (
    <>
      <Canvas style={{ padding: "15px",zIndex:7000 }}>
        <Stage environment="city" intensity={0.8}>
          <Web />
        </Stage>
        <OrbitControls enableZoom={false} />
      </Canvas>
      <Card>
        Web designing is very important in our life and very requested in most companies
      </Card>
    </>
  );
}

export default WebDev;
