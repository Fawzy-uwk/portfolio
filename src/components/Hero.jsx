import styled from "styled-components";

import Nav from "./Nav";
import Button from "../UI/Button";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { StyleSheetManager } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";

const Section = styled.section`
  height: 100vh;
  scroll-snap-align: center;
  background: url(${(props) => props.bg}) no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`;

const Contain = styled.div`
  scroll-snap-align: center;
  display: flex;
  position: relative;
  justify-content: space-between;
  width: 1400px;
  height: 100% !important;
  
  gap:10px;
  line-height: 2;

  @media only screen and (max-width: 768px) {
    flex-direction:column;
    align-items:center;
    justify-content: center !important;
    width:100%;
    padding:0 15px;
  }
`;
const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.3rem;

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
    justify-content: center;
  }
`;
const Right = styled.div`
  flex: 3;
  position: relative;
  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
    justify-content: center;
  }
`;
const Img = styled.img`
  width: 75%;
  height: 85%;

  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @keyframes animate {
    100% {
      transform: translateY(-50px);
    }

    
  }
  @media only screen and (max-width: 768px) {
      width:300px;
      height: 300px;
    }
`;

/*eslint-disable */
function Hero() {
  return (
    <StyleSheetManager shouldForwardProp={(prop) => isPropValid(prop)}>
      <Section bg="./bg.jpeg">
        <Nav />
        <Contain>
          <Left>
            <h1 className="text-6xl text-center md:text-start md:text-6xl leading-snug md:leading-snug text-white font-bold">
              Think. Make. <span className="text-pink-400">Solve</span>
            </h1>
            <span className=" capitalize text-pink-500 text-[18px] md:text-[20px] font-semibold ">
              ---- what we do
            </span>
            <p className="text-pink-100 text-[20px] font-semibold text-center  md:text-start  md:w-96">
              We enjoy creating something that delights you and you will be
              happy to see
            </p>
            <Button w={40} h="auto">
              Learn More
            </Button>
          </Left>
          <Right>
            <Canvas>
              <Suspense fallback={null}>
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={1} />
                <directionalLight position={[3, 2, 1]} />
                <Sphere args={[1, 100, 300]} scale={2.55}>
                  <MeshDistortMaterial
                    color="#3f1c56"
                    attach="material"
                    distort={0.5}
                    speed={2}
                  />
                </Sphere>
              </Suspense>
            </Canvas>
            <Img src="./moon.png " />
          </Right>
        </Contain>
      </Section>
    </StyleSheetManager>
  );
}

export default Hero;
