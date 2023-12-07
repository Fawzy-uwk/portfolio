import { Canvas } from "@react-three/fiber";

import { OrbitControls, Stage } from "@react-three/drei";
import CSS from "./Css";
import styled from "styled-components";
const Card = styled.div`
  background-color: #d5d4ff;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  position: absolute;
  right: 50px;
  font-weight: 550;
  bottom: 5%;
  font-size: 18px;
  width: 20%;
  @media only screen and (max-width:768px) {
    height: 150px;
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
function Css() {
  return (
    <>
      <Canvas style={{ padding: "15px",zIndex:7000 }}>
        <Stage environment="city" intensity={0.8}>
          <CSS />
        </Stage>
        <OrbitControls enableZoom={false} />
      </Canvas>
      <Card>
        It is a style sheet language used for describing the presentation of a
        document written in a markup language .
      </Card>
    </>
  );
}

export default Css;
