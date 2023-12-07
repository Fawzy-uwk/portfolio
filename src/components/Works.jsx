import styled from "styled-components";

import Section from "../UI/Section";
import { StyleSheetManager } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";

import { useState } from "react";
import Css from "./Styling";
import Html from "./Building";
import WebDev from "./WebDev";
import ReactJs from "./ReactJs";
import JavaScript from "./JavaScript";

const data = ["Web Dev", "Html", "CSS", "JavaScript", "React Js"];
const Contain = styled.div`
  scroll-snap-align: center;
  display: flex;
  flex-direction: row;
  position: relative;
  align-items: center;
  width: 1400px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    gap: 150px;
  }
`;
const Left = styled.div`
  list-style: none;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  justify-content: center;
`;
const Right = styled.div`
  flex: 1;

  height: 55vh;
  @media only screen and (max-width: 768px) {
    
  }
`;
const UL = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
`;
const List = styled.li`
  font-size: 85px;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;
  white-space: nowrap;
  cursor: pointer;
  /* -webkit-text-fill-color:  pink; */
  &::after {
    content: "${(props) => props.text}";
    position: absolute;
    left: 0;
    top: 0;
    color: pink;
    width: 0;
    overflow: hidden;
  }
  &:hover {
    &::after {
      animation: moveText 0.8s both linear;

      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }
  @media only screen and (max-width: 768px) {
    font-size: 28px;
    text-align: center;
  }
`;

function Works() {
  const [model, setModel] = useState();

  return (
    <StyleSheetManager shouldForwardProp={(bg) => isPropValid(bg)}>
      <Section bg="./bg.jpeg">
        <Contain>
          <Left>
            <UL>
              {data.map((item, index) => (
                <List key={index} text={item} onClick={() => setModel(item)}>
                  {item}
                </List>
              ))}
            </UL>
          </Left>
          <Right>
            {model === "Web Dev" ? (
              <WebDev />
            ) : model === "Html" ? (
              <Html />
            ) : model === "CSS" ? (
              <Css />
            ) : model === "JavaScript" ? (
              <JavaScript />
            ) : model === "React Js" ? (
              <ReactJs />
            ) : (
              <WebDev />
            )}
          </Right>
        </Contain>
      </Section>
    </StyleSheetManager>
  );
}

export default Works;
