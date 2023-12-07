import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Js from "./Js";
import styled from "styled-components";

const Card = styled.div`
  background-color: #feffbd;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: absolute;
  right: 10%;
  font-weight: 550;
  top: 5%;
  font-size: 18px;
  width: 250px;
  @media only screen and (max-width:768px) {
    top: 100px;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    height: 180px;
    width: 200px;
    padding: 5px !important;
    font-size:16px;
  }
`;
function JavaScript() {
  return (
    <>
      <Canvas style={{ padding: "15px",zIndex:7000 }}>
        <Stage environment="city" intensity={0.5}>
          <Js />
        </Stage>
        <OrbitControls enableZoom={false} />
      </Canvas>
      <Card>
        a programming language that is one of the core technologies of the World
        Wide Web, alongside HTML and CSS
      </Card>
    </>
  );
}

export default JavaScript;
