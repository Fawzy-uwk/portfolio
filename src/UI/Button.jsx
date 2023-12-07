import styled from "styled-components";
import PropTypes from "prop-types";
const StyledButton = styled.button`
  padding: 8px 20px;
  background-color: #f527f5;
  font-size: 20px;
  height: ${(props) => (props.h ? `${props.h}rem` : "auto")} !important;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 700;
  cursor: pointer;
  text-align: center;
  width: ${(props) => (props.w ? `${props.w}%` : "100%")} !important;
  &:hover {
    background: transparent;
    border: solid 1px #f527f5;
  }

  @media only screen and (max-width: 768px) {
    padding: 6px 16px;
    font-size: 16px;
    font-weight:600;
  }
`;

const Button = (props) => {
  return (
    <StyledButton type="submit" w={props.w} h={props.h}>
      {props.children}
    </StyledButton>
  );
};
Button.propTypes = {
  children: PropTypes.node.isRequired,
  w: PropTypes.node.isRequired,
  h: PropTypes.node.isRequired,
};
export default Button;
