import styled from "styled-components";
import Section from "../UI/Section";
import Button from "../UI/Button";
import Map from "./Map";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { StyleSheetManager } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";

const Contain = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 60px !important;
  width: 100%;
  height: 100%;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
  }
`;

const Left = styled.div`
  list-style: none;
  width: 100%;
  flex: 1;
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Form = styled.form`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  @media only screen and (max-width: 768px) {
    width: 300px;
    align-items: start;
  }
`;
const Input = styled.input`
  background-color: white;
  font-size: 16px;
  border: none;
  outline: none;
  border-radius: 8px;
  padding: 20px 10px;
  width: 100%;
  @media only screen and (max-width: 768px) {
    padding: 12px 5px;
  }
`;
const Right = styled.div`
  flex: 1;
  position: relative;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
const Textarea = styled.textarea`
  max-height: 12rem;
  min-height: 10rem;
  max-width: 100%;
  font-size: 18px;
  border: none;
  outline: none;
  border-radius: 8px;
  padding: 10px;
  min-width: 100%;
`;

function Contact() {
  const [success, setSuccess] = useState(false);
  const ref = useRef();
  const handelSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rxq1h7r",
        "template_ovd7vn6",
        ref.current,
        "gTSrVTENI5FuEJYVq"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };
  return (
    <StyleSheetManager shouldForwardProp={(bg) => isPropValid(bg)}>
      <Section bg="./bg.jpeg">
        <Contain>
          <Left className="space-y-5">
            <Form ref={ref} onSubmit={handelSubmit}>
              <h2 className="text-pink-100 text-[40px]">Contact Us</h2>
              <Input placeholder="Name" type="text" name="name" />

              <Input placeholder="Email" type="email" name="email" />
              <Textarea
                placeholder="Please leave a message"
                name="message"
                rows={10}
              />
              <Button h={3.5} w={100}>
                Send
              </Button>
            </Form>
            {success && (
              <p className="text-pink-100 text-lg font-bold text-center">
                We have recieved your message , and we will see your message
                soon 😇{" "}
              </p>
            )}
          </Left>
          <Right>
            <Map />
          </Right>
        </Contain>
      </Section>
    </StyleSheetManager>
  );
}

export default Contact;
