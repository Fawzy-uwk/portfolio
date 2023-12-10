import { Canvas } from "@react-three/fiber";

import { OrbitControls, Stage } from "@react-three/drei";
import HTML from "./Html";
import styled from "styled-components";

const Card = styled.div`
  background-color: #f8d6c3;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: absolute;
  right: 0%;
  font-weight: 550;
  bottom:40%;
  font-size: 18px;
  width: 220px;
  @media only screen and (max-width:768px) {
    height: 130px;
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

function Html() {
  return (
    <>
      <Canvas style={{ padding: "15px",zIndex:7000 }}>
        <Stage environment="city" intensity={0.8}>
          <HTML />
        </Stage>
        <OrbitControls enableZoom={false} />
      </Canvas>
      <Card>
        The HyperText Markup Language or HTML is the standard markup language
        
      </Card>
    </>
  );
}

export default Html;
